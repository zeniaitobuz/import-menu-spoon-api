import axios, { AxiosError } from "axios";
import { realpathSync } from "fs";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

instance.interceptors.request.use(
  function (request) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with request data

    request.headers.set("app", "admin");
    return request;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // console.log(error.message);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error instanceof AxiosError) {
      return Promise.reject(error.response);
    } else {
      return Promise.reject(error.message);
    }
  }
);

export const api = {
  login: async (credentials: { email: string; password: string }) => {
    try {
      const loginResponse = await instance.post("/login", credentials);
      const accessToken = loginResponse.data.accessToken;
      instance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${accessToken}`;
    } catch (e: any) {
      return Promise.reject(e);
    }
  },
  importZomato: async (payload: { toOutletId: string; menuUrl: string }) => {
    return await instance.post("menu-editor/zomato/menu/copy", payload);
  },
  importSwiggy: async (payload: { toOutletId: string; menuUrl: string }) => {
    return await instance.post("menu-editor/swiggy/menu/copy", payload);
  },
  menuFromOutlet: async (outletId: string) => {
    return await instance.get(`menu/${outletId}`);
  },
  unlink: async (payload: {
    categoryId: string;
    itemId: string;
    outletId: string;
  }) => {
    return await instance.delete("menu-editor/delete-item-from-category", {
      data: payload,
    });
  },
  deleteSubCategory: async (payload: {
    categoryId: string;
    categoryName: string;
    parentCategoryId: string;
  }) => {
    return await instance.post(`menu-editor/add-edit-category`, payload);
  },
  deleteCategory: async (categoryId: string) => {
    return await instance.delete(`menu-editor/delete-category/${categoryId}`);
  },
};
