import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RecipeInformation } from "./types"; // Replace with your types

interface AsyncStorageDataContextType {
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

  const updateStoredRecipes = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const savedData = await Promise.all(
        keys.map(async (key) => {
          const jsonValue = await AsyncStorage.getItem(key);
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        })
      );

      const filteredData = savedData.filter((data) => data !== null);
      setStoredRecipes(filteredData);
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
    updateStoredRecipes();
  }, []);

  return (
    <AsyncStorageDataContext.Provider
      value={{ storedRecipes, updateStoredRecipes, clearAllStoredData }}
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
