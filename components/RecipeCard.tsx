import { StyleSheet, TouchableOpacity, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Picture from "./Picture";
import { RecipeInformation } from "../types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RecipeCard = ({
  recipe,
  index,
  navigation,
}: {
  recipe: RecipeInformation;
  index: number;
  navigation: any;
}) => {
  const storeData = async () => {
    try {
      recipe.saved = true;
      const jsonValue = JSON.stringify(recipe);
      await AsyncStorage.setItem(recipe.id.toString(), jsonValue);
    } catch (e) {
      console.error(e);
    }
  };

  const removeFromStoredData = async () => {
    try {
      await AsyncStorage.removeItem(recipe.id.toString());
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
            marginTop: 16 / 2,
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
  container: {
    flex: 1,
    width: "100%",
  },
  text: {
    fontSize: 16,
    fontFamily: "figtree-regular",
  },
  titleText: {
    fontSize: 16 * 2.75,
    fontFamily: "limelight-regular",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  exploreRecipes: {
    backgroundColor: "#FB6107",
  },
  searchRecipe: {
    backgroundColor: "#598019",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16 * 0.75,
    display: "flex",
    flexDirection: "row",
    gap: 16 / 2,
    alignItems: "center",
  },
  searchRecipeInput: {
    flex: 1,
    backgroundColor: "#D2D2D2",
    color: "#000",
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 16 / 2,
    padding: 16,
    height: 16 * 3.25 - 1, // account for border width
  },
  featuredRecipes: {
    padding: 16 * 1.5,
  },
  featuredRecipeItem: {
    backgroundColor: "#F4DF46",
    padding: 16,
    borderRadius: 16,
  },
});
