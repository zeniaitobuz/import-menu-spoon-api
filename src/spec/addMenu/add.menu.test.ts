import axios from "axios";
import "jest-extended";

describe("Add menu from Zomato", () => {
  const outletID = "66221d9b846fd45e24790b7c";
  const baseURL = "http://localhost:4000/";
  const credentials = {
    email: "ashutosh@itobuz.com",
    password: "Admin@1234",
  };

  const headers: { app: string; Authorization?: string } = {
    app: "admin",
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
    "https://www.zomato.com/ncr/the-belgian-waffle-co-alpha-1-greater-noida/order",
    "https://www.zomato.com/ncr/nazeer-foods-alpha-1-greater-noida/order",
    "https://www.zomato.com/ncr/chaayos-chai-snacks-relax-phi-3-greater-noida/order",
    "https://www.zomato.com/ncr/biryani-blues-phi-3-greater-noida/order",
    "https://www.zomato.com/ncr/bikkgane-biryani-jaypee-greens/order",
    "https://www.zomato.com/ncr/biryani-by-kilo-alpha-2-greater-noida/order",
    "https://www.zomato.com/ncr/cheesecake-co-delta-1-greater-noida/order",
    "https://www.zomato.com/ncr/faasos-wraps-rolls-surajpur-noida/order",
    "https://www.zomato.com/ncr/the-burger-company-alpha-2-greater-noida/order",
    "https://www.zomato.com/ncr/kwality-walls-frozen-dessert-and-ice-cream-shop-alpha-2-greater-noida/order",
    "https://www.zomato.com/ncr/nirulas-beta-1-greater-noida/order",
    "https://www.zomato.com/ncr/pizza-a-goodness-gamma-1-greater-noida/order",
    "https://www.zomato.com/ncr/sagar-ratna-beta-2-greater-noida/order",
    "https://www.zomato.com/ncr/the-waffle-co-alpha-1-greater-noida/order",
    "https://www.zomato.com/ncr/khan-chacha-1-alpha-2-greater-noida/order",
    "https://www.zomato.com/ncr/box8-desi-meals-sector-pi-greater-noida/order",
    "https://www.zomato.com/ncr/gianis-ice-cream-shakes-sundaes-surajpur-noida/order",
    "https://www.zomato.com/ncr/omnos-pizza-sector-pi/order",
    "https://www.zomato.com/ncr/bercos-if-you-love-chinese-beta-2-greater-noida/order",
    "https://www.zomato.com/ncr/keventers-milkshakes-desserts-alpha-2-greater-noida/order",
    "https://www.zomato.com/ncr/aggarwal-bikaneri-sweets-and-restaurant-beta-1-greater-noida/order",
    "https://www.zomato.com/ncr/karims-phi-3-greater-noida/order",
    "https://www.zomato.com/ncr/barbeque-nation-beta-2-greater-noida/order",
    "https://www.zomato.com/ncr/natural-ice-cream-phi-4-greater-noida/order",
    "https://www.zomato.com/ncr/cake-o-clocks-alpha-2-greater-noida/order",
    "https://www.zomato.com/ncr/mad-over-donuts-delta-1-greater-noida/order",
    "https://www.zomato.com/ncr/pizza-47-1-beta-1-greater-noida/order",
    "https://www.zomato.com/ncr/pizzasia-alpha-2-greater-noida/order",
    "https://www.zomato.com/ncr/kake-da-hotel-since-1931-chi-4-greater-noida/order",
    "https://www.zomato.com/ncr/komal-pizza-1-sector-pi-greater-noida/order",
    "https://www.zomato.com/ncr/giani-alpha-1-greater-noida/order",
    "https://www.zomato.com/ncr/khans-kathi-rolls-gamma-1/order",
    "https://www.zomato.com/ncr/dum-safar-biryani-beta-2-greater-noida/order",
    "https://www.zomato.com/ncr/pind-balluchi-alpha-2-greater-noida/order",
    "https://www.zomato.com/ncr/mojo-pizza-2x-toppings-sector-pi-greater-noida/order",
    "https://www.zomato.com/ncr/onlinecake-in-1-alpha-2-greater-noida/order",
    "https://www.zomato.com/ncr/bansooriwalas-alpha-1-greater-noida/order",
  ];

  test(` Add menu from Zomato `, async () => {
    const loginResponse = await axios.post(`${baseURL}login`, credentials, {
      headers,
    });
    const accessToken = loginResponse.data.data.accessToken;
    headers.Authorization = `Bearer ${accessToken}`;

    let categoryItemCountForSpoon: any = {};
    let categoryItemCountForZomato: any = {};

    for (let eachMenu of menuList) {
      await axios.post(
        `${baseURL}menu-editor/zomato/menu/copy`,
        {
          outletId: outletID,
          zomatoUrl: eachMenu,
        },
        {
          headers,
        }
      );

      const restaurantDataUrl = eachMenu.replace(
        "https://www.zomato.com/",
        "https://www.zomato.com/webroutes/getPage?page_url=/"
      );

      const menuFromZomato = await (await fetch(restaurantDataUrl)).json();
      for (let categoryZomato of menuFromZomato.page_data.order.menuList
        .menus) {
        let subCategoriesZomato = {};

        categoryZomato.menu.categories.forEach((subCategory) => {
          if (subCategory.category.name) {
            subCategoriesZomato = {
              ...subCategoriesZomato,
              [subCategory.category.name]: subCategory.category.items.length,
            };
            categoryItemCountForZomato = {
              ...categoryItemCountForZomato,
              [categoryZomato.menu.name]: subCategoriesZomato,
            };
          } else {
            categoryItemCountForZomato = {
              ...categoryItemCountForZomato,
              [categoryZomato.menu.name]: subCategory.category.items.length,
            };
          }
        });
      }
    }

    const menuFromOutlet = await axios.get(`${baseURL}menu/${outletID}`);

    for (let i = 0; i < menuFromOutlet.data.data.menu.length; i++) {
      let subCategorySpoon = {};
      if (menuFromOutlet.data.data.menu[i].categoryName !== "Popular Items") {
        if (menuFromOutlet.data.data.menu[i].subCategories.length > 0) {
          menuFromOutlet.data.data.menu[i].subCategories.forEach(
            (subCategories) => {
              subCategorySpoon = {
                ...subCategorySpoon,
                [subCategories.categoryName]: subCategories.items.length,
              };
              categoryItemCountForSpoon = {
                ...categoryItemCountForSpoon,
                [menuFromOutlet.data.data.menu[i].categoryName]:
                  subCategorySpoon,
              };
            }
          );
        } else {
          categoryItemCountForSpoon = {
            ...categoryItemCountForSpoon,
            [menuFromOutlet.data.data.menu[i].categoryName]:
              menuFromOutlet.data.data.menu[i].items.length,
          };
        }
      }
    }

    console.log(categoryItemCountForZomato);
    console.log(categoryItemCountForSpoon);
    expect(categoryItemCountForSpoon).toStrictEqual(categoryItemCountForZomato);
  }, 500000);
  // }
});
