import React, { useState } from "react";
import { View, TextInput, Text, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Recipe from "./Recipe";
import Button from "./Button";

const Stack = createStackNavigator();

const RecipesHome = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      // Show an alert or error message if the search query is empty
      Alert.alert("Empty Search", "Please enter a search query.");
    } else {
      console.log("API call with search query:", searchQuery);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextInput
        placeholder="Search Recipes"
        style={{
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 5,
          padding: 10,
          width: 250,
          marginBottom: 10,
        }}
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />
      <Button
        onPress={handleSearch}
        text="Search"
        disabled={searchQuery.trim() === ""}
      />

      <Button
        onPress={() => navigation.navigate("Recipe")}
        text="Explore Recipes"
      />
    </View>
  );
};

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Recipes">
      <Stack.Screen name="Recipes" component={RecipesHome} />
      <Stack.Screen name="Recipe" component={Recipe} />
    </Stack.Navigator>
  );
}

export default function Recipes() {
  return <MyStack />;
}
