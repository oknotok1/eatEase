import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RecipeInformation } from "./types"; // Replace with your types
import axios from "axios";
import recipes from "./data/recipes";

interface AsyncStorageDataContextType {
  featuredRecipes: RecipeInformation[];
  storedRecipes: RecipeInformation[];
  updateStoredRecipes: () => void;
  clearAllStoredData: () => void;
}

interface AsyncStorageDataProviderProps {
  children: ReactNode;
}

const AsyncStorageDataContext = createContext<
  AsyncStorageDataContextType | undefined
>(undefined);

export const AsyncStorageDataProvider: React.FC<
  AsyncStorageDataProviderProps
> = ({ children }) => {
  const [storedRecipes, setStoredRecipes] = useState<RecipeInformation[]>([]);
  const [featuredRecipes, setFeaturedRecipes] = useState<RecipeInformation[]>(
    []
  );

  const getRandomRecipe = () => {
    axios
      .get("https://api.spoonacular.com/recipes/random?number=8", {
        params: {
          // apiKey: "c2fac6ab9ee34f06a3c19558516ee1f4",
          // TO UNCOMMENT AFTER TESTING IS COMEPLETE
        },
      })
      .then((response) => {
        setFeaturedRecipes(response.data.recipes);
      })
      .catch(() => {
        setFeaturedRecipes(recipes); // Fallback to local data if API call fails
      });
  };

  const updateStoredRecipes = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const savedData = await Promise.all(
        keys.map(async (key: string) => {
          const jsonValue = await AsyncStorage.getItem(key);
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        })
      );

      const filteredData = savedData.filter((data) => data !== null);
      setStoredRecipes(filteredData);

      // update the featured recipes to show the saved status
      const updatedFeaturedRecipes = featuredRecipes.map((recipe) => {
        const savedRecipe = filteredData.find(
          (savedRecipe: RecipeInformation) => savedRecipe.id === recipe.id
        );
        recipe.saved = savedRecipe;
        return recipe;
      });
      setFeaturedRecipes(updatedFeaturedRecipes);
    } catch (error) {
      console.error("Error retrieving saved data:", error);
    }
  };

  const clearAllStoredData = async () => {
    try {
      await AsyncStorage.clear();
      setStoredRecipes([]);
      console.log("All data cleared from AsyncStorage.");
    } catch (error) {
      console.error("Error clearing data from AsyncStorage:", error);
    }
  };

  useEffect(() => {
    getRandomRecipe();
    updateStoredRecipes();
  }, []);

  return (
    <AsyncStorageDataContext.Provider
      value={{
        featuredRecipes,
        storedRecipes,
        updateStoredRecipes,
        clearAllStoredData,
      }}
    >
      {children}
    </AsyncStorageDataContext.Provider>
  );
};

export const useAsyncStorageData = (): AsyncStorageDataContextType => {
  const context = useContext(AsyncStorageDataContext);
  if (!context) {
    throw new Error(
      "useAsyncStorageData must be used within an AsyncStorageDataProvider"
    );
  }
  return context;
};
