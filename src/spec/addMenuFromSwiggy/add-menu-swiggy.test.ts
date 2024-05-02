import { api } from "../api";
import puppeteer, { HTTPRequest } from "puppeteer";

describe("Add menu from swiggy", () => {
  const outletID = "663327f2c6e88e20918daa17";
  const credentials = {
    email: "ashutosh@itobuz.com",
    password: "Admin@1234",
  };

  const menuLinks = [
    "https://www.swiggy.com/restaurants/pizza-hut-kalikapur-kolkata-kolkata-769456",
    "https://www.swiggy.com/restaurants/barbeque-nation-kasba-kolkata-515519",
    "https://www.swiggy.com/restaurants/punjabi-rasoi-katju-nagar-jadavpur-kolkata-496259",
    "https://www.swiggy.com/restaurants/aminia-restaurant-golpark-kolkata-3022",
    "https://www.swiggy.com/restaurants/sharma-snacks-kasba-ruby-area-kolkata-130766",
    "https://www.swiggy.com/restaurants/kfc-rajdanga-main-road-acropolis-mall-kolkata-383830",
    "https://www.swiggy.com/restaurants/mcdonalds-kasba-rajdanga-road-kolkata-719437",
    "https://www.swiggy.com/restaurants/sananda-biriyani-near-popular-medical-hall-haltu-kolkata-40430",
    "https://www.swiggy.com/restaurants/food-peddler-sandwiches-vip-nagar-colony-ruby-area-kolkata-774062",
    "https://www.swiggy.com/restaurants/adarsha-hindu-hotel-south-gariahat-kolkata-184610",
    "https://www.swiggy.com/restaurants/relish-express-ruby-area-kolkata-828684",
    "https://www.swiggy.com/restaurants/wah-thali-meals-and-combos-ruby-area-kasba-kolkata-444357",
    "https://www.swiggy.com/restaurants/bake-me-good-ruby-area-kasba-kolkata-316231",
    "https://www.swiggy.com/restaurants/cookies-and-cakes-borough-viii-ruby-area-kolkata-445924",
    "https://www.swiggy.com/restaurants/ballygunge-dhaba-ballygunge-ballygunge-phari-kolkata-3010",
    "https://www.swiggy.com/restaurants/adil-biryani-centre-park-circus-central-kolkata-kolkata-94438",
    "https://www.swiggy.com/restaurants/shimla-biryani-e-m-bypass-ruby-area-kolkata-13880",
    "https://www.swiggy.com/restaurants/dominos-pizza-kasba-bb-chatterjee-kolkata-697216",
    "https://www.swiggy.com/restaurants/burger-king-kasba-east-kolkata-township-kolkata-216675",
    "https://www.swiggy.com/restaurants/hindusthan-sweets-rajdanga-main-road-ruby-area-kolkata-439022",
    "https://www.swiggy.com/restaurants/new-shimla-biryani-south-kolkata-kolkata-871812",
    "https://www.swiggy.com/restaurants/bengal-sweets-tiljala-panchanna-gram-kolkata-332300",
    "https://www.swiggy.com/restaurants/kaligodam-lake-road-south-kolkata-kolkata-454936",
    "https://www.swiggy.com/restaurants/new-om-sakti-santoshpur-kolkata-42729",
    "https://www.swiggy.com/restaurants/gupta-eating-house-prince-anwar-shah-road-jadavpur-kolkata-44257",
    "https://www.swiggy.com/restaurants/kookie-jar-ruby-area-kolkata-331827",
    "https://www.swiggy.com/restaurants/tandoor-park-dhakuria-kolkata-33456",
    "https://www.swiggy.com/restaurants/banana-leaf-komala-vilas-gariahat-road-jadavpur-kolkata-554205",
    "https://www.swiggy.com/restaurants/the-grub-club-southern-avenue-kolkata-3439",
    "https://www.swiggy.com/restaurants/saptapadi-hindustan-park-kolkata-13028",
    "https://www.swiggy.com/restaurants/haldiram-food-city-ballygunge-kolkata-25144",
    "https://www.swiggy.com/restaurants/arun-tea-stall-garia-kolkata-816194",
    "https://www.swiggy.com/restaurants/calcutta-cravings-rajdanga-main-road-ruby-area-kolkata-248997",
    "https://www.swiggy.com/restaurants/rosy-roti-ruby-hospital-area-kolkata-319410",
    "https://www.swiggy.com/restaurants/kamdhenus-sweets-gariahat-road-south-kolkata-kolkata-678784",
    "https://www.swiggy.com/restaurants/momo-i-am-golpark-kolkata-29424",
    "https://www.swiggy.com/restaurants/shanghai-flavours-of-china-town-gariahat-kalighat-kolkata-581183",
    "https://www.swiggy.com/restaurants/dariole-r-k-chatterjee-road-kasba-kolkata-339597",
    "https://www.swiggy.com/restaurants/tero-parbon-golpark-kolkata-3018",
    "https://www.swiggy.com/restaurants/doiwala-gariahat-hindustan-park-kolkata-434197",
    "https://www.swiggy.com/restaurants/jimmys-kitchen-jadavpur-jodhpur-park-kolkata-164450",
    "https://www.swiggy.com/restaurants/biriyani-adda-kasba-ruby-area-kolkata-662072",
    "https://www.swiggy.com/restaurants/the-yellow-straw-acropolis-acropolis-mall-kolkata-182029",
    "https://www.swiggy.com/restaurants/zeeshan-restaurant-rajdanga-gold-park-ruby-area-kolkata-617639",
    "https://www.swiggy.com/restaurants/machhli-baba-fries-block-eg-rajdanga-main-road-kolkata-69297",
    "https://www.swiggy.com/restaurants/idlygo-plus-sangeet-sarani-rd-golpark-kolkata-718147",
    "https://www.swiggy.com/restaurants/mitra-cafe-golpark-south-kolkata-kolkata-7713",
    "https://www.swiggy.com/restaurants/baskin-robbins-happyness-shakes-d-laskarhat-kasba-tagore-park-kolkata-870805",
    "https://www.swiggy.com/restaurants/just-baked-near-accropolis-mall-ruby-area-kolkata-24038",
    "https://www.swiggy.com/restaurants/gianis-ice-cream-shakes-and-sundaes-kasba-kolkata-429654",
  ];

  test("login as admin", async () => {
    await api.login(credentials);
  });

  menuLinks.forEach((menu) => {
    const restaurantNameForTest = menu.substring(35);
    const categoryIdToDelete: any = [];
    let subcategoryToDelete: any = {};
    let itemIdToUnlink: any = {};
    let recommendedItems: Number;
    let popularItems: Number;

    test(`Import menu from swiggy for restaurant ${restaurantNameForTest}`, async () => {
      const importMenu = await api.importSwiggy({
        toOutletId: outletID,
        menuUrl: menu,
      });
      expect(importMenu.data).toBe("Menu imported successfully");
    }, 1000000);

    test(`Verify menu for swiggy for restaurant ${restaurantNameForTest} and spoon restaurant`, async () => {
      let menuForSwiggy = {};
      let menuForSpoon = {};

      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(menu);
      await page.waitForSelector("#root > div > div > div > *");
      const textContent = await page.evaluate(() => {
        const element = document.querySelector("*");
        return element?.textContent?.trim();
      });
      const restaurantName = textContent?.split("|")[0];

      console.log(restaurantName);

      const restaurantPage = await browser.newPage();
      await restaurantPage.goto("https://www.swiggy.com/search");
      await restaurantPage.click('input[type="text"]');
      await restaurantPage.type('input[type="text"]', restaurantName);
      await restaurantPage.keyboard.press("Enter");
      const selector = await restaurantPage.waitForSelector(
        '[class="Search_widgetsV2__27BBR Search_widgets__3o_bA"] > div:nth-child(1)'
      );

      await restaurantPage.click(
        '[class="Search_widgetsV2__27BBR Search_widgets__3o_bA"] > div:nth-child(1) > div'
      );

      const urlPromise: string = await new Promise((resolve) => {
        restaurantPage.on("request", (request: HTTPRequest) => {
          if (request.url().includes("dapi/menu")) {
            resolve(request.url());
          }
        });
      });

      console.log(urlPromise);

      await restaurantPage.close();

      // page for fetching database url data
      const dataSetPage = await browser.newPage();
      dataSetPage.goto(urlPromise.trim());
      await dataSetPage.waitForNavigation();

      const foodMenu = await dataSetPage.evaluate(() => {
        const data = document.querySelector("body");
        return JSON.parse(data?.innerText ?? "");
      });

      const swiggyMenu = foodMenu.data.cards.filter((menu: JSON) => {
        for (const data in menu) {
          if (data === "groupedCard") {
            return menu;
          }
        }
      });

      const swiggyCards = swiggyMenu[0].groupedCard.cardGroupMap.REGULAR.cards;

      //iterating over the menu
      for (let menu of swiggyCards) {
        //checking the category name
        if (menu.card.card["@type"].includes(".ItemCategory")) {
          let itemCount = 0;
          //iterating over the items

          for (let itemIndex of menu.card.card.itemCards) {
            if (itemIndex.card["@type"].includes(".Dish")) {
              //counting the number of items in each category
              itemCount++;
            }
          }
          if (menu.card.card.title !== "Recommended") {
            //storing the category name and their item count
            menuForSwiggy = {
              ...menuForSwiggy,
              [menu.card.card.title]: itemCount,
            };
          } else {
            recommendedItems = itemCount;
          }
        }
        //checking if there are subcategories
        else if (menu.card.card["@type"].includes(".NestedItemCategory")) {
          let subCategories = {};
          //iterating over the subcategories
          for (let subCategory of menu.card.card.categories) {
            let itemCount = 0;
            for (let itemIndex of subCategory.itemCards) {
              //checkig the type of the item
              if (itemIndex.card["@type"].includes(".Dish")) {
                //counting the items
                itemCount++;
              }
            }
            //storing the subcategory with the item count
            subCategories = {
              ...subCategories,
              [subCategory.title]: itemCount,
            };
          }
          //storing the category with the subcategory
          menuForSwiggy = {
            ...menuForSwiggy,
            [menu.card.card.title]: subCategories,
          };
        }
      }

      console.log(menuForSwiggy);

      //fetching the menu of the outlet after importing all the restaurant's menu
      const menuFromOutlet = await api.menuFromOutlet(outletID);

      //iterating over the menu of the outlet
      for (let menuFromSpoon of menuFromOutlet.data) {
        let subCategorySpoon = {};

        categoryIdToDelete.push(menuFromSpoon._id);
        let subCategoryWithId: any = {};
        //check whether the subcategory is present in the category or not
        if (menuFromSpoon.subCategories.length > 0) {
          menuFromSpoon.subCategories.forEach((subCategories: any) => {
            //storing the items id to delete and unlink them later
            const itemsArray: any = [];
            subCategories.items.forEach((items: any) => {
              itemsArray.push(items._id);
            });

            //storing the subcategory id with the name
            subCategoryWithId = {
              ...subCategoryWithId,
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
            menuForSpoon = {
              ...menuForSpoon,
              [menuFromSpoon.categoryName]: subCategorySpoon,
            };
          });

          //storing the subcategory with the parent category
          subcategoryToDelete = {
            ...subcategoryToDelete,
            [menuFromSpoon._id]: subCategoryWithId,
          };
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
          if (menuFromSpoon.categoryName !== "Popular Items") {
            //storing the category name with their item count
            menuForSpoon = {
              ...menuForSpoon,
              [menuFromSpoon.categoryName]: menuFromSpoon.items.length,
            };
          } else {
            popularItems = menuFromSpoon.items.length;
          }
        }
      }

      console.log(menuForSpoon);
      expect(popularItems).toBe(recommendedItems);
      expect(menuForSpoon).toStrictEqual(menuForSwiggy);
    }, 1000000);

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
      for (let categories in subcategoryToDelete) {
        for (let subcategory in subcategoryToDelete[categories]) {
          const payload = {
            categoryId: subcategoryToDelete[categories][subcategory],
            categoryName: subcategory,
            parentCategoryId: "",
          };
          const deleteResponse = await api.deleteSubCategory(payload);
          expect(deleteResponse.message).toBe("Category updated successfully.");
          //after deleting the subcategory, adding it to the category id list to be deleted from the main category list
          categoryIdToDelete.push(subcategoryToDelete[categories][subcategory]);
        }
      }
    });

    test(" Delete the categories ", async () => {
      categoryIdToDelete.forEach(async (category: any) => {
        const deleteResponse = await api.deleteCategory(category);
        expect(deleteResponse.message).toBe("Category deleted successfully.");
      });
    }, 50000);
  });
});
