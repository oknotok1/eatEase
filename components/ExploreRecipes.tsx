import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";
import { useAsyncStorageData } from "../AsyncStorageDataContext";
import Recipe from "./Recipe";
import RecipeCard from "./RecipeCard";
import { RecipeInformation } from "../types";

const Stack = createStackNavigator();

const ExploreRecipes = ({ navigation }: { navigation: any }) => {
  const { featuredRecipes } = useAsyncStorageData();

  // Loading Screen
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
      <ScrollView>
        <View style={styles.featuredRecipes}>
          <Text style={styles.titleText}>Featured Recipes</Text>
          {featuredRecipes.map((recipe: RecipeInformation, index) =>
            RecipeCard({ recipe, index, navigation })
          )}
        </View>
      </ScrollView>
    </View>
  );
};

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Explore">
      <Stack.Screen name="Explore" component={ExploreRecipes} />
      <Stack.Screen name="Recipe" component={Recipe} />
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
  titleText: {
    fontSize: 16 * 2.75,
    fontFamily: "limelight-regular",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  exploreRecipes: {
    backgroundColor: "#FB6107",
  },
  featuredRecipes: {
    padding: 16 * 1.5,
  },
});
