import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import Recipe from "./Recipe";
import Button from "./Button";
import Picture from "./Picture";
import recipes from "../data/recipes";
import { RecipeInformation } from "../types";

const Stack = createStackNavigator();

const ExploreRecipes = ({ navigation }: { navigation: any }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [featuredRecipes, setFeaturedRecipes] = useState<RecipeInformation[]>(
    []
  );

  const getRandomRecipe = () => {
    axios
      .get("https://api.spoonacular.com/recipes/random?number=8", {
        params: {
          apiKey: "c2fac6ab9ee34f06a3c19558516ee1f4",
        },
      })
      .then((response) => {
        setFeaturedRecipes(response.data.recipes);
      })
      .catch(() => {
        setFeaturedRecipes(recipes); // Fallback to local data if API call fails
      });
  };

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      // Show an alert or error message if the search query is empty
      Alert.alert("Empty Search", "Please enter a search query.");
    } else {
      console.log("API call with search query:", searchQuery);
    }
  };

  useEffect(() => {
    getRandomRecipe();
  }, []);

  if (featuredRecipes.length === 0) {
    return (
      <View
        style={[
          styles.exploreRecipes,
          styles.container,
          { display: "flex", justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text
          style={[
            styles.titleText,
            {
              fontSize: 32,
              fontWeight: "bold",
              textAlign: "center",
            },
          ]}
        >
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.exploreRecipes, styles.container]}>
      <View style={styles.searchRecipe}>
        <TextInput
          placeholder="Search by Ingredients"
          style={[styles.searchRecipeInput, styles.text]}
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
        <Button
          onPress={handleSearch}
          text="Search"
          disabled={searchQuery.trim() === ""}
        />
      </View>
      <ScrollView>
        <View style={styles.featuredRecipes}>
          <Text style={styles.titleText}>Featured Recipes</Text>
          {featuredRecipes.map((recipe: RecipeInformation, index) => (
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
                Serves {recipe.servings}, ready in {recipe.readyInMinutes}{" "}
                minutes
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Recipes">
      <Stack.Screen
        name="Recipes"
        component={ExploreRecipes}
        initialParams={{
          recipes: recipes,
        }}
      />
      <Stack.Screen
        name="Recipe"
        component={Recipe}
        initialParams={{ recipeInformation: recipes[0] }}
      />
    </Stack.Navigator>
  );
}

export default function Recipes() {
  return <MyStack />;
}

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
