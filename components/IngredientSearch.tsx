import React, { useState } from "react";
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
import Button from "./Button";
import { RecipeByIngredients } from "../types";

import Picture from "./Picture";
import IngredientSearchRecipe from "./IngredientSearchRecipe";

const Stack = createStackNavigator();

const SearchPage = ({ navigation }: { navigation: any }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<RecipeByIngredients[]>([]);

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      Alert.alert("Empty Search", "Please enter a search query.");
    } else {
      setIsLoading(true);

      axios
        .get("https://api.spoonacular.com//recipes/findByIngredients", {
          params: {
            apiKey: "c2fac6ab9ee34f06a3c19558516ee1f4",
            ingredients: query,
          },
        })
        .then((response) => {
          setSearchResults(response.data);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <View style={[styles.searchByIngredients, styles.container]}>
      <ScrollView>
        <View style={styles.searchRecipe}>
          <Text style={styles.titleText}>Search By Ingredients</Text>
          <Text style={styles.text}>
            How it works: Enter the ingredients you have in your kitchen and we
            will find recipes that use those ingredients.
          </Text>
          <Text style={styles.text}>
            Simply list the ingredients in the search bar below, separated by
            commas, without spaces.
          </Text>
          <Text style={styles.text}>Example: "apple,flour,sugar,eggs"</Text>
          <View style={styles.searchField}>
            <TextInput
              placeholder="Search by Ingredients"
              style={[styles.searchRecipeInput, styles.text]}
              onChangeText={(text) => setSearchQuery(text)}
              value={searchQuery}
            />
            <Button
              onPress={handleSearch}
              text="Search"
              disabled={!searchQuery.trim()}
            />
          </View>
        </View>

        {isLoading && (
          <View
            style={[
              styles.container,
              {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <Text
              style={[
                styles.titleText,
                {
                  fontSize: 32,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: 16 * 2,
                },
              ]}
            >
              Loading...
            </Text>
          </View>
        )}

        <View style={styles.results}>
          {searchResults.map((results: RecipeByIngredients, index) => (
            <FindByIngredientCard
              index={index}
              recipe={results}
              navigation={navigation}
              key={index}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const FindByIngredientCard = ({
  recipe,
  navigation,
  index,
}: {
  index: number;
  recipe: RecipeByIngredients;
  navigation: any;
}) => {
  const handlePress = (recipeId: number) => {
    axios
      .get(`https://api.spoonacular.com/recipes/${recipeId}/information`, {
        params: {
          apiKey: "c2fac6ab9ee34f06a3c19558516ee1f4",
        },
      })
      .then((response) => {
        navigation.navigate("Recipe", {
          fullRecipe: response.data,
        });
      })
      .catch((error) => {
        Alert.alert("Sorry, we couldn't find that recipe.");
        console.error(error);
      });
  };

  return (
    <TouchableOpacity
      key={recipe.id || index}
      style={[styles.resultCards, { marginTop: 16 }]}
      onPress={() => handlePress(recipe.id)}
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
      <Text style={styles.text}>
        Uses {recipe.usedIngredientCount} of {recipe.usedIngredientCount}{" "}
        ingredients
      </Text>

      <View>
        <Text style={[styles.text, { fontFamily: "figtree-medium" }]}>
          Missing Ingredients:
        </Text>
        {recipe.missedIngredients.map((ingredient, index) => (
          <Text style={[styles.text, { fontSize: 16 }]} key={index}>
            {ingredient.name}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  );
};

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={SearchPage} />
      <Stack.Screen name="Recipe" component={IngredientSearchRecipe} />
    </Stack.Navigator>
  );
}

export default function IngredientSearch() {
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
  searchByIngredients: {
    backgroundColor: "#FB6107",
  },
  searchRecipe: {
    backgroundColor: "#598019",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16 * 0.75,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  searchField: {
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
  results: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    padding: 16 * 1.5,
    paddingVertical: 16 * 2,
  },
  resultCards: {
    padding: 16 * 1.5,
    borderRadius: 16,
    backgroundColor: "#F4DF46",
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
});
