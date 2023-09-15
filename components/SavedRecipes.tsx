import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";
import Recipe from "./Recipe";
import recipes from "../data/recipes";
import { RecipeInformation } from "../types";
import RecipeCard from "./RecipeCard";
import Button from "./Button";
import { useAsyncStorageData } from "../AsyncStorageDataContext";

const Stack = createStackNavigator();

const SavedRecipes = ({ navigation }: { navigation: any }) => {
  const { storedRecipes, clearAllStoredData } = useAsyncStorageData();

  if (storedRecipes.length === 0) {
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
          No Saved Recipes
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.exploreRecipes, styles.container]}>
      <ScrollView>
        <View style={styles.featuredRecipes}>
          <Text style={styles.titleText}>Saved Recipes</Text>
          {storedRecipes.map((recipe: RecipeInformation, index) =>
            RecipeCard({ recipe, index, navigation })
          )}
        </View>
        <View style={{ marginBottom: 16 * 2, marginHorizontal: 16 * 1.5 }}>
          <Button
            onPress={() => {
              clearAllStoredData();
            }}
            text="Clear All Data"
            color="secondary"
          />
        </View>
      </ScrollView>
    </View>
  );
};

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Recipes">
      <Stack.Screen
        name="Saved Recipes"
        component={SavedRecipes}
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
