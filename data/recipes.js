const recipes = [{
  "vegetarian": false,
  "vegan": false,
  "glutenFree": false,
  "dairyFree": false,
  "veryHealthy": false,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "lowFodmap": false,
  "weightWatcherSmartPoints": 16,
  "gaps": "no",
  "preparationMinutes": -1,
  "cookingMinutes": -1,
  "aggregateLikes": 209,
  "healthScore": 18,
  "creditsText": "Full Belly Sisters",
  "license": "CC BY-SA 3.0",
  "sourceName": "Full Belly Sisters",
  "pricePerServing": 157.06,
  "extendedIngredients": [
    {
      "id": 1001,
      "aisle": "Milk, Eggs, Other Dairy",
      "image": "butter-sliced.jpg",
      "consistency": "SOLID",
      "name": "butter",
      "nameClean": "butter",
      "original": "1 tbsp butter",
      "originalName": "butter",
      "amount": 1.0,
      "unit": "tbsp",
      "meta": [],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "Tbsp",
          "unitLong": "Tbsp"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "Tbsp",
          "unitLong": "Tbsp"
        }
      }
    },
    {
      "id": 10011135,
      "aisle": "Produce",
      "image": "cauliflower.jpg",
      "consistency": "SOLID",
      "name": "cauliflower florets",
      "nameClean": "cauliflower florets",
      "original": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
      "originalName": "about frozen cauliflower florets, thawed, cut into bite-sized pieces",
      "amount": 2.0,
      "unit": "cups",
      "meta": [
        "frozen",
        "thawed",
        "cut into bite-sized pieces"
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 200.0,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 1038,
      "aisle": "Cheese",
      "image": "parmesan.jpg",
      "consistency": "SOLID",
      "name": "cheese",
      "nameClean": "pecorino romano",
      "original": "2 tbsp grated cheese (I used romano)",
      "originalName": "grated cheese (I used romano)",
      "amount": 2.0,
      "unit": "tbsp",
      "meta": [
        "grated",
        "(I used romano)"
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        }
      }
    },
    {
      "id": 1034053,
      "aisle": "Oil, Vinegar, Salad Dressing",
      "image": "olive-oil.jpg",
      "consistency": "LIQUID",
      "name": "extra virgin olive oil",
      "nameClean": "extra virgin olive oil",
      "original": "1-2 tbsp extra virgin olive oil",
      "originalName": "extra virgin olive oil",
      "amount": 1.0,
      "unit": "tbsp",
      "meta": [],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "Tbsp",
          "unitLong": "Tbsp"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "Tbsp",
          "unitLong": "Tbsp"
        }
      }
    },
    {
      "id": 11215,
      "aisle": "Produce",
      "image": "garlic.png",
      "consistency": "SOLID",
      "name": "garlic",
      "nameClean": "garlic",
      "original": "5-6 cloves garlic",
      "originalName": "garlic",
      "amount": 5.0,
      "unit": "cloves",
      "meta": [],
      "measures": {
        "us": {
          "amount": 5.0,
          "unitShort": "cloves",
          "unitLong": "cloves"
        },
        "metric": {
          "amount": 5.0,
          "unitShort": "cloves",
          "unitLong": "cloves"
        }
      }
    },
    {
      "id": 10720420,
      "aisle": "Pasta and Rice",
      "image": "spaghetti.jpg",
      "consistency": "SOLID",
      "name": "pasta",
      "nameClean": "linguine",
      "original": "6-8 ounces pasta (I used linguine)",
      "originalName": "pasta (I used linguine)",
      "amount": 6.0,
      "unit": "ounces",
      "meta": [
        "(I used linguine)"
      ],
      "measures": {
        "us": {
          "amount": 6.0,
          "unitShort": "oz",
          "unitLong": "ounces"
        },
        "metric": {
          "amount": 170.097,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 1032009,
      "aisle": "Spices and Seasonings",
      "image": "red-pepper-flakes.jpg",
      "consistency": "SOLID",
      "name": "couple of pepper flakes",
      "nameClean": "red pepper flakes",
      "original": "couple of pinches red pepper flakes, optional",
      "originalName": "couple of red pepper flakes, optional",
      "amount": 2.0,
      "unit": "pinches",
      "meta": [
        "red"
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "pinches",
          "unitLong": "pinches"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "pinches",
          "unitLong": "pinches"
        }
      }
    },
    {
      "id": 1102047,
      "aisle": "Spices and Seasonings",
      "image": "salt-and-pepper.jpg",
      "consistency": "SOLID",
      "name": "salt and pepper",
      "nameClean": "salt and pepper",
      "original": "salt and pepper, to taste",
      "originalName": "salt and pepper, to taste",
      "amount": 2.0,
      "unit": "servings",
      "meta": [
        "to taste"
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "servings",
          "unitLong": "servings"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "servings",
          "unitLong": "servings"
        }
      }
    },
    {
      "id": 11291,
      "aisle": "Produce",
      "image": "spring-onions.jpg",
      "consistency": "SOLID",
      "name": "scallions",
      "nameClean": "spring onions",
      "original": "3 scallions, chopped, white and green parts separated",
      "originalName": "scallions, chopped, white and green parts separated",
      "amount": 3.0,
      "unit": "",
      "meta": [
        "white",
        "green",
        "separated",
        "chopped"
      ],
      "measures": {
        "us": {
          "amount": 3.0,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 3.0,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 14106,
      "aisle": "Alcoholic Beverages",
      "image": "white-wine.jpg",
      "consistency": "LIQUID",
      "name": "white wine",
      "nameClean": "dry white wine",
      "original": "2-3 tbsp white wine",
      "originalName": "white wine",
      "amount": 2.0,
      "unit": "tbsp",
      "meta": [],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        }
      }
    },
    {
      "id": 99025,
      "aisle": "Pasta and Rice",
      "image": "breadcrumbs.jpg",
      "consistency": "SOLID",
      "name": "bread crumbs",
      "nameClean": "whole wheat breadcrumbs",
      "original": "1/4 cup whole wheat bread crumbs (I used panko)",
      "originalName": "whole wheat bread crumbs (I used panko)",
      "amount": 0.25,
      "unit": "cup",
      "meta": [
        "whole wheat",
        "(I used panko)"
      ],
      "measures": {
        "us": {
          "amount": 0.25,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 27.0,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    }
  ],
  "id": 716429,
  "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
  "readyInMinutes": 45,
  "servings": 2,
  "sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
  "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
  "imageType": "jpg",
  "summary": "You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>.",
  "cuisines": [],
  "dishTypes": [
    "side dish",
    "lunch",
    "main course",
    "main dish",
    "dinner"
  ],
  "diets": [],
  "occasions": [],
  "winePairing": {
    "pairedWines": [],
    "pairingText": "No one wine will suit every pasta dish. Pasta in a tomato-based sauce will usually work well with a medium-bodied red, such as a montepulciano or chianti. Pasta with seafood or pesto will fare better with a light-bodied white, such as a pinot grigio. Cheese-heavy pasta can pair well with red or white - you might try a sangiovese wine for hard cheeses and a chardonnay for soft cheeses. We may be able to make a better recommendation if you ask again with a specific pasta dish.",
    "productMatches": []
  },
  "instructions": "",
  "analyzedInstructions": [],
  "originalId": null,
  "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429"
},
{
  "vegetarian": false,
  "vegan": false,
  "glutenFree": true,
  "dairyFree": false,
  "veryHealthy": false,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "lowFodmap": false,
  "weightWatcherSmartPoints": 8,
  "gaps": "no",
  "preparationMinutes": -1,
  "cookingMinutes": -1,
  "aggregateLikes": 10,
  "healthScore": 37,
  "creditsText": "foodista.com",
  "sourceName": "foodista.com",
  "pricePerServing": 305.13,
  "extendedIngredients": [
    {
      "id": 15076,
      "aisle": "Seafood",
      "image": "salmon.png",
      "consistency": "SOLID",
      "name": "salmon",
      "nameClean": "salmon",
      "original": "4 salmon, fillets, (about 1 lb total)",
      "originalName": "salmon, fillets, (about 1 lb total)",
      "amount": 4.0,
      "unit": "",
      "meta": [
        "( 1 lb total)"
      ],
      "measures": {
        "us": {
          "amount": 4.0,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 4.0,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 4053,
      "aisle": "Oil, Vinegar, Salad Dressing",
      "image": "olive-oil.jpg",
      "consistency": "LIQUID",
      "name": "olive oil",
      "nameClean": "olive oil",
      "original": "2 tablespoons olive oil",
      "originalName": "olive oil",
      "amount": 2.0,
      "unit": "tablespoons",
      "meta": [],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        }
      }
    },
    {
      "id": 9150,
      "aisle": "Produce",
      "image": "lemon.png",
      "consistency": "SOLID",
      "name": "lemon",
      "nameClean": "lemon",
      "original": "1 teaspoon grated lemon, rind",
      "originalName": "grated lemon, rind",
      "amount": 1.0,
      "unit": "teaspoon",
      "meta": [
        "grated"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "tsp",
          "unitLong": "teaspoon"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "tsp",
          "unitLong": "teaspoon"
        }
      }
    },
    {
      "id": 9152,
      "aisle": "Produce",
      "image": "lemon-juice.jpg",
      "consistency": "LIQUID",
      "name": "juice of lemon",
      "nameClean": "lemon juice",
      "original": "2 tablespoons lemon, juice",
      "originalName": "lemon, juice",
      "amount": 2.0,
      "unit": "",
      "meta": [],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 11156,
      "aisle": "Produce",
      "image": "fresh-chives.jpg",
      "consistency": "SOLID",
      "name": "chives",
      "nameClean": "chives",
      "original": "1 tablespoon chopped fresh chives or 1 tbsp chopped green onion",
      "originalName": "chopped fresh chives or 1 tbsp chopped green onion",
      "amount": 1.0,
      "unit": "tablespoon",
      "meta": [
        "fresh",
        "chopped"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "Tbsp",
          "unitLong": "Tbsp"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "Tbsp",
          "unitLong": "Tbsp"
        }
      }
    },
    {
      "id": 1032046,
      "aisle": "Condiments",
      "image": "dijon-mustard.jpg",
      "consistency": "LIQUID",
      "name": "dijon mustard",
      "nameClean": "dijon mustard",
      "original": "2 teaspoons Dijon mustard",
      "originalName": "Dijon mustard",
      "amount": 2.0,
      "unit": "teaspoons",
      "meta": [],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        }
      }
    },
    {
      "id": 2047,
      "aisle": "Spices and Seasonings",
      "image": "salt.jpg",
      "consistency": "SOLID",
      "name": "salt",
      "nameClean": "table salt",
      "original": "1 pinch salt",
      "originalName": "salt",
      "amount": 1.0,
      "unit": "pinch",
      "meta": [],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "pinch",
          "unitLong": "pinch"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "pinch",
          "unitLong": "pinch"
        }
      }
    },
    {
      "id": 1002030,
      "aisle": "Spices and Seasonings",
      "image": "pepper.jpg",
      "consistency": "SOLID",
      "name": "pepper",
      "nameClean": "black pepper",
      "original": "1 pinch pepper",
      "originalName": "pepper",
      "amount": 1.0,
      "unit": "pinch",
      "meta": [],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "pinch",
          "unitLong": "pinch"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "pinch",
          "unitLong": "pinch"
        }
      }
    },
    {
      "id": 1056,
      "aisle": "Milk, Eggs, Other Dairy",
      "image": "sour-cream.jpg",
      "consistency": "SOLID",
      "name": "cream",
      "nameClean": "sour cream",
      "original": "1 cup sour cream",
      "originalName": "sour cream",
      "amount": 1.0,
      "unit": "cup",
      "meta": [
        "sour"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "cup",
          "unitLong": "cup"
        },
        "metric": {
          "amount": 230.0,
          "unitShort": "ml",
          "unitLong": "milliliters"
        }
      }
    },
    {
      "id": 11206,
      "aisle": "Produce",
      "image": "cucumber.jpg",
      "consistency": "SOLID",
      "name": "cucumber",
      "nameClean": "cucumber",
      "original": "2 tablespoons finely chopped cucumber",
      "originalName": "finely chopped cucumber",
      "amount": 2.0,
      "unit": "tablespoons",
      "meta": [
        "finely chopped"
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        }
      }
    },
    {
      "id": 2017,
      "aisle": "Spices and Seasonings",
      "image": "dill.jpg",
      "consistency": "SOLID",
      "name": "dill or",
      "nameClean": "dried dill",
      "original": "1 tablespoon chopped fresh dill or ½ tsp dried dill, weed",
      "originalName": "chopped fresh dill or ½ tsp dried dill, weed",
      "amount": 1.0,
      "unit": "tablespoon",
      "meta": [
        "dried",
        "fresh",
        "chopped"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "Tbsp",
          "unitLong": "Tbsp"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "Tbsp",
          "unitLong": "Tbsp"
        }
      }
    },
    {
      "id": 11156,
      "aisle": "Produce",
      "image": "fresh-chives.jpg",
      "consistency": "SOLID",
      "name": "chives",
      "nameClean": "chives",
      "original": "2 teaspoons minced fresh chives or 2 tsp minced green onion",
      "originalName": "minced fresh chives or 2 tsp minced green onion",
      "amount": 2.0,
      "unit": "teaspoons",
      "meta": [
        "fresh",
        "minced"
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        }
      }
    }
  ],
  "id": 637335,
  "title": "Cedar-Planked Salmon With Mustard Dill Sauce",
  "readyInMinutes": 45,
  "servings": 6,
  "sourceUrl": "https://www.foodista.com/recipe/CQSVSJHC/cedar-planked-salmon-with-mustard-dill-sauce",
  "image": "https://spoonacular.com/recipeImages/637335-556x370.jpg",
  "imageType": "jpg",
  "summary": "Cedar-Planked Salmon With Mustard Dill Sauce is a main course that serves 6. For <b>$3.05 per serving</b>, this recipe <b>covers 18%</b> of your daily requirements of vitamins and minerals. One serving contains <b>284 calories</b>, <b>24g of protein</b>, and <b>19g of fat</b>. If you have salmon, cream, chives, and a few other ingredients on hand, you can make it. 10 people have tried and liked this recipe. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, primal, pescatarian, and ketogenic</b> diet. It is brought to you by Foodista. With a spoonacular <b>score of 82%</b>, this dish is awesome. Similar recipes include <a href=\"https://spoonacular.com/recipes/cedar-planked-salmon-with-maple-mustard-glaze-4649\">Cedar Planked Salmon With Maple Mustard Glaze</a>, <a href=\"https://spoonacular.com/recipes/cedar-planked-salmon-with-sweet-mustard-vinaigrette-86809\">Cedar Planked Salmon With Sweet Mustard Vinaigrette</a>, and <a href=\"https://spoonacular.com/recipes/cedar-planked-salmon-with-fresh-sorrel-sauce-610524\">Cedar-Planked Salmon with Fresh Sorrel Sauce</a>.",
  "cuisines": [],
  "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
  ],
  "diets": [
    "gluten free",
    "primal",
    "pescatarian",
    "ketogenic"
  ],
  "occasions": [],
  "instructions": "Soak two 12- x 7-inch (30 x 18 cm) untreated cedar planks in water for at least 30 minutes or for up to 24 hours.\nPlace salmon fillets on top of each plank.\nIn small bowl, whisk together oil, lemon rind and juice, chives, mustard, salt and pepper; brush some over salmon.\nPlace planks on grill over medium-high heat; close lid and cook, brushing with remaining lemon mixture for about 20 minutes or until fish flakes easily when tested with fork.\nDill Sauce:Meanwhile, in small bowl, combine sour cream, cucumber, dill, chives, salt and pepper.\nServe planks on platter with dill sauce.",
  "analyzedInstructions": [
    {
      "name": "",
      "steps": [
        {
          "number": 1,
          "step": "Soak two 12- x 7-inch (30 x 18 cm) untreated cedar planks in water for at least 30 minutes or for up to 24 hours.",
          "ingredients": [
            {
              "id": 14412,
              "name": "water",
              "localizedName": "water",
              "image": "water.png"
            }
          ],
          "equipment": [],
          "length": {
            "number": 1470,
            "unit": "minutes"
          }
        },
        {
          "number": 2,
          "step": "Place salmon fillets on top of each plank.",
          "ingredients": [
            {
              "id": 10115076,
              "name": "salmon fillets",
              "localizedName": "salmon fillets",
              "image": "salmon.png"
            }
          ],
          "equipment": []
        },
        {
          "number": 3,
          "step": "In small bowl, whisk together oil, lemon rind and juice, chives, mustard, salt and pepper; brush some over salmon.",
          "ingredients": [
            {
              "id": 1102047,
              "name": "salt and pepper",
              "localizedName": "salt and pepper",
              "image": "salt-and-pepper.jpg"
            },
            {
              "id": 9156,
              "name": "lemon peel",
              "localizedName": "lemon peel",
              "image": "zest-lemon.jpg"
            },
            {
              "id": 2046,
              "name": "mustard",
              "localizedName": "mustard",
              "image": "regular-mustard.jpg"
            },
            {
              "id": 11156,
              "name": "chives",
              "localizedName": "chives",
              "image": "fresh-chives.jpg"
            },
            {
              "id": 15076,
              "name": "salmon",
              "localizedName": "salmon",
              "image": "salmon.png"
            },
            {
              "id": 1019016,
              "name": "juice",
              "localizedName": "juice",
              "image": "apple-juice.jpg"
            },
            {
              "id": 4582,
              "name": "cooking oil",
              "localizedName": "cooking oil",
              "image": "vegetable-oil.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404661,
              "name": "whisk",
              "localizedName": "whisk",
              "image": "whisk.png"
            },
            {
              "id": 404783,
              "name": "bowl",
              "localizedName": "bowl",
              "image": "bowl.jpg"
            }
          ]
        },
        {
          "number": 4,
          "step": "Place planks on grill over medium-high heat; close lid and cook, brushing with remaining lemon mixture for about 20 minutes or until fish flakes easily when tested with fork.",
          "ingredients": [
            {
              "id": 9150,
              "name": "lemon",
              "localizedName": "lemon",
              "image": "lemon.png"
            },
            {
              "id": 10115261,
              "name": "fish",
              "localizedName": "fish",
              "image": "fish-fillet.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404706,
              "name": "grill",
              "localizedName": "grill",
              "image": "grill.jpg"
            }
          ],
          "length": {
            "number": 20,
            "unit": "minutes"
          }
        },
        {
          "number": 5,
          "step": "Dill Sauce:Meanwhile, in small bowl, combine sour cream, cucumber, dill, chives, salt and pepper.",
          "ingredients": [
            {
              "id": 1102047,
              "name": "salt and pepper",
              "localizedName": "salt and pepper",
              "image": "salt-and-pepper.jpg"
            },
            {
              "id": 1056,
              "name": "sour cream",
              "localizedName": "sour cream",
              "image": "sour-cream.jpg"
            },
            {
              "id": 11206,
              "name": "cucumber",
              "localizedName": "cucumber",
              "image": "cucumber.jpg"
            },
            {
              "id": 11156,
              "name": "chives",
              "localizedName": "chives",
              "image": "fresh-chives.jpg"
            },
            {
              "id": 0,
              "name": "sauce",
              "localizedName": "sauce",
              "image": ""
            },
            {
              "id": 2045,
              "name": "dill",
              "localizedName": "dill",
              "image": "dill.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404783,
              "name": "bowl",
              "localizedName": "bowl",
              "image": "bowl.jpg"
            }
          ]
        },
        {
          "number": 6,
          "step": "Serve planks on platter with dill sauce.",
          "ingredients": [
            {
              "id": 0,
              "name": "sauce",
              "localizedName": "sauce",
              "image": ""
            },
            {
              "id": 2045,
              "name": "dill",
              "localizedName": "dill",
              "image": "dill.jpg"
            }
          ],
          "equipment": []
        }
      ]
    }
  ],
  "originalId": null,
  "spoonacularSourceUrl": "https://spoonacular.com/cedar-planked-salmon-with-mustard-dill-sauce-637335"
},
{
  "vegetarian": true,
  "vegan": false,
  "glutenFree": true,
  "dairyFree": true,
  "veryHealthy": true,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "lowFodmap": false,
  "weightWatcherSmartPoints": 8,
  "gaps": "no",
  "preparationMinutes": -1,
  "cookingMinutes": -1,
  "aggregateLikes": 5,
  "healthScore": 100,
  "creditsText": "foodista.com",
  "sourceName": "foodista.com",
  "pricePerServing": 262.42,
  "extendedIngredients": [
    {
      "id": 6194,
      "aisle": "Canned and Jarred",
      "image": "chicken-broth.png",
      "consistency": "LIQUID",
      "name": "chicken broth",
      "nameClean": "chicken broth",
      "original": "6 cups Chicken Broth or Water",
      "originalName": "Chicken Broth or Water",
      "amount": 6.0,
      "unit": "cups",
      "meta": [],
      "measures": {
        "us": {
          "amount": 6.0,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 1.41,
          "unitShort": "l",
          "unitLong": "liters"
        }
      }
    },
    {
      "id": 98839,
      "aisle": "Ethnic Foods",
      "image": "chile-chipotle.jpg",
      "consistency": "SOLID",
      "name": "chipotle chiles",
      "nameClean": "chipotle chiles",
      "original": "3 tablespoons Chipotle chiles",
      "originalName": "Chipotle chiles",
      "amount": 3.0,
      "unit": "tablespoons",
      "meta": [],
      "measures": {
        "us": {
          "amount": 3.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        },
        "metric": {
          "amount": 3.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        }
      }
    },
    {
      "id": 16014,
      "aisle": "Pasta and Rice",
      "image": "black-beans.jpg",
      "consistency": "SOLID",
      "name": "black beans",
      "nameClean": "dried black beans",
      "original": "1 pound Dried Black Beans",
      "originalName": "Dried Black Beans",
      "amount": 1.0,
      "unit": "pound",
      "meta": [
        "dried"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "lb",
          "unitLong": "pound"
        },
        "metric": {
          "amount": 453.592,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 1012014,
      "aisle": "Spices and Seasonings",
      "image": "ground-cumin.jpg",
      "consistency": "SOLID",
      "name": "ground cumin",
      "nameClean": "ground cumin",
      "original": "2 tablespoons Ground Cumin",
      "originalName": "Ground Cumin",
      "amount": 2.0,
      "unit": "tablespoons",
      "meta": [],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        }
      }
    },
    {
      "id": 11233,
      "aisle": "Produce",
      "image": "kale.jpg",
      "consistency": "SOLID",
      "name": "kale",
      "nameClean": "kale",
      "original": "1 bunch kale",
      "originalName": "kale",
      "amount": 1.0,
      "unit": "bunch",
      "meta": [],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "bunch",
          "unitLong": "bunch"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "bunch",
          "unitLong": "bunch"
        }
      }
    },
    {
      "id": 4053,
      "aisle": "Oil, Vinegar, Salad Dressing",
      "image": "olive-oil.jpg",
      "consistency": "LIQUID",
      "name": "olive oil",
      "nameClean": "olive oil",
      "original": "2 tablespoons olive oil",
      "originalName": "olive oil",
      "amount": 2.0,
      "unit": "tablespoons",
      "meta": [],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        }
      }
    },
    {
      "id": 11282,
      "aisle": "Produce",
      "image": "brown-onion.png",
      "consistency": "SOLID",
      "name": "onion",
      "nameClean": "onion",
      "original": "1 Onion – Chopped",
      "originalName": "Onion – Chopped",
      "amount": 1.0,
      "unit": "",
      "meta": [
        "chopped"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 1102047,
      "aisle": "Spices and Seasonings",
      "image": "salt-and-pepper.jpg",
      "consistency": "SOLID",
      "name": "salt & pepper",
      "nameClean": "salt and pepper",
      "original": "Salt & Pepper",
      "originalName": "Salt & Pepper",
      "amount": 6.0,
      "unit": "servings",
      "meta": [],
      "measures": {
        "us": {
          "amount": 6.0,
          "unitShort": "servings",
          "unitLong": "servings"
        },
        "metric": {
          "amount": 6.0,
          "unitShort": "servings",
          "unitLong": "servings"
        }
      }
    },
    {
      "id": 11507,
      "aisle": "Produce",
      "image": "sweet-potato.png",
      "consistency": "SOLID",
      "name": "sweet potatoes",
      "nameClean": "sweet potato",
      "original": "3 lbs sweet potatoes",
      "originalName": "sweet potatoes",
      "amount": 3.0,
      "unit": "lbs",
      "meta": [],
      "measures": {
        "us": {
          "amount": 3.0,
          "unitShort": "lb",
          "unitLong": "pounds"
        },
        "metric": {
          "amount": 1.361,
          "unitShort": "kgs",
          "unitLong": "kgs"
        }
      }
    }
  ],
  "id": 660405,
  "title": "Smoky Black Bean Soup With Sweet Potato & Kale",
  "readyInMinutes": 630,
  "servings": 6,
  "sourceUrl": "http://www.foodista.com/recipe/B8SQD87X/smoky-black-bean-soup-with-sweet-potato-kale",
  "image": "https://spoonacular.com/recipeImages/660405-556x370.jpg",
  "imageType": "jpg",
  "summary": "You can never have too many main course recipes, so give Smoky Black Bean Soup With Sweet Potato & Kale a try. One serving contains <b>555 calories</b>, <b>23g of protein</b>, and <b>7g of fat</b>. This recipe serves 6. For <b>$2.62 per serving</b>, this recipe <b>covers 41%</b> of your daily requirements of vitamins and minerals. 5 people have tried and liked this recipe. This recipe from Foodista requires chicken broth, onion, black beans, and salt & pepper. From preparation to the plate, this recipe takes around <b>10 hours and 30 minutes</b>. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. It is a good option if you're following a <b>gluten free, dairy free, and lacto ovo vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is amazing. Similar recipes include <a href=\"https://spoonacular.com/recipes/smoky-sweet-potato-and-black-bean-tacos-524599\">Smoky Sweet Potato and Black Bean Tacos</a>, <a href=\"https://spoonacular.com/recipes/smoky-sweet-potato-and-black-bean-tacos-1316245\">Smoky Sweet Potato and Black Bean Tacos</a>, and <a href=\"https://spoonacular.com/recipes/sweet-and-smoky-sriracha-black-bean-soup-557795\">Sweet and Smoky Sriracha Black Bean Soup</a>.",
  "cuisines": [],
  "dishTypes": [
    "lunch",
    "soup",
    "main course",
    "main dish",
    "dinner"
  ],
  "diets": [
    "gluten free",
    "dairy free",
    "lacto ovo vegetarian"
  ],
  "occasions": [
    "fall",
    "winter"
  ],
  "instructions": "<ol><li>Spread the dry beans out on a baking sheet and pick out any pebbles. </li><li>Place the beans in a big soup pot, cover with water by 3 inches and allow them to soak overnight or for 6-8 hours, then discard that water. </li><li>Return the soaked beans to the pot and cover with 3 inches of water again, bring to a boil. Reduce heat to medium low, put the cover on and allow to cook until the beans start to get tender but still firm, about 1 1/2 hours. Drain the beans.</li><li>Heat the oil in a soup pot over med-high heat. </li><li>Add the onion along with a pinch of salt and saute until softened and golden. </li><li>Stir in 1 tbsp of ground cumin, add the beans along with the broth or water and bring to a boil. Reduce heat to medium-low, cover and cook for 30 min. </li><li>Meanwhile peel and chop the sweet potatoes. </li><li>Wash the kale, remove the stems and chop the leaves.</li><li>Remove half of the beans and liquid and set aside to cool a bit. </li><li>Add the sweet potatoes and kale to the pot with some salt and pepper. Cover and cook for 10 minutes. </li><li>Transfer the cooled beans to a blender and puree until smooth, then return them to the pot. </li><li>Stir in the remaining 1 tbsp of ground cumin. </li><li>Now add 1 tbsp of the chipotles in adobo. Taste and continue to add more until it has a spice level that you like. </li><li>Adjust the salt &amp; pepper as needed.</li><li>Serve with a dollop of sour cream.</li></ol>",
  "analyzedInstructions": [
    {
      "name": "",
      "steps": [
        {
          "number": 1,
          "step": "Spread the dry beans out on a baking sheet and pick out any pebbles.",
          "ingredients": [
            {
              "id": 0,
              "name": "spread",
              "localizedName": "spread",
              "image": ""
            },
            {
              "id": 0,
              "name": "beans",
              "localizedName": "beans",
              "image": "kidney-beans.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404727,
              "name": "baking sheet",
              "localizedName": "baking sheet",
              "image": "baking-sheet.jpg"
            }
          ]
        },
        {
          "number": 2,
          "step": "Place the beans in a big soup pot, cover with water by 3 inches and allow them to soak overnight or for 6-8 hours, then discard that water. Return the soaked beans to the pot and cover with 3 inches of water again, bring to a boil. Reduce heat to medium low, put the cover on and allow to cook until the beans start to get tender but still firm, about 1 1/2 hours.",
          "ingredients": [
            {
              "id": 0,
              "name": "beans",
              "localizedName": "beans",
              "image": "kidney-beans.jpg"
            },
            {
              "id": 14412,
              "name": "water",
              "localizedName": "water",
              "image": "water.png"
            },
            {
              "id": 0,
              "name": "soup",
              "localizedName": "soup",
              "image": ""
            }
          ],
          "equipment": [
            {
              "id": 404752,
              "name": "pot",
              "localizedName": "pot",
              "image": "stock-pot.jpg"
            }
          ],
          "length": {
            "number": 600,
            "unit": "minutes"
          }
        },
        {
          "number": 3,
          "step": "Drain the beans.",
          "ingredients": [
            {
              "id": 0,
              "name": "beans",
              "localizedName": "beans",
              "image": "kidney-beans.jpg"
            }
          ],
          "equipment": []
        },
        {
          "number": 4,
          "step": "Heat the oil in a soup pot over med-high heat.",
          "ingredients": [
            {
              "id": 0,
              "name": "soup",
              "localizedName": "soup",
              "image": ""
            },
            {
              "id": 4582,
              "name": "cooking oil",
              "localizedName": "cooking oil",
              "image": "vegetable-oil.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404752,
              "name": "pot",
              "localizedName": "pot",
              "image": "stock-pot.jpg"
            }
          ]
        },
        {
          "number": 5,
          "step": "Add the onion along with a pinch of salt and saute until softened and golden. Stir in 1 tbsp of ground cumin, add the beans along with the broth or water and bring to a boil. Reduce heat to medium-low, cover and cook for 30 min. Meanwhile peel and chop the sweet potatoes. Wash the kale, remove the stems and chop the leaves.",
          "ingredients": [
            {
              "id": 11507,
              "name": "sweet potato",
              "localizedName": "sweet potato",
              "image": "sweet-potato.png"
            },
            {
              "id": 1012014,
              "name": "ground cumin",
              "localizedName": "ground cumin",
              "image": "ground-cumin.jpg"
            },
            {
              "id": 0,
              "name": "beans",
              "localizedName": "beans",
              "image": "kidney-beans.jpg"
            },
            {
              "id": 1006615,
              "name": "broth",
              "localizedName": "broth",
              "image": "chicken-broth.png"
            },
            {
              "id": 11282,
              "name": "onion",
              "localizedName": "onion",
              "image": "brown-onion.png"
            },
            {
              "id": 14412,
              "name": "water",
              "localizedName": "water",
              "image": "water.png"
            },
            {
              "id": 11233,
              "name": "kale",
              "localizedName": "kale",
              "image": "kale.jpg"
            },
            {
              "id": 2047,
              "name": "salt",
              "localizedName": "salt",
              "image": "salt.jpg"
            }
          ],
          "equipment": [],
          "length": {
            "number": 30,
            "unit": "minutes"
          }
        },
        {
          "number": 6,
          "step": "Remove half of the beans and liquid and set aside to cool a bit.",
          "ingredients": [
            {
              "id": 0,
              "name": "beans",
              "localizedName": "beans",
              "image": "kidney-beans.jpg"
            }
          ],
          "equipment": []
        },
        {
          "number": 7,
          "step": "Add the sweet potatoes and kale to the pot with some salt and pepper. Cover and cook for 10 minutes.",
          "ingredients": [
            {
              "id": 1102047,
              "name": "salt and pepper",
              "localizedName": "salt and pepper",
              "image": "salt-and-pepper.jpg"
            },
            {
              "id": 11507,
              "name": "sweet potato",
              "localizedName": "sweet potato",
              "image": "sweet-potato.png"
            },
            {
              "id": 11233,
              "name": "kale",
              "localizedName": "kale",
              "image": "kale.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404752,
              "name": "pot",
              "localizedName": "pot",
              "image": "stock-pot.jpg"
            }
          ],
          "length": {
            "number": 10,
            "unit": "minutes"
          }
        },
        {
          "number": 8,
          "step": "Transfer the cooled beans to a blender and puree until smooth, then return them to the pot. Stir in the remaining 1 tbsp of ground cumin. Now add 1 tbsp of the chipotles in adobo. Taste and continue to add more until it has a spice level that you like. Adjust the salt &amp; pepper as needed.",
          "ingredients": [
            {
              "id": 99223,
              "name": "canned chipotle chiles in adobo",
              "localizedName": "canned chipotle chiles in adobo",
              "image": "canned-chipotle.png"
            },
            {
              "id": 1012014,
              "name": "ground cumin",
              "localizedName": "ground cumin",
              "image": "ground-cumin.jpg"
            },
            {
              "id": 1002030,
              "name": "pepper",
              "localizedName": "pepper",
              "image": "pepper.jpg"
            },
            {
              "id": 0,
              "name": "beans",
              "localizedName": "beans",
              "image": "kidney-beans.jpg"
            },
            {
              "id": 2047,
              "name": "salt",
              "localizedName": "salt",
              "image": "salt.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404726,
              "name": "blender",
              "localizedName": "blender",
              "image": "blender.png"
            },
            {
              "id": 404752,
              "name": "pot",
              "localizedName": "pot",
              "image": "stock-pot.jpg"
            }
          ]
        },
        {
          "number": 9,
          "step": "Serve with a dollop of sour cream.",
          "ingredients": [
            {
              "id": 1056,
              "name": "sour cream",
              "localizedName": "sour cream",
              "image": "sour-cream.jpg"
            }
          ],
          "equipment": []
        }
      ]
    }
  ],
  "originalId": null,
  "spoonacularSourceUrl": "https://spoonacular.com/smoky-black-bean-soup-with-sweet-potato-kale-660405"
},
{
  "vegetarian": false,
  "vegan": false,
  "glutenFree": false,
  "dairyFree": false,
  "veryHealthy": false,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "lowFodmap": false,
  "weightWatcherSmartPoints": 31,
  "gaps": "no",
  "preparationMinutes": -1,
  "cookingMinutes": -1,
  "aggregateLikes": 3,
  "healthScore": 19,
  "creditsText": "foodista.com",
  "sourceName": "foodista.com",
  "pricePerServing": 399.9,
  "extendedIngredients": [
    {
      "id": 10720420,
      "aisle": "Pasta and Rice",
      "image": "spaghetti.jpg",
      "consistency": "SOLID",
      "name": "linguine",
      "nameClean": "linguine",
      "original": "4 ounces uncooked linguine",
      "originalName": "uncooked linguine",
      "amount": 4.0,
      "unit": "ounces",
      "meta": [
        "uncooked"
      ],
      "measures": {
        "us": {
          "amount": 4.0,
          "unitShort": "oz",
          "unitLong": "ounces"
        },
        "metric": {
          "amount": 113.398,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 1123,
      "aisle": "Milk, Eggs, Other Dairy",
      "image": "egg.png",
      "consistency": "SOLID",
      "name": "eggs",
      "nameClean": "egg",
      "original": "2 fresh eggs",
      "originalName": "fresh eggs",
      "amount": 2.0,
      "unit": "",
      "meta": [
        "fresh"
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 1049,
      "aisle": "Milk, Eggs, Other Dairy",
      "image": "fluid-cream.jpg",
      "consistency": "SOLID",
      "name": "half and half",
      "nameClean": "half and half",
      "original": "1/2 cup half and half",
      "originalName": "half and half",
      "amount": 0.5,
      "unit": "cup",
      "meta": [],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 121.0,
          "unitShort": "ml",
          "unitLong": "milliliters"
        }
      }
    },
    {
      "id": 1001,
      "aisle": "Milk, Eggs, Other Dairy",
      "image": "butter-sliced.jpg",
      "consistency": "SOLID",
      "name": "butter",
      "nameClean": "butter",
      "original": "1/2 stick butter",
      "originalName": "butter",
      "amount": 0.5,
      "unit": "stick",
      "meta": [],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "stick",
          "unitLong": "sticks"
        },
        "metric": {
          "amount": 0.5,
          "unitShort": "stick",
          "unitLong": "sticks"
        }
      }
    },
    {
      "id": 20081,
      "aisle": "Baking",
      "image": "flour.png",
      "consistency": "SOLID",
      "name": "flour",
      "nameClean": "wheat flour",
      "original": "some flour (2 Tbs or so)",
      "originalName": "3flour or so)",
      "amount": 2.0,
      "unit": "Tbs",
      "meta": [],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "Tbs",
          "unitLong": "Tbs"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "Tbs",
          "unitLong": "Tbs"
        }
      }
    },
    {
      "id": 1033,
      "aisle": "Cheese",
      "image": "parmesan.jpg",
      "consistency": "SOLID",
      "name": "parmigiano reggiano",
      "nameClean": "parmesan",
      "original": "1 cup fresh grated parmigiano reggiano",
      "originalName": "fresh grated parmigiano reggiano",
      "amount": 1.0,
      "unit": "cup",
      "meta": [
        "fresh",
        "grated"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "cup",
          "unitLong": "cup"
        },
        "metric": {
          "amount": 100.0,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 11282,
      "aisle": "Produce",
      "image": "brown-onion.png",
      "consistency": "SOLID",
      "name": "onion",
      "nameClean": "onion",
      "original": "1 small onion",
      "originalName": "onion",
      "amount": 1.0,
      "unit": "small",
      "meta": [],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "small",
          "unitLong": "small"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "small",
          "unitLong": "small"
        }
      }
    },
    {
      "id": 11291,
      "aisle": "Produce",
      "image": "spring-onions.jpg",
      "consistency": "SOLID",
      "name": "scallions",
      "nameClean": "spring onions",
      "original": "3 scallions",
      "originalName": "scallions",
      "amount": 3.0,
      "unit": "",
      "meta": [],
      "measures": {
        "us": {
          "amount": 3.0,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 3.0,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 1002030,
      "aisle": "Spices and Seasonings",
      "image": "pepper.jpg",
      "consistency": "SOLID",
      "name": "pepper",
      "nameClean": "black pepper",
      "original": "black pepper",
      "originalName": "black pepper",
      "amount": 4.0,
      "unit": "servings",
      "meta": [
        "black"
      ],
      "measures": {
        "us": {
          "amount": 4.0,
          "unitShort": "servings",
          "unitLong": "servings"
        },
        "metric": {
          "amount": 4.0,
          "unitShort": "servings",
          "unitLong": "servings"
        }
      }
    },
    {
      "id": 2047,
      "aisle": "Spices and Seasonings",
      "image": "salt.jpg",
      "consistency": "SOLID",
      "name": "truffle salt",
      "nameClean": "table salt",
      "original": "black truffle salt",
      "originalName": "black truffle salt",
      "amount": 4.0,
      "unit": "servings",
      "meta": [
        "black"
      ],
      "measures": {
        "us": {
          "amount": 4.0,
          "unitShort": "servings",
          "unitLong": "servings"
        },
        "metric": {
          "amount": 4.0,
          "unitShort": "servings",
          "unitLong": "servings"
        }
      }
    },
    {
      "id": 1024053,
      "aisle": "Oil, Vinegar, Salad Dressing",
      "image": "truffle-oil.jpg",
      "consistency": "LIQUID",
      "name": "truffle oil",
      "nameClean": "truffle oil",
      "original": "black truffle oil",
      "originalName": "black truffle oil",
      "amount": 4.0,
      "unit": "servings",
      "meta": [
        "black"
      ],
      "measures": {
        "us": {
          "amount": 4.0,
          "unitShort": "servings",
          "unitLong": "servings"
        },
        "metric": {
          "amount": 4.0,
          "unitShort": "servings",
          "unitLong": "servings"
        }
      }
    },
    {
      "id": 18029,
      "aisle": "Bakery/Bread",
      "image": "crusty-bread.jpg",
      "consistency": "SOLID",
      "name": "bread",
      "nameClean": "french bread",
      "original": "a small loaf french bread",
      "originalName": "a french bread",
      "amount": 1.0,
      "unit": "small loaf",
      "meta": [
        "french"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "small loaf",
          "unitLong": "small loaf"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "small loaf",
          "unitLong": "small loaf"
        }
      }
    },
    {
      "id": 1041009,
      "aisle": "Cheese",
      "image": "cheddar-cheese.png",
      "consistency": "SOLID",
      "name": "leftover robusto cheese",
      "nameClean": "cheese",
      "original": "some leftover robusto cheese, and some more butter",
      "originalName": "3leftover robusto cheese, and some more butter",
      "amount": 4.0,
      "unit": "servings",
      "meta": [],
      "measures": {
        "us": {
          "amount": 4.0,
          "unitShort": "servings",
          "unitLong": "servings"
        },
        "metric": {
          "amount": 4.0,
          "unitShort": "servings",
          "unitLong": "servings"
        }
      }
    }
  ],
  "id": 633587,
  "title": "Baked Egg Linguine With Onion, Scallion, and Umame",
  "readyInMinutes": 45,
  "servings": 4,
  "sourceUrl": "https://www.foodista.com/recipe/RGHJRTXN/baked-egg-linguine-with-onion-scallion-and-umame",
  "image": "https://spoonacular.com/recipeImages/633587-556x370.jpg",
  "imageType": "jpg",
  "summary": "Baked Egg Linguine With Onion, Scallion, and Umame might be a good recipe to expand your main course collection. One serving contains <b>917 calories</b>, <b>35g of protein</b>, and <b>51g of fat</b>. This recipe serves 4. For <b>$4.0 per serving</b>, this recipe <b>covers 30%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes around <b>45 minutes</b>. If you have pepper, onion, half and half, and a few other ingredients on hand, you can make it. 3 people have tried and liked this recipe. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 74%</b>, which is solid. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/linguine-with-scallion-sauce-and-sauteed-shrimp-153662\">Linguine with Scallion Sauce and Sauteed Shrimp</a>, <a href=\"https://spoonacular.com/recipes/onion-scallion-beef-668202\">Onion Scallion Beef</a>, and <a href=\"https://spoonacular.com/recipes/onion-scallion-beef-1204965\">Onion Scallion Beef</a>.",
  "cuisines": [],
  "dishTypes": [
    "side dish",
    "lunch",
    "main course",
    "main dish",
    "dinner"
  ],
  "diets": [],
  "occasions": [],
  "instructions": "I start by mincing my onions and scallions, and setting my water to boil for my pasta.  I also grate my cheese and butter my two 8oz ramekins.\nI get 2 tbs butter melted in my large saucepan, and add my onions.  I sweat these out just until softened.\nI then add about 2 tbs of flour, which I mix well with the butter and onions to form a roux.  I cook this for a few moments, until fully incorporated and just turning a wee bit tan.\nI then add my heavy cream, and bring this to a simmer.  See how its thickening up?  NIIIIICE.\nIn goes most of my shredded cheese (I save some for garnish, and for Clayton to pick at), which I stir in well.  I then lower the heat, and let this simmer until thick.  I salt and pepper it to, until it tastes just right.\nIve been cooking my linguine on the back burner, and at just slightly undercooked, its ready to add to the sauce.  I reserve my pasta water, too, so that  if this gets too thick  I can add a little starchy wetness to the pan until the sauce is the right consistency.\nThe last ingredient to add to the pan is my abundance of sliced scallions (reserving some for garnish, too).  I toss this in, remove from the heat, and stir well before\nSwirling my pasta into my waiting ramekins, using tongs to make a nice nest for\nThe addition of a single, cracked (but not the yolk!), farm fresh egg for the center.  This goes in my 350 degree oven, on middle shelf, for 10 minutes to bake  just until the whites are set, but the yolk is still runny.\nOh, I also split a nice small loaf of french bread down the middle, spread it with hot melted butter, and top it with shredded robusto cheese.  I put this in the oven, too, on the top shelf, and let the cheese melt and toast while my eggs are setting.\nScrumdillyicious!\nRight before service, I sprinkle some black truffle oil (Thanks, Tom!) and some black pepper salt over the dish, just to add that umame savor that separates this meal from any ol linguine alfredo.  Served with my toasted cheese bread for sopping, I pierce the quivering sun in the middle of my creamy pasta tresses, and I dive into this hot, simple, elegant, perfect little meal.  30 minutes + very few ingredients = utter weeknight dining perfection!",
  "analyzedInstructions": [
    {
      "name": "",
      "steps": [
        {
          "number": 1,
          "step": "I start by mincing my onions and scallions, and setting my water to boil for my pasta.  I also grate my cheese and butter my two 8oz ramekins.",
          "ingredients": [
            {
              "id": 11291,
              "name": "green onions",
              "localizedName": "green onions",
              "image": "spring-onions.jpg"
            },
            {
              "id": 1001,
              "name": "butter",
              "localizedName": "butter",
              "image": "butter-sliced.jpg"
            },
            {
              "id": 1041009,
              "name": "cheese",
              "localizedName": "cheese",
              "image": "cheddar-cheese.png"
            },
            {
              "id": 11282,
              "name": "onion",
              "localizedName": "onion",
              "image": "brown-onion.png"
            },
            {
              "id": 20420,
              "name": "pasta",
              "localizedName": "pasta",
              "image": "fusilli.jpg"
            },
            {
              "id": 14412,
              "name": "water",
              "localizedName": "water",
              "image": "water.png"
            }
          ],
          "equipment": [
            {
              "id": 404781,
              "name": "ramekin",
              "localizedName": "ramekin",
              "image": "ramekin.jpg"
            }
          ]
        },
        {
          "number": 2,
          "step": "I get 2 tbs butter melted in my large saucepan, and add my onions.  I sweat these out just until softened.",
          "ingredients": [
            {
              "id": 1001,
              "name": "butter",
              "localizedName": "butter",
              "image": "butter-sliced.jpg"
            },
            {
              "id": 11282,
              "name": "onion",
              "localizedName": "onion",
              "image": "brown-onion.png"
            }
          ],
          "equipment": [
            {
              "id": 404669,
              "name": "sauce pan",
              "localizedName": "sauce pan",
              "image": "sauce-pan.jpg"
            }
          ]
        },
        {
          "number": 3,
          "step": "I then add about 2 tbs of flour, which I mix well with the butter and onions to form a roux.  I cook this for a few moments, until fully incorporated and just turning a wee bit tan.",
          "ingredients": [
            {
              "id": 1001,
              "name": "butter",
              "localizedName": "butter",
              "image": "butter-sliced.jpg"
            },
            {
              "id": 11282,
              "name": "onion",
              "localizedName": "onion",
              "image": "brown-onion.png"
            },
            {
              "id": 20081,
              "name": "all purpose flour",
              "localizedName": "all purpose flour",
              "image": "flour.png"
            }
          ],
          "equipment": []
        },
        {
          "number": 4,
          "step": "I then add my heavy cream, and bring this to a simmer.  See how its thickening up?  NIIIIICE.",
          "ingredients": [
            {
              "id": 1053,
              "name": "heavy cream",
              "localizedName": "heavy cream",
              "image": "fluid-cream.jpg"
            }
          ],
          "equipment": []
        },
        {
          "number": 5,
          "step": "In goes most of my shredded cheese (I save some for garnish, and for Clayton to pick at), which I stir in well.  I then lower the heat, and let this simmer until thick.  I salt and pepper it to, until it tastes just right.",
          "ingredients": [
            {
              "id": 1102047,
              "name": "salt and pepper",
              "localizedName": "salt and pepper",
              "image": "salt-and-pepper.jpg"
            },
            {
              "id": 1011026,
              "name": "shredded cheese",
              "localizedName": "shredded cheese",
              "image": "cheddar-cheese.png"
            }
          ],
          "equipment": []
        },
        {
          "number": 6,
          "step": "Ive been cooking my linguine on the back burner, and at just slightly undercooked, its ready to add to the sauce.  I reserve my pasta water, too, so that  if this gets too thick  I can add a little starchy wetness to the pan until the sauce is the right consistency.",
          "ingredients": [
            {
              "id": 14412,
              "name": "water",
              "localizedName": "water",
              "image": "water.png"
            },
            {
              "id": 10720420,
              "name": "linguine",
              "localizedName": "linguine",
              "image": "spaghetti.jpg"
            },
            {
              "id": 0,
              "name": "sauce",
              "localizedName": "sauce",
              "image": ""
            }
          ],
          "equipment": [
            {
              "id": 404645,
              "name": "frying pan",
              "localizedName": "frying pan",
              "image": "pan.png"
            }
          ]
        },
        {
          "number": 7,
          "step": "The last ingredient to add to the pan is my abundance of sliced scallions (reserving some for garnish, too).  I toss this in, remove from the heat, and stir well before",
          "ingredients": [
            {
              "id": 11291,
              "name": "green onions",
              "localizedName": "green onions",
              "image": "spring-onions.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404645,
              "name": "frying pan",
              "localizedName": "frying pan",
              "image": "pan.png"
            }
          ]
        },
        {
          "number": 8,
          "step": "Swirling my pasta into my waiting ramekins, using tongs to make a nice nest for",
          "ingredients": [
            {
              "id": 20420,
              "name": "pasta",
              "localizedName": "pasta",
              "image": "fusilli.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404781,
              "name": "ramekin",
              "localizedName": "ramekin",
              "image": "ramekin.jpg"
            },
            {
              "id": 404641,
              "name": "tongs",
              "localizedName": "tongs",
              "image": "tongs.jpg"
            }
          ]
        },
        {
          "number": 9,
          "step": "The addition of a single, cracked (but not the yolk!), farm fresh egg for the center.  This goes in my 350 degree oven, on middle shelf, for 10 minutes to bake  just until the whites are set, but the yolk is still runny.",
          "ingredients": [
            {
              "id": 1125,
              "name": "egg yolk",
              "localizedName": "egg yolk",
              "image": "egg-yolk.jpg"
            },
            {
              "id": 1123,
              "name": "egg",
              "localizedName": "egg",
              "image": "egg.png"
            }
          ],
          "equipment": [
            {
              "id": 404784,
              "name": "oven",
              "localizedName": "oven",
              "image": "oven.jpg"
            }
          ],
          "length": {
            "number": 10,
            "unit": "minutes"
          }
        },
        {
          "number": 10,
          "step": "Oh, I also split a nice small loaf of french bread down the middle, spread it with hot melted butter, and top it with shredded robusto cheese.  I put this in the oven, too, on the top shelf, and let the cheese melt and toast while my eggs are setting.",
          "ingredients": [
            {
              "id": 18029,
              "name": "french bread",
              "localizedName": "french bread",
              "image": "crusty-bread.jpg"
            },
            {
              "id": 1001,
              "name": "butter",
              "localizedName": "butter",
              "image": "butter-sliced.jpg"
            },
            {
              "id": 1041009,
              "name": "cheese",
              "localizedName": "cheese",
              "image": "cheddar-cheese.png"
            },
            {
              "id": 0,
              "name": "spread",
              "localizedName": "spread",
              "image": ""
            },
            {
              "id": 0,
              "name": "sandwich bread",
              "localizedName": "sandwich bread",
              "image": "white-bread.jpg"
            },
            {
              "id": 1123,
              "name": "egg",
              "localizedName": "egg",
              "image": "egg.png"
            }
          ],
          "equipment": [
            {
              "id": 404784,
              "name": "oven",
              "localizedName": "oven",
              "image": "oven.jpg"
            }
          ]
        },
        {
          "number": 11,
          "step": "Scrumdillyicious!",
          "ingredients": [],
          "equipment": []
        },
        {
          "number": 12,
          "step": "Right before service, I sprinkle some black truffle oil (Thanks, Tom!) and some black pepper salt over the dish, just to add that umame savor that separates this meal from any ol linguine alfredo.",
          "ingredients": [
            {
              "id": 1002030,
              "name": "black pepper",
              "localizedName": "black pepper",
              "image": "pepper.jpg"
            },
            {
              "id": 1024053,
              "name": "truffle oil",
              "localizedName": "truffle oil",
              "image": "truffle-oil.jpg"
            },
            {
              "id": 10720420,
              "name": "linguine",
              "localizedName": "linguine",
              "image": "spaghetti.jpg"
            },
            {
              "id": 2047,
              "name": "salt",
              "localizedName": "salt",
              "image": "salt.jpg"
            }
          ],
          "equipment": []
        },
        {
          "number": 13,
          "step": "Served with my toasted cheese bread for sopping, I pierce the quivering sun in the middle of my creamy pasta tresses, and I dive into this hot, simple, elegant, perfect little meal.  30 minutes + very few ingredients = utter weeknight dining perfection!",
          "ingredients": [
            {
              "id": 1041009,
              "name": "cheese",
              "localizedName": "cheese",
              "image": "cheddar-cheese.png"
            },
            {
              "id": 18064,
              "name": "bread",
              "localizedName": "bread",
              "image": "white-bread.jpg"
            },
            {
              "id": 20420,
              "name": "pasta",
              "localizedName": "pasta",
              "image": "fusilli.jpg"
            }
          ],
          "equipment": [],
          "length": {
            "number": 30,
            "unit": "minutes"
          }
        }
      ]
    }
  ],
  "originalId": null,
  "spoonacularSourceUrl": "https://spoonacular.com/baked-egg-linguine-with-onion-scallion-and-umame-633587"
},
{
  "vegetarian": false,
  "vegan": false,
  "glutenFree": false,
  "dairyFree": true,
  "veryHealthy": false,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "lowFodmap": false,
  "weightWatcherSmartPoints": 9,
  "gaps": "no",
  "preparationMinutes": -1,
  "cookingMinutes": -1,
  "aggregateLikes": 2,
  "healthScore": 47,
  "creditsText": "foodista.com",
  "sourceName": "foodista.com",
  "pricePerServing": 177.0,
  "extendedIngredients": [
    {
      "id": 11043,
      "aisle": "Produce",
      "image": "bean-sprouts.jpg",
      "consistency": "SOLID",
      "name": "bean sprouts",
      "nameClean": "bean sprouts",
      "original": "1 cup bean sprouts, drained",
      "originalName": "bean sprouts, drained",
      "amount": 1.0,
      "unit": "cup",
      "meta": [
        "drained"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "cup",
          "unitLong": "cup"
        },
        "metric": {
          "amount": 104.0,
          "unitShort": "ml",
          "unitLong": "milliliters"
        }
      }
    },
    {
      "id": 11116,
      "aisle": "Produce",
      "image": "bok-choy.jpg",
      "consistency": "SOLID",
      "name": "bok choy",
      "nameClean": "bok choy",
      "original": "1 cup bok choy, chopped",
      "originalName": "bok choy, chopped",
      "amount": 1.0,
      "unit": "cup",
      "meta": [
        "chopped"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "cup",
          "unitLong": "cup"
        },
        "metric": {
          "amount": 70.0,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 11124,
      "aisle": "Produce",
      "image": "sliced-carrot.png",
      "consistency": "SOLID",
      "name": "carrot",
      "nameClean": "carrot",
      "original": "1/2 cup carrot, julienned",
      "originalName": "carrot, julienned",
      "amount": 0.5,
      "unit": "cup",
      "meta": [
        "julienned"
      ],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 64.0,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 11420421,
      "aisle": "Pasta and Rice",
      "image": "spaghetti.jpg",
      "consistency": "SOLID",
      "name": "spaghetti",
      "nameClean": "cooked spaghetti",
      "original": "2 cups cooked cooked spaghetti",
      "originalName": "cooked cooked spaghetti",
      "amount": 2.0,
      "unit": "cups",
      "meta": [
        "cooked"
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 280.0,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 11215,
      "aisle": "Produce",
      "image": "garlic.png",
      "consistency": "SOLID",
      "name": "garlic",
      "nameClean": "garlic",
      "original": "1 clove garlic, minced",
      "originalName": "garlic, minced",
      "amount": 1.0,
      "unit": "clove",
      "meta": [
        "minced"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "clove",
          "unitLong": "clove"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "clove",
          "unitLong": "clove"
        }
      }
    },
    {
      "id": 11216,
      "aisle": "Produce",
      "image": "ginger.png",
      "consistency": "SOLID",
      "name": "ginger",
      "nameClean": "ginger",
      "original": "2 teaspoons ginger, minced",
      "originalName": "ginger, minced",
      "amount": 2.0,
      "unit": "teaspoons",
      "meta": [
        "minced"
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        }
      }
    },
    {
      "id": 6970,
      "aisle": "Canned and Jarred",
      "image": "chicken-broth.png",
      "consistency": "LIQUID",
      "name": "chicken broth",
      "nameClean": "low sodium chicken broth",
      "original": "1/2 cup low-sodium chicken broth",
      "originalName": "low-sodium chicken broth",
      "amount": 0.5,
      "unit": "cup",
      "meta": [
        "low-sodium"
      ],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 118.0,
          "unitShort": "ml",
          "unitLong": "milliliters"
        }
      }
    },
    {
      "id": 16424,
      "aisle": "Ethnic Foods",
      "image": "soy-sauce.jpg",
      "consistency": "LIQUID",
      "name": "soy sauce",
      "nameClean": "lower sodium soy sauce",
      "original": "1 tablespoon low-sodium soy sauce",
      "originalName": "low-sodium soy sauce",
      "amount": 1.0,
      "unit": "tablespoon",
      "meta": [
        "low-sodium"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "Tbsp",
          "unitLong": "Tbsp"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "Tbsp",
          "unitLong": "Tbsp"
        }
      }
    },
    {
      "id": 11260,
      "aisle": "Produce",
      "image": "mushrooms.png",
      "consistency": "SOLID",
      "name": "mushrooms",
      "nameClean": "fresh mushrooms",
      "original": "1/2 cup mushrooms, sliced",
      "originalName": "mushrooms, sliced",
      "amount": 0.5,
      "unit": "cup",
      "meta": [
        "sliced"
      ],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 48.0,
          "unitShort": "ml",
          "unitLong": "milliliters"
        }
      }
    },
    {
      "id": 11260,
      "aisle": "Produce",
      "image": "mushrooms-white.jpg",
      "consistency": "SOLID",
      "name": "mushrooms",
      "nameClean": "fresh mushrooms",
      "original": "1/2 cup mushrooms, sliced",
      "originalName": "mushrooms, sliced",
      "amount": 0.5,
      "unit": "cup",
      "meta": [
        "sliced"
      ],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 48.0,
          "unitShort": "ml",
          "unitLong": "milliliters"
        }
      }
    },
    {
      "id": 4042,
      "aisle": "Oil, Vinegar, Salad Dressing",
      "image": "peanut-oil.jpg",
      "consistency": "LIQUID",
      "name": "peanut oil",
      "nameClean": "peanut oil",
      "original": "2 teaspoons peanut oil",
      "originalName": "peanut oil",
      "amount": 2.0,
      "unit": "teaspoons",
      "meta": [],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        }
      }
    },
    {
      "id": 11291,
      "aisle": "Produce",
      "image": "spring-onions.jpg",
      "consistency": "SOLID",
      "name": "scallions",
      "nameClean": "spring onions",
      "original": "4 scallions, juliened",
      "originalName": "scallions, juliened",
      "amount": 4.0,
      "unit": "",
      "meta": [],
      "measures": {
        "us": {
          "amount": 4.0,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 4.0,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 1055062,
      "aisle": "Meat",
      "image": "chicken-breasts.png",
      "consistency": "SOLID",
      "name": "chicken breast",
      "nameClean": "boneless skinless chicken breast",
      "original": "5 ounces boneless, skinless chicken breast, cut into ½-inch strips",
      "originalName": "boneless, skinless chicken breast, cut into ½-inch strips",
      "amount": 5.0,
      "unit": "ounces",
      "meta": [
        "boneless",
        "skinless",
        "cut into ½-inch strips"
      ],
      "measures": {
        "us": {
          "amount": 5.0,
          "unitShort": "oz",
          "unitLong": "ounces"
        },
        "metric": {
          "amount": 141.748,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    }
  ],
  "id": 638174,
  "title": "Chicken Lo Mein",
  "readyInMinutes": 45,
  "servings": 2,
  "sourceUrl": "http://www.foodista.com/recipe/R6TCPBBF/chicken-lo-mein",
  "image": "https://spoonacular.com/recipeImages/638174-556x370.jpg",
  "imageType": "jpg",
  "summary": "Chicken Lo Mein is a <b>dairy free</b> recipe with 2 servings. One portion of this dish contains approximately <b>29g of protein</b>, <b>8g of fat</b>, and a total of <b>401 calories</b>. For <b>$1.77 per serving</b>, this recipe <b>covers 30%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes around <b>45 minutes</b>. 2 people have made this recipe and would make it again. It is brought to you by Foodista. If you have chicken breast, ginger, chicken broth, and a few other ingredients on hand, you can make it. Not a lot of people really liked this main course. Overall, this recipe earns a <b>spectacular spoonacular score of 84%</b>. <a href=\"https://spoonacular.com/recipes/pancit-canton-aka-lo-mein-or-chow-mein-522418\">Pancit canton (a.k.a. lo mein or chow mein)</a>, <a href=\"https://spoonacular.com/recipes/pancit-canton-aka-lo-mein-or-chow-mein-1357539\">Pancit canton (a.k.a. lo mein or chow mein)</a>, and <a href=\"https://spoonacular.com/recipes/chicken-lo-mein-94082\">Chicken Lo Mein</a> are very similar to this recipe.",
  "cuisines": [],
  "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
  ],
  "diets": [
    "dairy free"
  ],
  "occasions": [],
  "instructions": "<ol><li>In a large nonstick skillet, heat oil; add ginger and garlic and cook over medium heat for 1 minute.  Add chicken and carrot; cook over medium-high heat, stirring occasionally, until chicken is lightly browned, about 2 minutes.</li><li>Add remaining ingredients except noodles; cook, stirring constantly, until carrot is tender-crisp, about 3 minutes.  Stir in noodles and cook until heated through, about 1 minute.</li></ol>",
  "analyzedInstructions": [
    {
      "name": "",
      "steps": [
        {
          "number": 1,
          "step": "In a large nonstick skillet, heat oil; add ginger and garlic and cook over medium heat for 1 minute.",
          "ingredients": [
            {
              "id": 11215,
              "name": "garlic",
              "localizedName": "garlic",
              "image": "garlic.png"
            },
            {
              "id": 11216,
              "name": "ginger",
              "localizedName": "ginger",
              "image": "ginger.png"
            },
            {
              "id": 4582,
              "name": "cooking oil",
              "localizedName": "cooking oil",
              "image": "vegetable-oil.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404645,
              "name": "frying pan",
              "localizedName": "frying pan",
              "image": "pan.png"
            }
          ],
          "length": {
            "number": 1,
            "unit": "minutes"
          }
        },
        {
          "number": 2,
          "step": "Add chicken and carrot; cook over medium-high heat, stirring occasionally, until chicken is lightly browned, about 2 minutes.",
          "ingredients": [
            {
              "id": 5006,
              "name": "whole chicken",
              "localizedName": "whole chicken",
              "image": "whole-chicken.jpg"
            },
            {
              "id": 11124,
              "name": "carrot",
              "localizedName": "carrot",
              "image": "sliced-carrot.png"
            }
          ],
          "equipment": [],
          "length": {
            "number": 2,
            "unit": "minutes"
          }
        },
        {
          "number": 3,
          "step": "Add remaining ingredients except noodles; cook, stirring constantly, until carrot is tender-crisp, about 3 minutes.  Stir in noodles and cook until heated through, about 1 minute.",
          "ingredients": [
            {
              "id": 20420,
              "name": "pasta",
              "localizedName": "pasta",
              "image": "fusilli.jpg"
            },
            {
              "id": 11124,
              "name": "carrot",
              "localizedName": "carrot",
              "image": "sliced-carrot.png"
            }
          ],
          "equipment": [],
          "length": {
            "number": 4,
            "unit": "minutes"
          }
        }
      ]
    }
  ],
  "originalId": null,
  "spoonacularSourceUrl": "https://spoonacular.com/chicken-lo-mein-638174"
},
{
  "vegetarian": false,
  "vegan": false,
  "glutenFree": false,
  "dairyFree": false,
  "veryHealthy": false,
  "cheap": false,
  "veryPopular": true,
  "sustainable": false,
  "lowFodmap": false,
  "weightWatcherSmartPoints": 12,
  "gaps": "no",
  "preparationMinutes": 80,
  "cookingMinutes": 30,
  "aggregateLikes": 32767,
  "healthScore": 10,
  "creditsText": "pinkwhen.com",
  "sourceName": "pinkwhen.com",
  "pricePerServing": 136.02,
  "extendedIngredients": [
    {
      "id": 11549,
      "aisle": "Canned and Jarred",
      "image": "tomato-sauce-or-pasta-sauce.jpg",
      "consistency": "SOLID",
      "name": "tomato sauce",
      "nameClean": "canned tomato sauce",
      "original": "1 (8 oz) can tomato sauce",
      "originalName": "tomato sauce",
      "amount": 8.0,
      "unit": "oz",
      "meta": [
        "canned"
      ],
      "measures": {
        "us": {
          "amount": 8.0,
          "unitShort": "oz",
          "unitLong": "ounces"
        },
        "metric": {
          "amount": 226.796,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 11549,
      "aisle": "Canned and Jarred",
      "image": "tomato-sauce-or-pasta-sauce.jpg",
      "consistency": "SOLID",
      "name": "tomato sauce",
      "nameClean": "canned tomato sauce",
      "original": "1 (16 oz) can tomato sauce",
      "originalName": "tomato sauce",
      "amount": 16.0,
      "unit": "oz",
      "meta": [
        "canned"
      ],
      "measures": {
        "us": {
          "amount": 16.0,
          "unitShort": "oz",
          "unitLong": "ounces"
        },
        "metric": {
          "amount": 453.592,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 2003,
      "aisle": "Spices and Seasonings",
      "image": "basil.jpg",
      "consistency": "SOLID",
      "name": "basil",
      "nameClean": "dried basil",
      "original": "1½ tsp dried basil",
      "originalName": "dried basil",
      "amount": 1.5,
      "unit": "tsp",
      "meta": [
        "dried"
      ],
      "measures": {
        "us": {
          "amount": 1.5,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        },
        "metric": {
          "amount": 1.5,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        }
      }
    },
    {
      "id": 1123,
      "aisle": "Milk, Eggs, Other Dairy",
      "image": "egg.png",
      "consistency": "SOLID",
      "name": "egg",
      "nameClean": "egg",
      "original": "1 egg",
      "originalName": "egg",
      "amount": 1.0,
      "unit": "",
      "meta": [],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 1034053,
      "aisle": "Oil, Vinegar, Salad Dressing",
      "image": "olive-oil.jpg",
      "consistency": "LIQUID",
      "name": "extra virgin olive oil",
      "nameClean": "extra virgin olive oil",
      "original": "1 Tbsp extra virgin olive oil",
      "originalName": "extra virgin olive oil",
      "amount": 1.0,
      "unit": "Tbsp",
      "meta": [],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "Tbsp",
          "unitLong": "Tbsp"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "Tbsp",
          "unitLong": "Tbsp"
        }
      }
    },
    {
      "id": 98849,
      "aisle": "Canned and Jarred",
      "image": "tomatoes-canned.png",
      "consistency": "SOLID",
      "name": "canned tomatoes",
      "nameClean": "fire roasted tomatoes",
      "original": "1 (15 oz) can diced tomatoes (I use flavored fire roasted with basil)",
      "originalName": "diced tomatoes (I use flavored fire roasted with basil)",
      "amount": 15.0,
      "unit": "oz",
      "meta": [
        "diced",
        "fire roasted",
        "with basil)",
        "flavored",
        "canned"
      ],
      "measures": {
        "us": {
          "amount": 15.0,
          "unitShort": "oz",
          "unitLong": "ounces"
        },
        "metric": {
          "amount": 425.243,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 10511297,
      "aisle": "Produce",
      "image": "parsley.jpg",
      "consistency": "SOLID",
      "name": "parsley",
      "nameClean": "fresh parsley",
      "original": "4 Tbsp chopped fresh parsley",
      "originalName": "chopped fresh parsley",
      "amount": 4.0,
      "unit": "Tbsp",
      "meta": [
        "fresh",
        "chopped"
      ],
      "measures": {
        "us": {
          "amount": 4.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        },
        "metric": {
          "amount": 4.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        }
      }
    },
    {
      "id": 11215,
      "aisle": "Produce",
      "image": "garlic.png",
      "consistency": "SOLID",
      "name": "garlic",
      "nameClean": "garlic",
      "original": "2 cloves garlic (minced)",
      "originalName": "garlic (minced)",
      "amount": 2.0,
      "unit": "cloves",
      "meta": [
        "minced",
        "()"
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "cloves",
          "unitLong": "cloves"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "cloves",
          "unitLong": "cloves"
        }
      }
    },
    {
      "id": 1002030,
      "aisle": "Spices and Seasonings",
      "image": "pepper.jpg",
      "consistency": "SOLID",
      "name": "ground pepper",
      "nameClean": "black pepper",
      "original": "¼ tsp ground black pepper",
      "originalName": "ground black pepper",
      "amount": 0.25,
      "unit": "tsp",
      "meta": [
        "black"
      ],
      "measures": {
        "us": {
          "amount": 0.25,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        },
        "metric": {
          "amount": 0.25,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        }
      }
    },
    {
      "id": 7036,
      "aisle": "Meat",
      "image": "raw-pork-sausage.png",
      "consistency": "SOLID",
      "name": "sausage",
      "nameClean": "italian sausage",
      "original": "1 pound Italian Sausage",
      "originalName": "Italian Sausage",
      "amount": 1.0,
      "unit": "pound",
      "meta": [
        "italian"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "lb",
          "unitLong": "pound"
        },
        "metric": {
          "amount": 453.592,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 1022027,
      "aisle": "Spices and Seasonings",
      "image": "dried-herbs.png",
      "consistency": "SOLID",
      "name": "seasoning",
      "nameClean": "italian seasoning",
      "original": "1 tsp Italian seasoning",
      "originalName": "Italian seasoning",
      "amount": 1.0,
      "unit": "tsp",
      "meta": [
        "italian"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "tsp",
          "unitLong": "teaspoon"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "tsp",
          "unitLong": "teaspoon"
        }
      }
    },
    {
      "id": 10620420,
      "aisle": "Pasta and Rice",
      "image": "lasagna-noodles.jpg",
      "consistency": "SOLID",
      "name": "lasagna noodles",
      "nameClean": "lasagne noodles",
      "original": "Uncooked Lasagna noodles",
      "originalName": "Uncooked Lasagna noodles",
      "amount": 18.0,
      "unit": "servings",
      "meta": [
        "uncooked"
      ],
      "measures": {
        "us": {
          "amount": 18.0,
          "unitShort": "servings",
          "unitLong": "servings"
        },
        "metric": {
          "amount": 18.0,
          "unitShort": "servings",
          "unitLong": "servings"
        }
      }
    },
    {
      "id": 23557,
      "aisle": "Meat",
      "image": "fresh-ground-beef.jpg",
      "consistency": "SOLID",
      "name": "ground beef",
      "nameClean": "95 percent lean ground beef",
      "original": "1 pound Lean Ground Beef (I like 93/7)",
      "originalName": "Lean Ground Beef (I like 93/7)",
      "amount": 1.0,
      "unit": "pound",
      "meta": [
        "lean",
        "(I like)"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "lb",
          "unitLong": "pound"
        },
        "metric": {
          "amount": 453.592,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 23557,
      "aisle": "Meat",
      "image": "fresh-ground-beef.jpg",
      "consistency": "SOLID",
      "name": "ground beef",
      "nameClean": "95 percent lean ground beef",
      "original": "1 pound Lean Ground Beef (I like 93/7)",
      "originalName": "Lean Ground Beef (I like 93/7)",
      "amount": 1.0,
      "unit": "pound",
      "meta": [
        "lean",
        "(I like)"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "lb",
          "unitLong": "pound"
        },
        "metric": {
          "amount": 453.592,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 1041009,
      "aisle": "Cheese",
      "image": "cheddar-cheese.png",
      "consistency": "SOLID",
      "name": "m zarella cheese",
      "nameClean": "cheese",
      "original": "sliced mozzarella cheese",
      "originalName": "sliced m zarella cheese",
      "amount": 1.0,
      "unit": "oz",
      "meta": [
        "sliced"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "oz",
          "unitLong": "ounce"
        },
        "metric": {
          "amount": 28.35,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 11282,
      "aisle": "Produce",
      "image": "brown-onion.png",
      "consistency": "SOLID",
      "name": "onion",
      "nameClean": "onion",
      "original": "½ cup chopped onion",
      "originalName": "chopped onion",
      "amount": 0.5,
      "unit": "cup",
      "meta": [
        "chopped"
      ],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 80.0,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 1033,
      "aisle": "Cheese",
      "image": "parmesan.jpg",
      "consistency": "SOLID",
      "name": "parmesan reggiano",
      "nameClean": "parmesan",
      "original": "¾ cup grated parmesan reggiano",
      "originalName": "grated parmesan reggiano",
      "amount": 0.75,
      "unit": "cup",
      "meta": [
        "grated"
      ],
      "measures": {
        "us": {
          "amount": 0.75,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 75.0,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 1036,
      "aisle": "Cheese",
      "image": "ricotta.png",
      "consistency": "SOLID",
      "name": "ricotta cheese",
      "nameClean": "ricotta cheese",
      "original": "(16 oz) ricotta cheese",
      "originalName": "ricotta cheese",
      "amount": 16.0,
      "unit": "oz",
      "meta": [],
      "measures": {
        "us": {
          "amount": 16.0,
          "unitShort": "oz",
          "unitLong": "ounces"
        },
        "metric": {
          "amount": 453.592,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 2047,
      "aisle": "Spices and Seasonings",
      "image": "salt.jpg",
      "consistency": "SOLID",
      "name": "salt",
      "nameClean": "table salt",
      "original": "½ tsp salt",
      "originalName": "salt",
      "amount": 0.5,
      "unit": "tsp",
      "meta": [],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        },
        "metric": {
          "amount": 0.5,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        }
      }
    },
    {
      "id": 14412,
      "aisle": "Beverages",
      "image": "water.png",
      "consistency": "LIQUID",
      "name": "water",
      "nameClean": "water",
      "original": "½ cup water",
      "originalName": "water",
      "amount": 0.5,
      "unit": "cup",
      "meta": [],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 118.294,
          "unitShort": "ml",
          "unitLong": "milliliters"
        }
      }
    }
  ],
  "id": 715560,
  "title": "World’s Greatest Lasagna Roll Ups",
  "readyInMinutes": 110,
  "servings": 18,
  "sourceUrl": "http://www.pinkwhen.com/worlds-greatest-lasagna-roll-ups-recipe/",
  "image": "https://spoonacular.com/recipeImages/715560-556x370.jpg",
  "imageType": "jpg",
  "summary": "You can never have too many Mediterranean recipes, so give World’s Greatest Lasagna Roll Ups a try. One portion of this dish contains around <b>22g of protein</b>, <b>16g of fat</b>, and a total of <b>424 calories</b>. For <b>$1.36 per serving</b>, you get a main course that serves 18. This recipe is liked by 32767 foodies and cooks. If you have extra virgin olive oil, tomato sauce, water, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes about <b>1 hour and 50 minutes</b>. It is brought to you by Pink When. Overall, this recipe earns a <b>solid spoonacular score of 71%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/worlds-greatest-lasagna-roll-ups-1283037\">World’s Greatest Lasagna Roll Ups</a>, <a href=\"https://spoonacular.com/recipes/how-to-make-the-worlds-greatest-lasagna-roll-ups-1054737\">How to make the World’s Greatest Lasagna Roll Ups</a>, and <a href=\"https://spoonacular.com/recipes/how-to-make-the-worlds-greatest-lasagna-roll-ups-1366803\">How to make the World’s Greatest Lasagna Roll Ups</a>.",
  "cuisines": [
    "Mediterranean",
    "Italian",
    "European"
  ],
  "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
  ],
  "diets": [],
  "occasions": [],
  "instructions": "In a large sauce pan on medium heat start browning your meat.On medium heat in a separate pan with the Tbsp of olive oil start to cook the onion, garlic, Italian seasoning, and basil for about 6-8 minutes, or until onion is translucent. Add this to the meat mixture, along with the tomatoes, tomato sauce, water, black pepper, and 2 tbsp of the fresh parsley. Allow to simmer uncovered for 1 hour.Bring a large pot of water to boil and begin cook the lasagna noodles for 8-10 minutes. Drain and rinse with cold water.In a small mixing bowl combine remaining parsley, ricotta cheese, egg,  tsp salt and mix well.Heat oven to 375. Pour some meat sauce into the bottom of a 9 x 13 glass baking dish.To make the roll ups place a noodle onto a flat surface and spread with the cheese mixture. Then sprinkle a little parmesan reggiano cheese on the cheese mixture.Then roll them up!Once you have all of the lasagna roll ups lined into the dish, cover each with a little more of the meat mixture. Top with a slice of mozzarella cheese and then cover the dish with foil. Bake in the oven for 20 minutes. Remove foil and bake for an additional 10 minutes uncovered. Remove from the oven and allow to cool for 10 minutes before serving.",
  "analyzedInstructions": [
    {
      "name": "",
      "steps": [
        {
          "number": 1,
          "step": "In a large sauce pan on medium heat start browning your meat.On medium heat in a separate pan with the Tbsp of olive oil start to cook the onion, garlic, Italian seasoning, and basil for about 6-8 minutes, or until onion is translucent.",
          "ingredients": [
            {
              "id": 1022027,
              "name": "italian seasoning",
              "localizedName": "italian seasoning",
              "image": "dried-herbs.png"
            },
            {
              "id": 4053,
              "name": "olive oil",
              "localizedName": "olive oil",
              "image": "olive-oil.jpg"
            },
            {
              "id": 11215,
              "name": "garlic",
              "localizedName": "garlic",
              "image": "garlic.png"
            },
            {
              "id": 2044,
              "name": "basil",
              "localizedName": "basil",
              "image": "basil.jpg"
            },
            {
              "id": 11282,
              "name": "onion",
              "localizedName": "onion",
              "image": "brown-onion.png"
            },
            {
              "id": 0,
              "name": "sauce",
              "localizedName": "sauce",
              "image": ""
            },
            {
              "id": 1065062,
              "name": "meat",
              "localizedName": "meat",
              "image": "whole-chicken.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404669,
              "name": "sauce pan",
              "localizedName": "sauce pan",
              "image": "sauce-pan.jpg"
            },
            {
              "id": 404645,
              "name": "frying pan",
              "localizedName": "frying pan",
              "image": "pan.png"
            }
          ],
          "length": {
            "number": 8,
            "unit": "minutes"
          }
        },
        {
          "number": 2,
          "step": "Add this to the meat mixture, along with the tomatoes, tomato sauce, water, black pepper, and 2 tbsp of the fresh parsley. Allow to simmer uncovered for 1 hour.Bring a large pot of water to boil and begin cook the lasagna noodles for 8-10 minutes.",
          "ingredients": [
            {
              "id": 10620420,
              "name": "lasagne noodles",
              "localizedName": "lasagne noodles",
              "image": "lasagna-noodles.jpg"
            },
            {
              "id": 10511297,
              "name": "fresh parsley",
              "localizedName": "fresh parsley",
              "image": "parsley.jpg"
            },
            {
              "id": 1002030,
              "name": "black pepper",
              "localizedName": "black pepper",
              "image": "pepper.jpg"
            },
            {
              "id": 11549,
              "name": "tomato sauce",
              "localizedName": "tomato sauce",
              "image": "tomato-sauce-or-pasta-sauce.jpg"
            },
            {
              "id": 11529,
              "name": "tomato",
              "localizedName": "tomato",
              "image": "tomato.png"
            },
            {
              "id": 14412,
              "name": "water",
              "localizedName": "water",
              "image": "water.png"
            },
            {
              "id": 1065062,
              "name": "meat",
              "localizedName": "meat",
              "image": "whole-chicken.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404752,
              "name": "pot",
              "localizedName": "pot",
              "image": "stock-pot.jpg"
            }
          ],
          "length": {
            "number": 70,
            "unit": "minutes"
          }
        },
        {
          "number": 3,
          "step": "Drain and rinse with cold water.In a small mixing bowl combine remaining parsley, ricotta cheese, egg,  tsp salt and mix well.",
          "ingredients": [
            {
              "id": 1036,
              "name": "ricotta cheese",
              "localizedName": "ricotta cheese",
              "image": "ricotta.png"
            },
            {
              "id": 11297,
              "name": "parsley",
              "localizedName": "parsley",
              "image": "parsley.jpg"
            },
            {
              "id": 14412,
              "name": "water",
              "localizedName": "water",
              "image": "water.png"
            },
            {
              "id": 2047,
              "name": "salt",
              "localizedName": "salt",
              "image": "salt.jpg"
            },
            {
              "id": 1123,
              "name": "egg",
              "localizedName": "egg",
              "image": "egg.png"
            }
          ],
          "equipment": [
            {
              "id": 405907,
              "name": "mixing bowl",
              "localizedName": "mixing bowl",
              "image": "mixing-bowl.jpg"
            }
          ]
        },
        {
          "number": 4,
          "step": "Heat oven to 37",
          "ingredients": [],
          "equipment": [
            {
              "id": 404784,
              "name": "oven",
              "localizedName": "oven",
              "image": "oven.jpg"
            }
          ]
        },
        {
          "number": 5,
          "step": "Pour some meat sauce into the bottom of a 9 x 13 glass baking dish.To make the roll ups place a noodle onto a flat surface and spread with the cheese mixture. Then sprinkle a little parmesan reggiano cheese on the cheese mixture.Then roll them up!Once you have all of the lasagna roll ups lined into the dish, cover each with a little more of the meat mixture. Top with a slice of mozzarella cheese and then cover the dish with foil.",
          "ingredients": [
            {
              "id": 1026,
              "name": "mozzarella",
              "localizedName": "mozzarella",
              "image": "mozzarella.png"
            },
            {
              "id": 1033,
              "name": "parmesan",
              "localizedName": "parmesan",
              "image": "parmesan.jpg"
            },
            {
              "id": 1041009,
              "name": "cheese",
              "localizedName": "cheese",
              "image": "cheddar-cheese.png"
            },
            {
              "id": 20420,
              "name": "pasta",
              "localizedName": "pasta",
              "image": "fusilli.jpg"
            },
            {
              "id": 0,
              "name": "spread",
              "localizedName": "spread",
              "image": ""
            },
            {
              "id": 0,
              "name": "sauce",
              "localizedName": "sauce",
              "image": ""
            },
            {
              "id": 1065062,
              "name": "meat",
              "localizedName": "meat",
              "image": "whole-chicken.jpg"
            },
            {
              "id": 0,
              "name": "roll",
              "localizedName": "roll",
              "image": "dinner-yeast-rolls.jpg"
            }
          ],
          "equipment": [
            {
              "id": 406921,
              "name": "glass baking pan",
              "localizedName": "glass baking pan",
              "image": "glass-baking-tray.jpg"
            },
            {
              "id": 404765,
              "name": "aluminum foil",
              "localizedName": "aluminum foil",
              "image": "aluminum-foil.png"
            }
          ]
        },
        {
          "number": 6,
          "step": "Bake in the oven for 20 minutes.",
          "ingredients": [],
          "equipment": [
            {
              "id": 404784,
              "name": "oven",
              "localizedName": "oven",
              "image": "oven.jpg"
            }
          ],
          "length": {
            "number": 20,
            "unit": "minutes"
          }
        },
        {
          "number": 7,
          "step": "Remove foil and bake for an additional 10 minutes uncovered.",
          "ingredients": [],
          "equipment": [
            {
              "id": 404784,
              "name": "oven",
              "localizedName": "oven",
              "image": "oven.jpg"
            },
            {
              "id": 404765,
              "name": "aluminum foil",
              "localizedName": "aluminum foil",
              "image": "aluminum-foil.png"
            }
          ],
          "length": {
            "number": 10,
            "unit": "minutes"
          }
        },
        {
          "number": 8,
          "step": "Remove from the oven and allow to cool for 10 minutes before serving.",
          "ingredients": [],
          "equipment": [
            {
              "id": 404784,
              "name": "oven",
              "localizedName": "oven",
              "image": "oven.jpg"
            }
          ],
          "length": {
            "number": 10,
            "unit": "minutes"
          }
        }
      ]
    }
  ],
  "originalId": null,
  "spoonacularSourceUrl": "https://spoonacular.com/worlds-greatest-lasagna-roll-ups-715560"
},
{
  "vegetarian": true,
  "vegan": false,
  "glutenFree": true,
  "dairyFree": true,
  "veryHealthy": false,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "lowFodmap": false,
  "weightWatcherSmartPoints": 2,
  "gaps": "no",
  "preparationMinutes": -1,
  "cookingMinutes": -1,
  "aggregateLikes": 3,
  "healthScore": 32,
  "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
  "license": "CC BY 3.0",
  "sourceName": "Foodista",
  "pricePerServing": 158.37,
  "extendedIngredients": [
    {
      "id": 11135,
      "aisle": "Produce",
      "image": "cauliflower.jpg",
      "consistency": "SOLID",
      "name": "cauliflower",
      "nameClean": "cauliflower",
      "original": "1 medium Head Cauliflower (roughly chopped)",
      "originalName": "Cauliflower (roughly chopped)",
      "amount": 1.0,
      "unit": "medium Head",
      "meta": [
        "roughly chopped",
        "()"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "medium Head",
          "unitLong": "medium Head"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "medium Head",
          "unitLong": "medium Head"
        }
      }
    },
    {
      "id": 11246,
      "aisle": "Produce",
      "image": "leeks.jpg",
      "consistency": "SOLID",
      "name": "leeks",
      "nameClean": "leek",
      "original": "2 Leeks, White and Light Green Part Only (cut into half lengthwise)",
      "originalName": "Leeks, White and Light Green Part Only (cut into half lengthwise)",
      "amount": 2.0,
      "unit": "",
      "meta": [
        "light",
        "white",
        "green",
        "cut into half lengthwise)"
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 11215,
      "aisle": "Produce",
      "image": "garlic.png",
      "consistency": "SOLID",
      "name": "garlic",
      "nameClean": "garlic",
      "original": "6 Cloves Garlic",
      "originalName": "Garlic",
      "amount": 6.0,
      "unit": "Cloves",
      "meta": [],
      "measures": {
        "us": {
          "amount": 6.0,
          "unitShort": "Cloves",
          "unitLong": "Cloves"
        },
        "metric": {
          "amount": 6.0,
          "unitShort": "Cloves",
          "unitLong": "Cloves"
        }
      }
    },
    {
      "id": 4053,
      "aisle": "Oil, Vinegar, Salad Dressing",
      "image": "olive-oil.jpg",
      "consistency": "LIQUID",
      "name": "olive oil",
      "nameClean": "olive oil",
      "original": "2 tablespoons Olive Oil",
      "originalName": "Olive Oil",
      "amount": 2.0,
      "unit": "tablespoons",
      "meta": [],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        }
      }
    },
    {
      "id": 6194,
      "aisle": "Canned and Jarred",
      "image": "chicken-broth.png",
      "consistency": "LIQUID",
      "name": "chicken broth",
      "nameClean": "chicken broth",
      "original": "2 Cans Chicken Broth*",
      "originalName": "Chicken Broth",
      "amount": 2.0,
      "unit": "Cans",
      "meta": [],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "Cans",
          "unitLong": "Cans"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "Cans",
          "unitLong": "Cans"
        }
      }
    },
    {
      "id": 1082047,
      "aisle": "Spices and Seasonings",
      "image": "salt.jpg",
      "consistency": "SOLID",
      "name": "kosher salt",
      "nameClean": "kosher salt",
      "original": "Kosher Salt",
      "originalName": "Kosher Salt",
      "amount": 4.0,
      "unit": "servings",
      "meta": [],
      "measures": {
        "us": {
          "amount": 4.0,
          "unitShort": "servings",
          "unitLong": "servings"
        },
        "metric": {
          "amount": 4.0,
          "unitShort": "servings",
          "unitLong": "servings"
        }
      }
    },
    {
      "id": 1002030,
      "aisle": "Spices and Seasonings",
      "image": "pepper.jpg",
      "consistency": "SOLID",
      "name": "ground pepper",
      "nameClean": "black pepper",
      "original": "Fresh Ground Black Pepper",
      "originalName": "Fresh Ground Black Pepper",
      "amount": 4.0,
      "unit": "servings",
      "meta": [
        "fresh",
        "black"
      ],
      "measures": {
        "us": {
          "amount": 4.0,
          "unitShort": "servings",
          "unitLong": "servings"
        },
        "metric": {
          "amount": 4.0,
          "unitShort": "servings",
          "unitLong": "servings"
        }
      }
    }
  ],
  "id": 658536,
  "title": "Roasted Cauliflower and Leek Soup",
  "readyInMinutes": 45,
  "servings": 4,
  "sourceUrl": "https://www.foodista.com/recipe/C3QSZ5T7/roasted-cauliflower-and-leek-soup",
  "image": "https://spoonacular.com/recipeImages/658536-556x370.jpg",
  "imageType": "jpg",
  "summary": "Roasted Cauliflower and Leek Soup is a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> recipe with 4 servings. For <b>$1.58 per serving</b>, this recipe <b>covers 15%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains around <b>5g of protein</b>, <b>8g of fat</b>, and a total of <b>141 calories</b>. 3 people were impressed by this recipe. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is perfect for <b>Autumn</b>. It works well as a rather inexpensive hor d'oeuvre. A mixture of kosher salt, leeks, ground pepper, and a handful of other ingredients are all it takes to make this recipe so tasty. With a spoonacular <b>score of 82%</b>, this dish is amazing. Similar recipes are <a href=\"https://spoonacular.com/recipes/roasted-cauliflower-leek-soup-446327\">roasted cauliflower & leek soup</a>, <a href=\"https://spoonacular.com/recipes/roasted-cauliflower-and-leek-soup-39434\">Roasted Cauliflower And Leek Soup</a>, and <a href=\"https://spoonacular.com/recipes/roasted-cauliflower-and-leek-soup-795928\">Roasted Cauliflower and Leek Soup</a>.",
  "cuisines": [],
  "dishTypes": [
    "antipasti",
    "soup",
    "starter",
    "snack",
    "appetizer",
    "antipasto",
    "hor d'oeuvre"
  ],
  "diets": [
    "gluten free",
    "dairy free",
    "paleolithic",
    "lacto ovo vegetarian",
    "primal",
    "whole 30"
  ],
  "occasions": [
    "fall",
    "winter"
  ],
  "instructions": "Preheat oven to 425 degrees Farenheit.\nSpread chopped cauliflower, leeks and garlic on baking sheet.\nDrizzle olive oil on vegetables and mix well to thoroughly coat.  Sprinkle with kosher salt.\nRoast in oven for 40-45 minutes.  Vegetables should be brown on edges and slightly softened.\nPour roasted vegetables into a saucepan and add 2 cans of chicken broth and fresh ground pepper to taste.\nOver medium high heat, heat vegetables and  broth until it bubbles.\nUsing an immersion blender (stick blender), thoroughly puree all contents of the saucepan.  If you don't have an immersion blender, you can use a regular blender.  Just be careful putting hot liquids in a blender as they can cause the lid to come flying off sending your yummy soup all over your kitchen.  (You can vent the lid a little to help reduce the chance of this happening.)",
  "analyzedInstructions": [
    {
      "name": "",
      "steps": [
        {
          "number": 1,
          "step": "Preheat oven to 425 degrees Farenheit.",
          "ingredients": [],
          "equipment": [
            {
              "id": 404784,
              "name": "oven",
              "localizedName": "oven",
              "image": "oven.jpg"
            }
          ]
        },
        {
          "number": 2,
          "step": "Spread chopped cauliflower, leeks and garlic on baking sheet.",
          "ingredients": [
            {
              "id": 11135,
              "name": "cauliflower",
              "localizedName": "cauliflower",
              "image": "cauliflower.jpg"
            },
            {
              "id": 11215,
              "name": "garlic",
              "localizedName": "garlic",
              "image": "garlic.png"
            },
            {
              "id": 0,
              "name": "spread",
              "localizedName": "spread",
              "image": ""
            },
            {
              "id": 11246,
              "name": "leek",
              "localizedName": "leek",
              "image": "leeks.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404727,
              "name": "baking sheet",
              "localizedName": "baking sheet",
              "image": "baking-sheet.jpg"
            }
          ]
        },
        {
          "number": 3,
          "step": "Drizzle olive oil on vegetables and mix well to thoroughly coat.",
          "ingredients": [
            {
              "id": 11583,
              "name": "vegetable",
              "localizedName": "vegetable",
              "image": "mixed-vegetables.png"
            },
            {
              "id": 4053,
              "name": "olive oil",
              "localizedName": "olive oil",
              "image": "olive-oil.jpg"
            }
          ],
          "equipment": []
        },
        {
          "number": 4,
          "step": "Sprinkle with kosher salt.",
          "ingredients": [
            {
              "id": 1082047,
              "name": "kosher salt",
              "localizedName": "kosher salt",
              "image": "salt.jpg"
            }
          ],
          "equipment": []
        },
        {
          "number": 5,
          "step": "Roast in oven for 40-45 minutes.  Vegetables should be brown on edges and slightly softened.",
          "ingredients": [
            {
              "id": 11583,
              "name": "vegetable",
              "localizedName": "vegetable",
              "image": "mixed-vegetables.png"
            }
          ],
          "equipment": [
            {
              "id": 404784,
              "name": "oven",
              "localizedName": "oven",
              "image": "oven.jpg"
            }
          ],
          "length": {
            "number": 45,
            "unit": "minutes"
          }
        },
        {
          "number": 6,
          "step": "Pour roasted vegetables into a saucepan and add 2 cans of chicken broth and fresh ground pepper to taste.",
          "ingredients": [
            {
              "id": 6194,
              "name": "chicken broth",
              "localizedName": "chicken broth",
              "image": "chicken-broth.png"
            },
            {
              "id": 1002030,
              "name": "ground black pepper",
              "localizedName": "ground black pepper",
              "image": "pepper.jpg"
            },
            {
              "id": 11583,
              "name": "vegetable",
              "localizedName": "vegetable",
              "image": "mixed-vegetables.png"
            }
          ],
          "equipment": [
            {
              "id": 404669,
              "name": "sauce pan",
              "localizedName": "sauce pan",
              "image": "sauce-pan.jpg"
            }
          ]
        },
        {
          "number": 7,
          "step": "Over medium high heat, heat vegetables and  broth until it bubbles.",
          "ingredients": [
            {
              "id": 11583,
              "name": "vegetable",
              "localizedName": "vegetable",
              "image": "mixed-vegetables.png"
            },
            {
              "id": 1006615,
              "name": "broth",
              "localizedName": "broth",
              "image": "chicken-broth.png"
            }
          ],
          "equipment": []
        },
        {
          "number": 8,
          "step": "Using an immersion blender (stick blender), thoroughly puree all contents of the saucepan.  If you don't have an immersion blender, you can use a regular blender.  Just be careful putting hot liquids in a blender as they can cause the lid to come flying off sending your yummy soup all over your kitchen.  (You can vent the lid a little to help reduce the chance of this happening.)",
          "ingredients": [
            {
              "id": 0,
              "name": "soup",
              "localizedName": "soup",
              "image": ""
            }
          ],
          "equipment": [
            {
              "id": 404776,
              "name": "immersion blender",
              "localizedName": "immersion blender",
              "image": "immersion-blender.png"
            },
            {
              "id": 404669,
              "name": "sauce pan",
              "localizedName": "sauce pan",
              "image": "sauce-pan.jpg"
            },
            {
              "id": 404726,
              "name": "blender",
              "localizedName": "blender",
              "image": "blender.png"
            }
          ]
        }
      ]
    }
  ],
  "originalId": null,
  "spoonacularSourceUrl": "https://spoonacular.com/roasted-cauliflower-and-leek-soup-658536"
},
{
  "vegetarian": true,
  "vegan": true,
  "glutenFree": true,
  "dairyFree": true,
  "veryHealthy": false,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "lowFodmap": false,
  "weightWatcherSmartPoints": 3,
  "gaps": "no",
  "preparationMinutes": -1,
  "cookingMinutes": -1,
  "aggregateLikes": 4,
  "healthScore": 24,
  "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
  "license": "CC BY 3.0",
  "sourceName": "Foodista",
  "pricePerServing": 92.47,
  "extendedIngredients": [
    {
      "id": 1039037,
      "aisle": "Produce",
      "image": "avocado.jpg",
      "consistency": "SOLID",
      "name": "hass avocados",
      "nameClean": "hass avocado",
      "original": "2 hass avocados",
      "originalName": "hass avocados",
      "amount": 2.0,
      "unit": "",
      "meta": [],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 9176,
      "aisle": "Produce",
      "image": "mango.jpg",
      "consistency": "SOLID",
      "name": "mango",
      "nameClean": "mango",
      "original": "1 mango",
      "originalName": "mango",
      "amount": 1.0,
      "unit": "",
      "meta": [],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 10011282,
      "aisle": "Produce",
      "image": "red-onion.png",
      "consistency": "SOLID",
      "name": "onion",
      "nameClean": "red onion",
      "original": "1 medium red onion",
      "originalName": "red onion",
      "amount": 1.0,
      "unit": "medium",
      "meta": [
        "red"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "medium",
          "unitLong": "medium"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "medium",
          "unitLong": "medium"
        }
      }
    },
    {
      "id": 11977,
      "aisle": "Produce",
      "image": "serrano-pepper.jpg",
      "consistency": "SOLID",
      "name": "serrano chiles",
      "nameClean": "serrano pepper",
      "original": "2 serrano chiles",
      "originalName": "serrano chiles",
      "amount": 2.0,
      "unit": "",
      "meta": [],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 11215,
      "aisle": "Produce",
      "image": "garlic.png",
      "consistency": "SOLID",
      "name": "garlic",
      "nameClean": "garlic",
      "original": "1 clove fresh garlic",
      "originalName": "fresh garlic",
      "amount": 1.0,
      "unit": "clove",
      "meta": [
        "fresh"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "clove",
          "unitLong": "clove"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "clove",
          "unitLong": "clove"
        }
      }
    },
    {
      "id": 9160,
      "aisle": "Produce",
      "image": "lime-juice.png",
      "consistency": "LIQUID",
      "name": "juice of lime",
      "nameClean": "lime juice",
      "original": "2 limes (juice and zest)",
      "originalName": "limes (juice and zest)",
      "amount": 2.0,
      "unit": "",
      "meta": [
        "(juice and zest)"
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "",
          "unitLong": ""
        }
      }
    }
  ],
  "id": 650789,
  "title": "Mango Guacamole",
  "readyInMinutes": 45,
  "servings": 6,
  "sourceUrl": "https://www.foodista.com/recipe/N2747PV7/mango-guacamole",
  "image": "https://spoonacular.com/recipeImages/650789-556x370.jpg",
  "imageType": "jpg",
  "summary": "Mango Guacamole is a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> recipe with 6 servings. One serving contains <b>139 calories</b>, <b>2g of protein</b>, and <b>10g of fat</b>. For <b>92 cents per serving</b>, this recipe <b>covers 8%</b> of your daily requirements of vitamins and minerals. Not a lot of people really liked this hor d'oeuvre. This recipe is typical of Mexican cuisine. If you have juice of lime, mango, serrano chiles, and a few other ingredients on hand, you can make it. 4 people found this recipe to be delicious and satisfying. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 75%</b>. This score is good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/mango-guacamole-102429\">Mango Guacamole</a>, <a href=\"https://spoonacular.com/recipes/mango-guacamole-1472277\">Mango Guacamole</a>, and <a href=\"https://spoonacular.com/recipes/mango-guacamole-475975\">Mango Guacamole</a>.",
  "cuisines": [
    "Mexican"
  ],
  "dishTypes": [
    "antipasti",
    "condiment",
    "starter",
    "snack",
    "appetizer",
    "dip",
    "antipasto",
    "hor d'oeuvre",
    "spread"
  ],
  "diets": [
    "gluten free",
    "dairy free",
    "paleolithic",
    "lacto ovo vegetarian",
    "primal",
    "whole 30",
    "vegan"
  ],
  "occasions": [],
  "instructions": "Chop mango, onion, and garlic.\nSeed and chop chiles.\nChop avocados, and put into a bowl.\nZest limes and reserve zest on the side.\nRoll limes (to activate the juice).\nCut limes in half, and squeeze all of the juice into the bowl with the avocados.\nGive the bowl a good stir.\nCombine mango, onion, garlic and chiles into the avocado mixture.\nAdd the reserved lime zest, and stir everything together until the preferred consistency is reached.",
  "analyzedInstructions": [
    {
      "name": "",
      "steps": [
        {
          "number": 1,
          "step": "Chop mango, onion, and garlic.",
          "ingredients": [
            {
              "id": 11215,
              "name": "garlic",
              "localizedName": "garlic",
              "image": "garlic.png"
            },
            {
              "id": 9176,
              "name": "mango",
              "localizedName": "mango",
              "image": "mango.jpg"
            },
            {
              "id": 11282,
              "name": "onion",
              "localizedName": "onion",
              "image": "brown-onion.png"
            }
          ],
          "equipment": []
        },
        {
          "number": 2,
          "step": "Seed and chop chiles.",
          "ingredients": [
            {
              "id": 11819,
              "name": "chili pepper",
              "localizedName": "chili pepper",
              "image": "red-chili.jpg"
            }
          ],
          "equipment": []
        },
        {
          "number": 3,
          "step": "Chop avocados, and put into a bowl.",
          "ingredients": [
            {
              "id": 9037,
              "name": "avocado",
              "localizedName": "avocado",
              "image": "avocado.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404783,
              "name": "bowl",
              "localizedName": "bowl",
              "image": "bowl.jpg"
            }
          ]
        },
        {
          "number": 4,
          "step": "Zest limes and reserve zest on the side.",
          "ingredients": [
            {
              "id": 9159,
              "name": "lime",
              "localizedName": "lime",
              "image": "lime.jpg"
            }
          ],
          "equipment": []
        },
        {
          "number": 5,
          "step": "Roll limes (to activate the juice).",
          "ingredients": [
            {
              "id": 1019016,
              "name": "juice",
              "localizedName": "juice",
              "image": "apple-juice.jpg"
            },
            {
              "id": 9159,
              "name": "lime",
              "localizedName": "lime",
              "image": "lime.jpg"
            },
            {
              "id": 0,
              "name": "roll",
              "localizedName": "roll",
              "image": "dinner-yeast-rolls.jpg"
            }
          ],
          "equipment": []
        },
        {
          "number": 6,
          "step": "Cut limes in half, and squeeze all of the juice into the bowl with the avocados.",
          "ingredients": [
            {
              "id": 9037,
              "name": "avocado",
              "localizedName": "avocado",
              "image": "avocado.jpg"
            },
            {
              "id": 1019016,
              "name": "juice",
              "localizedName": "juice",
              "image": "apple-juice.jpg"
            },
            {
              "id": 9159,
              "name": "lime",
              "localizedName": "lime",
              "image": "lime.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404783,
              "name": "bowl",
              "localizedName": "bowl",
              "image": "bowl.jpg"
            }
          ]
        },
        {
          "number": 7,
          "step": "Give the bowl a good stir.",
          "ingredients": [],
          "equipment": [
            {
              "id": 404783,
              "name": "bowl",
              "localizedName": "bowl",
              "image": "bowl.jpg"
            }
          ]
        },
        {
          "number": 8,
          "step": "Combine mango, onion, garlic and chiles into the avocado mixture.",
          "ingredients": [
            {
              "id": 9037,
              "name": "avocado",
              "localizedName": "avocado",
              "image": "avocado.jpg"
            },
            {
              "id": 11819,
              "name": "chili pepper",
              "localizedName": "chili pepper",
              "image": "red-chili.jpg"
            },
            {
              "id": 11215,
              "name": "garlic",
              "localizedName": "garlic",
              "image": "garlic.png"
            },
            {
              "id": 9176,
              "name": "mango",
              "localizedName": "mango",
              "image": "mango.jpg"
            },
            {
              "id": 11282,
              "name": "onion",
              "localizedName": "onion",
              "image": "brown-onion.png"
            }
          ],
          "equipment": []
        },
        {
          "number": 9,
          "step": "Add the reserved lime zest, and stir everything together until the preferred consistency is reached.",
          "ingredients": [
            {
              "id": 1009159,
              "name": "lime zest",
              "localizedName": "lime zest",
              "image": "zest-lime.jpg"
            }
          ],
          "equipment": []
        }
      ]
    }
  ],
  "originalId": null,
  "spoonacularSourceUrl": "https://spoonacular.com/mango-guacamole-650789"
},
{
  "vegetarian": false,
  "vegan": false,
  "glutenFree": false,
  "dairyFree": true,
  "veryHealthy": false,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "lowFodmap": false,
  "weightWatcherSmartPoints": 15,
  "gaps": "no",
  "preparationMinutes": -1,
  "cookingMinutes": -1,
  "aggregateLikes": 2,
  "healthScore": 35,
  "creditsText": "foodista.com",
  "sourceName": "foodista.com",
  "pricePerServing": 271.36,
  "extendedIngredients": [
    {
      "id": 11124,
      "aisle": "Produce",
      "image": "sliced-carrot.png",
      "consistency": "SOLID",
      "name": "carrots",
      "nameClean": "carrot",
      "original": "•2 carrots, cut into thin pieces",
      "originalName": "carrots, cut into thin pieces",
      "amount": 2.0,
      "unit": "",
      "meta": [
        "cut into thin pieces"
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 5062,
      "aisle": "Meat",
      "image": "chicken-breasts.png",
      "consistency": "SOLID",
      "name": "chicken breasts",
      "nameClean": "chicken breast",
      "original": "2 lbs boneless chicken breasts, cut into strips",
      "originalName": "boneless chicken breasts, cut into strips",
      "amount": 2.0,
      "unit": "lbs",
      "meta": [
        "boneless",
        "cut into strips"
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "lb",
          "unitLong": "pounds"
        },
        "metric": {
          "amount": 907.185,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 2048,
      "aisle": "Oil, Vinegar, Salad Dressing",
      "image": "apple-cider-vinegar.jpg",
      "consistency": "LIQUID",
      "name": "cider vinegar",
      "nameClean": "apple cider vinegar",
      "original": "•3 tbsp cider vinegar",
      "originalName": "cider vinegar",
      "amount": 3.0,
      "unit": "tbsp",
      "meta": [],
      "measures": {
        "us": {
          "amount": 3.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        },
        "metric": {
          "amount": 3.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        }
      }
    },
    {
      "id": 20027,
      "aisle": "Baking",
      "image": "white-powder.jpg",
      "consistency": "SOLID",
      "name": "corn starch",
      "nameClean": "corn starch",
      "original": "•2 tbsp corn starch (+ 2 tbsp water mixed together)",
      "originalName": "corn starch (+ 2 tbsp water mixed together)",
      "amount": 2.0,
      "unit": "tbsp",
      "meta": [
        "mixed"
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        }
      }
    },
    {
      "id": 20027,
      "aisle": "Baking",
      "image": "white-powder.jpg",
      "consistency": "SOLID",
      "name": "cornstarch",
      "nameClean": "corn starch",
      "original": "•2 tbsp cornstarch",
      "originalName": "cornstarch",
      "amount": 2.0,
      "unit": "tbsp",
      "meta": [],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        }
      }
    },
    {
      "id": 99296,
      "aisle": "Health Foods",
      "image": "shelled-edamame.jpg",
      "consistency": "SOLID",
      "name": "edamame",
      "nameClean": "edamame",
      "original": "•1 cup edamame",
      "originalName": "edamame",
      "amount": 1.0,
      "unit": "cup",
      "meta": [],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "cup",
          "unitLong": "cup"
        },
        "metric": {
          "amount": 148.0,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 99296,
      "aisle": "Health Foods",
      "image": "edamame.png",
      "consistency": "SOLID",
      "name": "edamame",
      "nameClean": "edamame",
      "original": "•1 cup edamame",
      "originalName": "edamame",
      "amount": 1.0,
      "unit": "cup",
      "meta": [],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "cup",
          "unitLong": "cup"
        },
        "metric": {
          "amount": 148.0,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 1123,
      "aisle": "Milk, Eggs, Other Dairy",
      "image": "egg.png",
      "consistency": "SOLID",
      "name": "egg",
      "nameClean": "egg",
      "original": "•1 beaten egg",
      "originalName": "beaten egg",
      "amount": 1.0,
      "unit": "",
      "meta": [
        "beaten"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 20081,
      "aisle": "Baking",
      "image": "flour.png",
      "consistency": "SOLID",
      "name": "flour",
      "nameClean": "wheat flour",
      "original": "•½ cup flour",
      "originalName": "flour",
      "amount": 0.5,
      "unit": "cup",
      "meta": [],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 62.5,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 11282,
      "aisle": "Produce",
      "image": "brown-onion.png",
      "consistency": "SOLID",
      "name": "onion",
      "nameClean": "onion",
      "original": "•1 medium size onion, cut into strips",
      "originalName": "onion, cut into strips",
      "amount": 1.0,
      "unit": "medium size",
      "meta": [
        "cut into strips"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "medium size",
          "unitLong": "medium size"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "medium size",
          "unitLong": "medium size"
        }
      }
    },
    {
      "id": 9273,
      "aisle": "Beverages",
      "image": "pineapple-juice.jpg",
      "consistency": "LIQUID",
      "name": "pineapple juice",
      "nameClean": "pineapple juice",
      "original": "•1/4 cup pineapple juice (optional if available)",
      "originalName": "pineapple juice (optional if available)",
      "amount": 0.25,
      "unit": "cup",
      "meta": [
        "(optional if available)"
      ],
      "measures": {
        "us": {
          "amount": 0.25,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 59.0,
          "unitShort": "ml",
          "unitLong": "milliliters"
        }
      }
    },
    {
      "id": 16124,
      "aisle": "Condiments",
      "image": "soy-sauce.jpg",
      "consistency": "LIQUID",
      "name": "soy sauce",
      "nameClean": "soy sauce",
      "original": "•2 tbsp soy sauce",
      "originalName": "soy sauce",
      "amount": 2.0,
      "unit": "tbsp",
      "meta": [],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        }
      }
    },
    {
      "id": 19335,
      "aisle": "Baking",
      "image": "sugar-in-bowl.png",
      "consistency": "SOLID",
      "name": "sugar",
      "nameClean": "sugar",
      "original": "•3 tbsp sugar",
      "originalName": "sugar",
      "amount": 3.0,
      "unit": "tbsp",
      "meta": [],
      "measures": {
        "us": {
          "amount": 3.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        },
        "metric": {
          "amount": 3.0,
          "unitShort": "Tbsps",
          "unitLong": "Tbsps"
        }
      }
    },
    {
      "id": 4669,
      "aisle": "Oil, Vinegar, Salad Dressing",
      "image": "vegetable-oil.jpg",
      "consistency": "LIQUID",
      "name": "vegetable oil",
      "nameClean": "vegetable oil",
      "original": "Vegetable Oil",
      "originalName": "Vegetable Oil",
      "amount": 4.0,
      "unit": "servings",
      "meta": [],
      "measures": {
        "us": {
          "amount": 4.0,
          "unitShort": "servings",
          "unitLong": "servings"
        },
        "metric": {
          "amount": 4.0,
          "unitShort": "servings",
          "unitLong": "servings"
        }
      }
    },
    {
      "id": 14412,
      "aisle": "Beverages",
      "image": "water.png",
      "consistency": "LIQUID",
      "name": "water",
      "nameClean": "water",
      "original": "•1 cup of water",
      "originalName": "of water",
      "amount": 1.0,
      "unit": "cup",
      "meta": [],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "cup",
          "unitLong": "cup"
        },
        "metric": {
          "amount": 236.588,
          "unitShort": "ml",
          "unitLong": "milliliters"
        }
      }
    }
  ],
  "id": 638369,
  "title": "Korean Sweet n Sour Chicken",
  "readyInMinutes": 30,
  "servings": 4,
  "sourceUrl": "http://www.foodista.com/recipe/6458DTC4/chicken-tangsuyuk-sweet-n-sour-chicken",
  "image": "https://spoonacular.com/recipeImages/638369-556x370.jpg",
  "imageType": "jpg",
  "summary": "Korean Sweet n Sour Chicken requires roughly <b>30 minutes</b> from start to finish. One serving contains <b>604 calories</b>, <b>56g of protein</b>, and <b>22g of fat</b>. This recipe serves 4 and costs $2.71 per serving. A mixture of sugar, soy sauce, cider vinegar, and a handful of other ingredients are all it takes to make this recipe so flavorful. This recipe from Foodista has 2 fans. This recipe is typical of Chinese cuisine. It works well as a main course. It is a good option if you're following a <b>dairy free</b> diet. With a spoonacular <b>score of 78%</b>, this dish is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/korean-sweet-n-sour-chicken-1229083\">Korean Sweet n Sour Chicken</a>, <a href=\"https://spoonacular.com/recipes/korean-cabbage-wraps-with-sweet-and-sour-cucumber-salad-301159\">Korean Cabbage Wraps with Sweet-and-Sour Cucumber Salad</a>, and <a href=\"https://spoonacular.com/recipes/grilled-korean-bbq-short-rib-dogs-with-sweet-peach-relish-spicy-korean-slaw-549399\">Grilled Korean BBQ Short Rib Dogs with Sweet Peach Relish + Spicy Korean Slaw</a>.",
  "cuisines": [
    "Chinese",
    "Asian"
  ],
  "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
  ],
  "diets": [
    "dairy free"
  ],
  "occasions": [],
  "instructions": "<ol><li>Cut the chicken into thin strips, about 1 or 2-inch pieces. Add soy sauce to the chicken for a short marination; mix well and set aside.</li><li>Cut the vegetables into large bite-sized pieces. Set aside until the sauce is ready and thickened.</li><li>Make batter by mixing the flour, cornstarch, water and beaten egg. Add more flour until a thick consistency is reached. Dip the marinated chicken strips into the batter.</li><li>Bring vegetable oil to medium high heat. Deep fry each of the strips for about 3, 4 min for each batch or until browned and cooked through. When finished, place on paper towel-lined dish to remove excess oil. Once the first round of frying is done, heat the oil and re-fry the batch for the 2nd time to make it really crispy (optional).</li><li>To make the sauce bring the following ingredients in a saucepan: one cup of water along 3 tbsp vinegar, 3 tbsp sugar, and 2 tbsp of soy sauce. Bring to a rapid boil and then add the mixture of cornstarch and water. Add desired vegetables and let simmer for about 5 minutes or until it thickens.</li><li>On a large plate, add the fried chicken strips, then pour over the sauce/vegetable mixture and serve while warm.</li></ol>",
  "analyzedInstructions": [
    {
      "name": "",
      "steps": [
        {
          "number": 1,
          "step": "Cut the chicken into thin strips, about 1 or 2-inch pieces.",
          "ingredients": [
            {
              "id": 5006,
              "name": "whole chicken",
              "localizedName": "whole chicken",
              "image": "whole-chicken.jpg"
            }
          ],
          "equipment": []
        },
        {
          "number": 2,
          "step": "Add soy sauce to the chicken for a short marination; mix well and set aside.",
          "ingredients": [
            {
              "id": 16124,
              "name": "soy sauce",
              "localizedName": "soy sauce",
              "image": "soy-sauce.jpg"
            },
            {
              "id": 5006,
              "name": "whole chicken",
              "localizedName": "whole chicken",
              "image": "whole-chicken.jpg"
            }
          ],
          "equipment": []
        },
        {
          "number": 3,
          "step": "Cut the vegetables into large bite-sized pieces. Set aside until the sauce is ready and thickened.Make batter by mixing the flour, cornstarch, water and beaten egg.",
          "ingredients": [
            {
              "id": 20027,
              "name": "corn starch",
              "localizedName": "corn starch",
              "image": "white-powder.jpg"
            },
            {
              "id": 11583,
              "name": "vegetable",
              "localizedName": "vegetable",
              "image": "mixed-vegetables.png"
            },
            {
              "id": 20081,
              "name": "all purpose flour",
              "localizedName": "all purpose flour",
              "image": "flour.png"
            },
            {
              "id": 0,
              "name": "sauce",
              "localizedName": "sauce",
              "image": ""
            },
            {
              "id": 14412,
              "name": "water",
              "localizedName": "water",
              "image": "water.png"
            },
            {
              "id": 1123,
              "name": "egg",
              "localizedName": "egg",
              "image": "egg.png"
            }
          ],
          "equipment": []
        },
        {
          "number": 4,
          "step": "Add more flour until a thick consistency is reached. Dip the marinated chicken strips into the batter.Bring vegetable oil to medium high heat. Deep fry each of the strips for about 3, 4 min for each batch or until browned and cooked through. When finished, place on paper towel-lined dish to remove excess oil. Once the first round of frying is done, heat the oil and re-fry the batch for the 2nd time to make it really crispy (optional).To make the sauce bring the following ingredients in a saucepan: one cup of water along 3 tbsp vinegar, 3 tbsp sugar, and 2 tbsp of soy sauce. Bring to a rapid boil and then add the mixture of cornstarch and water.",
          "ingredients": [
            {
              "id": 1015062,
              "name": "chicken tenders",
              "localizedName": "chicken tenders",
              "image": "chicken-tenders-or-fingers.png"
            },
            {
              "id": 4669,
              "name": "vegetable oil",
              "localizedName": "vegetable oil",
              "image": "vegetable-oil.jpg"
            },
            {
              "id": 20027,
              "name": "corn starch",
              "localizedName": "corn starch",
              "image": "white-powder.jpg"
            },
            {
              "id": 16124,
              "name": "soy sauce",
              "localizedName": "soy sauce",
              "image": "soy-sauce.jpg"
            },
            {
              "id": 2053,
              "name": "vinegar",
              "localizedName": "vinegar",
              "image": "vinegar-(white).jpg"
            },
            {
              "id": 20081,
              "name": "all purpose flour",
              "localizedName": "all purpose flour",
              "image": "flour.png"
            },
            {
              "id": 0,
              "name": "sauce",
              "localizedName": "sauce",
              "image": ""
            },
            {
              "id": 19335,
              "name": "sugar",
              "localizedName": "sugar",
              "image": "sugar-in-bowl.png"
            },
            {
              "id": 14412,
              "name": "water",
              "localizedName": "water",
              "image": "water.png"
            },
            {
              "id": 0,
              "name": "dip",
              "localizedName": "dip",
              "image": ""
            },
            {
              "id": 4582,
              "name": "cooking oil",
              "localizedName": "cooking oil",
              "image": "vegetable-oil.jpg"
            }
          ],
          "equipment": [
            {
              "id": 405895,
              "name": "paper towels",
              "localizedName": "paper towels",
              "image": "paper-towels.jpg"
            },
            {
              "id": 404669,
              "name": "sauce pan",
              "localizedName": "sauce pan",
              "image": "sauce-pan.jpg"
            }
          ],
          "length": {
            "number": 4,
            "unit": "minutes"
          }
        },
        {
          "number": 5,
          "step": "Add desired vegetables and let simmer for about 5 minutes or until it thickens.On a large plate, add the fried chicken strips, then pour over the sauce/vegetable mixture and serve while warm.",
          "ingredients": [
            {
              "id": 1015062,
              "name": "chicken tenders",
              "localizedName": "chicken tenders",
              "image": "chicken-tenders-or-fingers.png"
            },
            {
              "id": 11583,
              "name": "vegetable",
              "localizedName": "vegetable",
              "image": "mixed-vegetables.png"
            },
            {
              "id": 0,
              "name": "sauce",
              "localizedName": "sauce",
              "image": ""
            }
          ],
          "equipment": [],
          "length": {
            "number": 5,
            "unit": "minutes"
          }
        }
      ]
    }
  ],
  "originalId": null,
  "spoonacularSourceUrl": "https://spoonacular.com/korean-sweet-n-sour-chicken-638369"
},
{
  "vegetarian": true,
  "vegan": false,
  "glutenFree": true,
  "dairyFree": false,
  "veryHealthy": false,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "lowFodmap": false,
  "weightWatcherSmartPoints": 19,
  "gaps": "no",
  "preparationMinutes": -1,
  "cookingMinutes": -1,
  "aggregateLikes": 32,
  "healthScore": 2,
  "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
  "license": "CC BY 3.0",
  "sourceName": "Foodista",
  "pricePerServing": 126.95,
  "extendedIngredients": [
    {
      "id": 12061,
      "aisle": "Nuts",
      "image": "almonds.jpg",
      "consistency": "SOLID",
      "name": "almond cookies",
      "nameClean": "almonds",
      "original": "150 grams Almond cookies, crumbed",
      "originalName": "Almond cookies, crumbed",
      "amount": 150.0,
      "unit": "grams",
      "meta": [],
      "measures": {
        "us": {
          "amount": 5.291,
          "unitShort": "oz",
          "unitLong": "ounces"
        },
        "metric": {
          "amount": 150.0,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 20027,
      "aisle": "Baking",
      "image": "white-powder.jpg",
      "consistency": "SOLID",
      "name": "cornstarch",
      "nameClean": "corn starch",
      "original": "1 tablespoon Cornstarch",
      "originalName": "Cornstarch",
      "amount": 1.0,
      "unit": "tablespoon",
      "meta": [],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "Tbsp",
          "unitLong": "Tbsp"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "Tbsp",
          "unitLong": "Tbsp"
        }
      }
    },
    {
      "id": 1017,
      "aisle": "Cheese",
      "image": "cream-cheese.jpg",
      "consistency": "SOLID",
      "name": "philiadelphia balance cream cheese",
      "nameClean": "cream cheese",
      "original": "450 grams Philiadelphia 13% balance cream cheese",
      "originalName": "Philiadelphia 13% balance cream cheese",
      "amount": 450.0,
      "unit": "grams",
      "meta": [
        "13%"
      ],
      "measures": {
        "us": {
          "amount": 15.873,
          "unitShort": "oz",
          "unitLong": "ounces"
        },
        "metric": {
          "amount": 450.0,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 98861,
      "aisle": "Baking",
      "image": "dulce-de-leche.png",
      "consistency": "SOLID",
      "name": "dulce de leche",
      "nameClean": "dulce de leche",
      "original": "240 ml Dulce de leche",
      "originalName": "Dulce de leche",
      "amount": 240.0,
      "unit": "ml",
      "meta": [],
      "measures": {
        "us": {
          "amount": 1.014,
          "unitShort": "cups",
          "unitLong": "cup"
        },
        "metric": {
          "amount": 240.0,
          "unitShort": "ml",
          "unitLong": "milliliters"
        }
      }
    },
    {
      "id": 1123,
      "aisle": "Milk, Eggs, Other Dairy",
      "image": "egg.png",
      "consistency": "SOLID",
      "name": "eggs",
      "nameClean": "egg",
      "original": "2 Eggs",
      "originalName": "Eggs",
      "amount": 2.0,
      "unit": "",
      "meta": [],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 9152,
      "aisle": "Produce",
      "image": "lemon-juice.jpg",
      "consistency": "LIQUID",
      "name": "juice of lemon",
      "nameClean": "lemon juice",
      "original": "Juice and zest of 1 lemon",
      "originalName": "Juice and zest of lemon",
      "amount": 1.0,
      "unit": "",
      "meta": [],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 2047,
      "aisle": "Spices and Seasonings",
      "image": "salt.jpg",
      "consistency": "SOLID",
      "name": "salt",
      "nameClean": "table salt",
      "original": "Pinch of salt",
      "originalName": "Pinch of salt",
      "amount": 1.0,
      "unit": "pinch",
      "meta": [],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "pinch",
          "unitLong": "pinch"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "pinch",
          "unitLong": "pinch"
        }
      }
    },
    {
      "id": 19335,
      "aisle": "Baking",
      "image": "sugar-in-bowl.png",
      "consistency": "SOLID",
      "name": "sugar",
      "nameClean": "sugar",
      "original": "1/2 cup organic sugar",
      "originalName": "organic sugar",
      "amount": 0.5,
      "unit": "cup",
      "meta": [
        "organic"
      ],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 100.0,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 1145,
      "aisle": "Milk, Eggs, Other Dairy",
      "image": "butter-sliced.jpg",
      "consistency": "SOLID",
      "name": "butter",
      "nameClean": "unsalted butter",
      "original": "1 1/2 sticks cold butter cut into small pieces (if you use unsalted butter add a little 2 cups organic flour1/2 cup organic sugar1 teaspoon vanilla",
      "originalName": "cold butter cut into small pieces (if you use unsalted butter add a little 2 cups organic flour1/2 cup organic sugar1 teaspoon vanilla",
      "amount": 1.5,
      "unit": "sticks",
      "meta": [
        "unsalted",
        "organic",
        "cold",
        "cut into small pieces (if you use  butter add a little 2 cups  flour1/2 cup  sugar1 teaspoon vanilla"
      ],
      "measures": {
        "us": {
          "amount": 1.5,
          "unitShort": "sticks",
          "unitLong": "sticks"
        },
        "metric": {
          "amount": 1.5,
          "unitShort": "sticks",
          "unitLong": "sticks"
        }
      }
    },
    {
      "id": 1116,
      "aisle": "Milk, Eggs, Other Dairy",
      "image": "plain-yogurt.jpg",
      "consistency": "SOLID",
      "name": "yogurt",
      "nameClean": "yogurt",
      "original": "150 grams 3. 5% yogurt",
      "originalName": "3. 5% yogurt",
      "amount": 150.0,
      "unit": "grams",
      "meta": [
        "5%"
      ],
      "measures": {
        "us": {
          "amount": 5.291,
          "unitShort": "oz",
          "unitLong": "ounces"
        },
        "metric": {
          "amount": 150.0,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    }
  ],
  "id": 641730,
  "title": "Dulce De Leche Cheesecake",
  "readyInMinutes": 45,
  "servings": 10,
  "sourceUrl": "http://www.foodista.com/recipe/5LN8R7Z4/dulce-de-leche-cheesecake",
  "image": "https://spoonacular.com/recipeImages/641730-556x370.jpg",
  "imageType": "jpg",
  "summary": "If you have about <b>45 minutes</b> to spend in the kitchen, Dulce De Leche Cheesecake might be a super <b>gluten free and lacto ovo vegetarian</b> recipe to try. One serving contains <b>430 calories</b>, <b>8g of protein</b>, and <b>38g of fat</b>. This recipe serves 10. For <b>$1.27 per serving</b>, this recipe <b>covers 9%</b> of your daily requirements of vitamins and minerals. A few people made this recipe, and 32 would say it hit the spot. If you have almond cookies, eggs, philiadelphia balance cream cheese, and a few other ingredients on hand, you can make it. It works well as a dessert. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 31%</b>, which is not so great. Similar recipes are <a href=\"https://spoonacular.com/recipes/russian-dulce-de-leche-waffle-cake-and-instant-pot-dulce-de-leche-1062236\">Russian Dulce De Leche Waffle Cake and Instant Pot Dulce De Leche</a>, <a href=\"https://spoonacular.com/recipes/dulce-de-leche-cheesecake-61816\">Dulce De Leche Cheesecake</a>, and <a href=\"https://spoonacular.com/recipes/dulce-de-leche-cheesecake-62261\">Dulce de Leche Cheesecake</a>.",
  "cuisines": [],
  "dishTypes": [
    "dessert"
  ],
  "diets": [
    "gluten free",
    "lacto ovo vegetarian"
  ],
  "occasions": [],
  "instructions": "<ol><li>Toss the cookie crumbs into the melted butter in a mixing bowl. Reserve 1 tablespoon of the mixture for the topping. Press the rest of the mixture onto the bottom and up 3cm high of a greased 24cm spring form pan. Chill until its ready for use.</li><li>Using electric mixer beat balance cream cheese and sugar in a large mixing bowl until smooth. Add yogurt and eggs, beating until just blended. Stir in cornstarch, dulce de leche, lemon juice and zest until blended.</li><li>Pour the mixture into the crust and sprinkle the top with reserved cookie crumbs. Steamed bake the cheesecake at 165C/330F for 65 minutes until almost set. Turn oven off. Leave the cake with the oven door ajar for 1 hour. Cool completely and chill at least 4 hours or overnight until firm.</li></ol>",
  "analyzedInstructions": [
    {
      "name": "",
      "steps": [
        {
          "number": 1,
          "step": "Toss the cookie crumbs into the melted butter in a mixing bowl. Reserve 1 tablespoon of the mixture for the topping. Press the rest of the mixture onto the bottom and up 3cm high of a greased 24cm spring form pan. Chill until its ready for use.Using electric mixer beat balance cream cheese and sugar in a large mixing bowl until smooth.",
          "ingredients": [
            {
              "id": 10018192,
              "name": "cookie crumbs",
              "localizedName": "cookie crumbs",
              "image": ""
            },
            {
              "id": 1017,
              "name": "cream cheese",
              "localizedName": "cream cheese",
              "image": "cream-cheese.jpg"
            },
            {
              "id": 1001,
              "name": "butter",
              "localizedName": "butter",
              "image": "butter-sliced.jpg"
            },
            {
              "id": 19335,
              "name": "sugar",
              "localizedName": "sugar",
              "image": "sugar-in-bowl.png"
            }
          ],
          "equipment": [
            {
              "id": 404628,
              "name": "hand mixer",
              "localizedName": "hand mixer",
              "image": "hand-mixer.png"
            },
            {
              "id": 405907,
              "name": "mixing bowl",
              "localizedName": "mixing bowl",
              "image": "mixing-bowl.jpg"
            },
            {
              "id": 404645,
              "name": "frying pan",
              "localizedName": "frying pan",
              "image": "pan.png"
            }
          ]
        },
        {
          "number": 2,
          "step": "Add yogurt and eggs, beating until just blended. Stir in cornstarch, dulce de leche, lemon juice and zest until blended.",
          "ingredients": [
            {
              "id": 98861,
              "name": "dulce de leche",
              "localizedName": "dulce de leche",
              "image": "dulce-de-leche.png"
            },
            {
              "id": 9152,
              "name": "lemon juice",
              "localizedName": "lemon juice",
              "image": "lemon-juice.jpg"
            },
            {
              "id": 20027,
              "name": "corn starch",
              "localizedName": "corn starch",
              "image": "white-powder.jpg"
            },
            {
              "id": 1116,
              "name": "yogurt",
              "localizedName": "yogurt",
              "image": "plain-yogurt.jpg"
            },
            {
              "id": 1123,
              "name": "egg",
              "localizedName": "egg",
              "image": "egg.png"
            }
          ],
          "equipment": []
        },
        {
          "number": 3,
          "step": "Pour the mixture into the crust and sprinkle the top with reserved cookie crumbs. Steamed bake the cheesecake at 165C/330F for 65 minutes until almost set. Turn oven off. Leave the cake with the oven door ajar for 1 hour. Cool completely and chill at least 4 hours or overnight until firm.",
          "ingredients": [
            {
              "id": 10018192,
              "name": "cookie crumbs",
              "localizedName": "cookie crumbs",
              "image": ""
            },
            {
              "id": 0,
              "name": "crust",
              "localizedName": "crust",
              "image": ""
            }
          ],
          "equipment": [
            {
              "id": 404784,
              "name": "oven",
              "localizedName": "oven",
              "image": "oven.jpg",
              "temperature": {
                "number": 165.0,
                "unit": "Celsius"
              }
            }
          ],
          "length": {
            "number": 365,
            "unit": "minutes"
          }
        }
      ]
    }
  ],
  "originalId": null,
  "spoonacularSourceUrl": "https://spoonacular.com/dulce-de-leche-cheesecake-641730"
}
]

export default recipes;