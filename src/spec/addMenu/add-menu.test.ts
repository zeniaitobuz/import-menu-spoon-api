import axios from "axios";
import { api } from "./api";

describe("Add menu from Zomato", () => {
  const outletID = "66221d9b846fd45e24790b7a";
  const baseURL = "http://localhost:4000/";
  const credentials = {
    email: "ashutosh@itobuz.com",
    password: "Admin@1234",
  };

  const menuList = [
    "https://www.zomato.com/ncr/kfc-knowledge-park/order",
    "https://www.zomato.com/ncr/roms-pizza-chi-1-greater-noida/order",
    "https://www.zomato.com/ncr/nazeer-foods-alpha-1-greater-noida/order",
    "https://www.zomato.com/ncr/chawlas-2-since-1960-alpha-2-greater-noida/order",
    "https://www.zomato.com/ncr/behrouz-biryani-surajpur-noida/order",
    "https://www.zomato.com/ncr/tree-house-alpha-2-greater-noida/order",
    "https://www.zomato.com/ncr/oven-story-pizza-standout-toppings-surajpur-noida/order",
    "https://www.zomato.com/ncr/nic-ice-creams-alpha-2-greater-noida/order",
    "https://www.zomato.com/ncr/burger-king-jaypee-greens-greater-noida/order",
    "https://www.zomato.com/ncr/pizza-hut-knowledge-park/order",
    "https://www.zomato.com/ncr/haldirams-surajpur-noida/order",
    "https://www.zomato.com/ncr/la-pinoz-pizza-alpha-2-greater-noida/order",
    "https://www.zomato.com/ncr/bikanervala-alpha-2-greater-noida/order",
    "https://www.zomato.com/ncr/bakingo-alpha-2-greater-noida/order",
    "https://www.zomato.com/ncr/the-burger-club-phi-3-greater-noida/order",
    "https://www.zomato.com/ncr/subway-alpha-1/order",
    "https://www.zomato.com/ncr/wendys-burgers-surajpur-noida/order",
    "https://www.zomato.com/ncr/rollsking-alpha-1-greater-noida/order",
    "https://www.zomato.com/ncr/veer-ji-malai-chaap-wale-alpha-2-greater-noida/order",
    "https://www.zomato.com/ncr/burger-singh-big-punjabi-burgers-1-alpha-1-greater-noida/order",
    "https://www.zomato.com/ncr/wow-momo-alpha-1-greater-noida/order",
    "https://www.zomato.com/ncr/theobroma-alpha-2-greater-noida/order",
    "https://www.zomato.com/ncr/chicago-pizza-1-phi-3-greater-noida/order",
    // "https://www.zomato.com/ncr/the-belgian-waffle-co-alpha-1-greater-noida/order",
    // "https://www.zomato.com/ncr/nazeer-foods-alpha-1-greater-noida/order",
    // "https://www.zomato.com/ncr/chaayos-chai-snacks-relax-phi-3-greater-noida/order",
    // "https://www.zomato.com/ncr/biryani-blues-phi-3-greater-noida/order",
    // "https://www.zomato.com/ncr/bikkgane-biryani-jaypee-greens/order",
    // "https://www.zomato.com/ncr/biryani-by-kilo-alpha-2-greater-noida/order",
    // "https://www.zomato.com/ncr/cheesecake-co-delta-1-greater-noida/order",
    // "https://www.zomato.com/ncr/faasos-wraps-rolls-surajpur-noida/order",
    // "https://www.zomato.com/ncr/the-burger-company-alpha-2-greater-noida/order",
    // "https://www.zomato.com/ncr/kwality-walls-frozen-dessert-and-ice-cream-shop-alpha-2-greater-noida/order",
    // "https://www.zomato.com/ncr/nirulas-beta-1-greater-noida/order",
    // "https://www.zomato.com/ncr/pizza-a-goodness-gamma-1-greater-noida/order",
    // "https://www.zomato.com/ncr/sagar-ratna-beta-2-greater-noida/order",
    // "https://www.zomato.com/ncr/the-waffle-co-alpha-1-greater-noida/order",
    // "https://www.zomato.com/ncr/khan-chacha-1-alpha-2-greater-noida/order",
    // "https://www.zomato.com/ncr/box8-desi-meals-sector-pi-greater-noida/order",
    // "https://www.zomato.com/ncr/gianis-ice-cream-shakes-sundaes-surajpur-noida/order",
    // "https://www.zomato.com/ncr/omnos-pizza-sector-pi/order",
    // "https://www.zomato.com/ncr/bercos-if-you-love-chinese-beta-2-greater-noida/order",
    // "https://www.zomato.com/ncr/keventers-milkshakes-desserts-alpha-2-greater-noida/order",
    // "https://www.zomato.com/ncr/aggarwal-bikaneri-sweets-and-restaurant-beta-1-greater-noida/order",
    // "https://www.zomato.com/ncr/karims-phi-3-greater-noida/order",
    // "https://www.zomato.com/ncr/barbeque-nation-beta-2-greater-noida/order",
    // "https://www.zomato.com/ncr/natural-ice-cream-phi-4-greater-noida/order",
    // "https://www.zomato.com/ncr/cake-o-clocks-alpha-2-greater-noida/order",
    // "https://www.zomato.com/ncr/mad-over-donuts-delta-1-greater-noida/order",
    // "https://www.zomato.com/ncr/pizza-47-1-beta-1-greater-noida/order",
    // "https://www.zomato.com/ncr/pizzasia-alpha-2-greater-noida/order",
    // "https://www.zomato.com/ncr/kake-da-hotel-since-1931-chi-4-greater-noida/order",
    // "https://www.zomato.com/ncr/komal-pizza-1-sector-pi-greater-noida/order",
    // "https://www.zomato.com/ncr/giani-alpha-1-greater-noida/order",
    // "https://www.zomato.com/ncr/khans-kathi-rolls-gamma-1/order",
    // "https://www.zomato.com/ncr/dum-safar-biryani-beta-2-greater-noida/order",
    // "https://www.zomato.com/ncr/pind-balluchi-alpha-2-greater-noida/order",
    // "https://www.zomato.com/ncr/mojo-pizza-2x-toppings-sector-pi-greater-noida/order",
    // "https://www.zomato.com/ncr/onlinecake-in-1-alpha-2-greater-noida/order",
    // "https://www.zomato.com/ncr/bansooriwalas-alpha-1-greater-noida/order",
  ];

  test("login as admin", async () => {
    await api.login(credentials);
  });

  menuList.forEach((menu) => {
    const restaurantName = menu.substring(27, menu.length - 6);
    const categoryIdToDelete: any = [];
    let subcategoryToDelete: any = {};
    let itemIdToUnlink: any = {};

    test(`Import menu of restaurant - ${restaurantName}`, async () => {
      //Logging in as an admin

      const importMenu = await api.import({
        outletId: outletID,
        zomatoUrl: menu,
      });

      expect(importMenu.data).toBe("Menu imported successfully");
    }, 100000);

    test(`Check whether the menu of the restaurant - ${restaurantName} matches with the menu of Spoon`, async () => {
      let categoryItemCountForSpoon: any = {};
      let categoryItemCountForZomato: any = {};

      const restaurantDataLink = menu.replace(
        "https://www.zomato.com/",
        "https://www.zomato.com/webroutes/getPage?page_url=/"
      );

      //fetching the menu of each restaurant
      const menuFromZomato = await (await fetch(restaurantDataLink)).json();

      //iterating over the categories of a menu
      for (let categoryZomato of menuFromZomato.page_data.order.menuList
        .menus) {
        let subCategoriesZomato = {};

        //iterating over the subcategories of the menu if present
        categoryZomato.menu.categories.forEach((subCategory: any) => {
          //check if the subcategory name is present or not
          if (subCategory.category.name) {
            //storing the subcategory item count of each subcategory along with it's name
            subCategoriesZomato = {
              ...subCategoriesZomato,
              [subCategory.category.name]: subCategory.category.items.length,
            };

            //storing the item count of the category along with the category name
            categoryItemCountForZomato = {
              ...categoryItemCountForZomato,
              [categoryZomato.menu.name]: subCategoriesZomato,
            };
          } else {
            //storing just the category name and items count if subcategory is not present
            categoryItemCountForZomato = {
              ...categoryItemCountForZomato,
              [categoryZomato.menu.name]: subCategory.category.items.length,
            };
          }
        });
      }

      //fetching the menu of the outlet after importing all the restaurant's menu
      const menuFromOutlet = await axios.get(`${baseURL}menu/${outletID}`);

      //iterating over the menu of the outlet
      for (let menuFromSpoon of menuFromOutlet.data.data.menu) {
        let subCategorySpoon = {};

        //excluding the popular items category
        if (menuFromSpoon.categoryName !== "Popular Items") {
          categoryIdToDelete.push(menuFromSpoon._id);
          //check whether the subcategory is present in the category or not
          if (menuFromSpoon.subCategories.length > 0) {
            menuFromSpoon.subCategories.forEach((subCategories: any) => {
              //storing the items id to delete and unlink them later
              const itemsArray: any = [];
              subCategories.items.forEach((items: any) => {
                itemsArray.push(items._id);
              });
              //storing the subcategory id with the name
              subcategoryToDelete = {
                ...subcategoryToDelete,
                [subCategories.categoryName]: subCategories._id,
              };
              //storing the category id with the item id
              itemIdToUnlink = {
                ...itemIdToUnlink,
                [subCategories._id]: itemsArray,
              };

              //storing the subcategory and their items
              subCategorySpoon = {
                ...subCategorySpoon,
                [subCategories.categoryName]: subCategories.items.length,
              };
              categoryItemCountForSpoon = {
                ...categoryItemCountForSpoon,
                [menuFromSpoon.categoryName]: subCategorySpoon,
              };
            });
          }
          //for no subcategory
          else {
            const itemsArray: any = [];
            menuFromSpoon.items.forEach((items) => {
              //storing the items id to delete and unlink them later
              itemsArray.push(items._id);
            });

            //storing the item id with the category id
            itemIdToUnlink = {
              ...itemIdToUnlink,
              [menuFromSpoon._id]: itemsArray,
            };

            //storing the category name with their item count
            categoryItemCountForSpoon = {
              ...categoryItemCountForSpoon,
              [menuFromSpoon.categoryName]: menuFromSpoon.items.length,
            };
          }
        }
      }
      console.log(subcategoryToDelete, "SUBCATEGORY");
      console.log(categoryIdToDelete, "CATEGORY");

      expect(categoryItemCountForSpoon).toStrictEqual(
        categoryItemCountForZomato
      );
    }, 500000);

    test("Unlink the items ", async () => {
      //iterating over the category ids
      for (let categoryName in itemIdToUnlink) {
        //iterating over the items of each category
        for (let individualItems of itemIdToUnlink[categoryName]) {
          const unlinkResponse = await api.unlink({
            categoryId: categoryName,
            itemId: individualItems,
            outletId: outletID,
          });
          expect(unlinkResponse.message).toBe("Item un-linked successfully.");
        }
      }
    }, 50000);

    test(" Delete the sub categories ", async () => {
      for (let subCategory in subcategoryToDelete) {
        const payload = {
          categoryId: subcategoryToDelete[subCategory],
          categoryName: subCategory,
          parentCategoryId: "",
        };
        const deleteResponse = await api.deleteSubCategory(payload);
        expect(deleteResponse.message).toBe("Category updated successfully.");

        //after deleting the subcategory, adding it to the category id list to be deleted from the main category list
        categoryIdToDelete.push(subcategoryToDelete[subCategory]);
      }
    });

    test(" Delete the categories ", async () => {
      categoryIdToDelete.forEach(async (category: any) => {
        const deleteResponse = await api.deleteCategory(category);
        expect(deleteResponse.message).toBe("Category deleted successfully.");
      });
    }, 50000);

    // test("Delete the items ", async () => {
    //   //iterating over the category ids
    //   for (let categoryId in itemIdToUnlink) {
    //     //iterating over the items of each category
    //     for (let individualItems of itemIdToUnlink[categoryId]) {
    //       const itemDeleteResponse = await api.deleteItem(
    //         outletID,
    //         individualItems
    //       );
    //       expect(itemDeleteResponse.message).toBe("Item deleted successfully.");
    //     }
    //   }
    // }, 50000);
  });
});
