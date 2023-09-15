import { StyleSheet, TouchableOpacity, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Picture from "./Picture";
import { RecipeInformation } from "../types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAsyncStorageData } from "../AsyncStorageDataContext";

const RecipeCard = ({
  recipe,
  index,
  navigation,
}: {
  recipe: RecipeInformation;
  index: number;
  navigation: any;
}) => {
  const { updateStoredRecipes } = useAsyncStorageData();

  const storeData = async () => {
    try {
      recipe.saved = true;
      const jsonValue = JSON.stringify(recipe);
      await AsyncStorage.setItem(recipe.id.toString(), jsonValue);
      updateStoredRecipes();
    } catch (e) {
      console.error(e);
    }
  };

  const removeFromStoredData = async () => {
    try {
      recipe.saved = false;
      await AsyncStorage.removeItem(recipe.id.toString());
      updateStoredRecipes();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <TouchableOpacity
      key={recipe.id || index}
      style={[styles.featuredRecipeItem, { marginTop: 16 }]}
      onPress={() => {
        navigation.navigate("Recipe", { recipeInformation: recipe });
      }}
    >
      {recipe.image && (
        <Picture
          src={recipe.image}
          height={200}
          resizeMode="cover"
          borderRadius={16 / 2}
        />
      )}
      <Text
        style={[
          styles.text,
          {
            fontSize: 16 * 1.5,
            fontFamily: "figtree-medium",
            marginTop: 16,
          },
        ]}
      >
        {recipe.title}
      </Text>
      <Text
        style={[
          styles.text,
          { fontFamily: "figtree-medium", fontSize: 16, marginTop: 8 },
        ]}
      >
        {recipe.sourceName}
      </Text>
      <Text style={[styles.text, { fontSize: 16, marginTop: 8 }]}>
        Serves {recipe.servings}, ready in {recipe.readyInMinutes} minutes
      </Text>
      <TouchableOpacity
        onPress={() => {
          recipe.saved ? removeFromStoredData() : storeData();
        }}
        style={{
          position: "absolute",
          bottom: 16,
          right: 16,
          borderRadius: 16 / 2,
          padding: 16 / 2,
        }}
      >
        <MaterialCommunityIcons
          name={recipe.saved ? "bookmark" : "bookmark-outline"}
          size={16 * 1.5}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: "figtree-regular",
  },
  featuredRecipeItem: {
    backgroundColor: "#F4DF46",
    padding: 16 * 1.5,
    borderRadius: 16,
  },
});
