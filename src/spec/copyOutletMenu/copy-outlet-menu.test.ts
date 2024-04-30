import { api } from "../api";

describe("Add menu from Zomato", () => {
  const outletIDToCopyFrom = "659bb1b45ac2911d667adde4";
  const outletIDToCopyTo = "66225022369dfc610e98979b";
  const credentials = {
    email: "ashutosh@itobuz.com",
    password: "Admin@1234",
  };

  test("login as admin", async () => {
    await api.login(credentials);
  });

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

  menuList.forEach((menu) => {
    const restaurantName = menu.substring(27, menu.length - 6);
    const categoryIdToDeleteFromParentOutlet: any = [];
    let subcategoryToDeleteFromParentOutlet: any = {};
    let itemIdToUnlinkFromParentOutlet: any = {};
    let categoryItemCountForParentOutlet: any = {};
    const categoryIdToDeleteToChildOutlet: any = [];
    let subcategoryToDeleteToChildOutlet: any = {};
    let itemIdToUnlinkToChildOutlet: any = {};
    let categoryItemCountToChildOutlet: any = {};

    test(`Import menu of restaurant - ${restaurantName}`, async () => {
      //Logging in as an admin

      const importMenu = await api.importZomato({
        toOutletId: outletIDToCopyFrom,
        menuUrl: menu,
      });

      expect(importMenu.data).toBe("Menu imported successfully");
    }, 100000);

    test(`Copy menu from outlet of restaurant - ${restaurantName}`, async () => {
      const copyMenu = await api.copyFromOutlet({
        toOutletId: outletIDToCopyTo,
        fromOutletId: outletIDToCopyFrom,
      });
      expect(copyMenu.data).toBe("Menu copied successfully");
    }, 100000);

    test(`Verify the menu of the outlets from where the menu was copied to the outlet to which menu was copied of restaurant - ${restaurantName}`, async () => {
      const menuFromOutlet = await api.menuFromOutlet(outletIDToCopyFrom);
      const menuToOutlet = await api.menuFromOutlet(outletIDToCopyTo);

      //iterating over the menu of the outlet from which the menu was copied
      for (let menuFromSpoon of menuFromOutlet.data) {
        let subCategorySpoon = {};

        //excluding the popular items category
        if (menuFromSpoon.categoryName !== "Popular Items") {
          categoryIdToDeleteFromParentOutlet.push(menuFromSpoon._id);
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
              itemIdToUnlinkFromParentOutlet = {
                ...itemIdToUnlinkFromParentOutlet,
                [subCategories._id]: itemsArray,
              };

              //storing the subcategory and their items
              subCategorySpoon = {
                ...subCategorySpoon,
                [subCategories.categoryName]: subCategories.items.length,
              };
              categoryItemCountForParentOutlet = {
                ...categoryItemCountForParentOutlet,
                [menuFromSpoon.categoryName]: subCategorySpoon,
              };
            });

            //storing the subcategory with the parent category
            subcategoryToDeleteFromParentOutlet = {
              ...subcategoryToDeleteFromParentOutlet,
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
            itemIdToUnlinkFromParentOutlet = {
              ...itemIdToUnlinkFromParentOutlet,
              [menuFromSpoon._id]: itemsArray,
            };

            //storing the category name with their item count
            categoryItemCountForParentOutlet = {
              ...categoryItemCountForParentOutlet,
              [menuFromSpoon.categoryName]: menuFromSpoon.items.length,
            };
          }
        }
      }

      //iterating over the menu of the outlet to which menu was copied
      for (let menuFromSpoon of menuToOutlet.data) {
        let subCategorySpoon = {};

        //excluding the popular items category
        if (menuFromSpoon.categoryName !== "Popular Items") {
          categoryIdToDeleteToChildOutlet.push(menuFromSpoon._id);
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
              itemIdToUnlinkToChildOutlet = {
                ...itemIdToUnlinkToChildOutlet,
                [subCategories._id]: itemsArray,
              };

              //storing the subcategory and their items
              subCategorySpoon = {
                ...subCategorySpoon,
                [subCategories.categoryName]: subCategories.items.length,
              };
              categoryItemCountToChildOutlet = {
                ...categoryItemCountToChildOutlet,
                [menuFromSpoon.categoryName]: subCategorySpoon,
              };
            });

            //storing the subcategory with the parent category
            subcategoryToDeleteToChildOutlet = {
              ...subcategoryToDeleteToChildOutlet,
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
            itemIdToUnlinkToChildOutlet = {
              ...itemIdToUnlinkToChildOutlet,
              [menuFromSpoon._id]: itemsArray,
            };

            //storing the category name with their item count
            categoryItemCountToChildOutlet = {
              ...categoryItemCountToChildOutlet,
              [menuFromSpoon.categoryName]: menuFromSpoon.items.length,
            };
          }
        }
      }

      expect(categoryItemCountForParentOutlet).toStrictEqual(
        categoryItemCountToChildOutlet
      );
    });

    test(`Unlink the items in the parent outlet of restaurant - ${restaurantName}`, async () => {
      for (let categoryName in itemIdToUnlinkFromParentOutlet) {
        //iterating over the items of each category
        for (let individualItems of itemIdToUnlinkFromParentOutlet[
          categoryName
        ]) {
          const unlinkResponse = await api.unlink({
            categoryId: categoryName,
            itemId: individualItems,
            outletId: outletIDToCopyFrom,
          });
          expect(unlinkResponse.message).toBe("Item un-linked successfully.");
        }
      }
    }, 50000);

    test(`Unlink the items in the child outlet of restaurant - ${restaurantName}`, async () => {
      for (let categoryName in itemIdToUnlinkToChildOutlet) {
        //iterating over the items of each category
        for (let individualItems of itemIdToUnlinkToChildOutlet[categoryName]) {
          const unlinkResponse = await api.unlink({
            categoryId: categoryName,
            itemId: individualItems,
            outletId: outletIDToCopyTo,
          });
          expect(unlinkResponse.message).toBe("Item un-linked successfully.");
        }
      }
    }, 50000);

    test(` Delete the sub categories in parent outlet of restaurant - ${restaurantName}`, async () => {
      for (let categories in subcategoryToDeleteFromParentOutlet) {
        for (let subcategory in subcategoryToDeleteFromParentOutlet[
          categories
        ]) {
          const payload = {
            categoryId:
              subcategoryToDeleteFromParentOutlet[categories][subcategory],
            categoryName: subcategory,
            parentCategoryId: "",
          };
          const deleteResponse = await api.deleteSubCategory(payload);
          expect(deleteResponse.message).toBe("Category updated successfully.");
          //after deleting the subcategory, adding it to the category id list to be deleted from the main category list
          categoryIdToDeleteFromParentOutlet.push(
            subcategoryToDeleteFromParentOutlet[categories][subcategory]
          );
        }
      }
    });

    test(` Delete the sub categories in child outlet of restaurant - ${restaurantName}`, async () => {
      for (let categories in subcategoryToDeleteToChildOutlet) {
        for (let subcategory in subcategoryToDeleteToChildOutlet[categories]) {
          const payload = {
            categoryId:
              subcategoryToDeleteToChildOutlet[categories][subcategory],
            categoryName: subcategory,
            parentCategoryId: "",
          };
          const deleteResponse = await api.deleteSubCategory(payload);
          expect(deleteResponse.message).toBe("Category updated successfully.");
          //after deleting the subcategory, adding it to the category id list to be deleted from the main category list
          categoryIdToDeleteToChildOutlet.push(
            subcategoryToDeleteToChildOutlet[categories][subcategory]
          );
        }
      }
    });

    test(` Delete the categories in parent outlet of restaurant - ${restaurantName}`, async () => {
      categoryIdToDeleteFromParentOutlet.forEach(async (category: any) => {
        const deleteResponse = await api.deleteCategory(category);
        expect(deleteResponse.message).toBe("Category deleted successfully.");
      });
    }, 50000);

    test(` Delete the categories in child outlet of restaurant - ${restaurantName}`, async () => {
      categoryIdToDeleteToChildOutlet.forEach(async (category: any) => {
        const deleteResponse = await api.deleteCategory(category);
        expect(deleteResponse.message).toBe("Category deleted successfully.");
      });
    }, 50000);
  });
});
