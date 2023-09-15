import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Font from "expo-font";

import HomeScreen from "./components/HomeScreen";
import ExploreRecipes from "./components/ExploreRecipes";
import Timer from "./components/Timer";
import { StatusBar } from "react-native";
import SavedRecipes from "./components/SavedRecipes";
import { AsyncStorageDataProvider } from "./AsyncStorageDataContext";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#FB6107",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore Recipes"
        component={ExploreRecipes}
        options={{
          tabBarLabel: "Explore Recipes",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Saved Recipes"
        component={SavedRecipes}
        options={{
          tabBarLabel: "Saved Recipes",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="Timer"
        component={Timer}
        options={{
          tabBarLabel: "Timer",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="timer" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "limelight-regular": require("./assets/fonts/Limelight/Limelight-Regular.ttf"),
        "figtree-regular": require("./assets/fonts/Figtree/static/Figtree-Regular.ttf"),
        "figtree-medium": require("./assets/fonts/Figtree/static/Figtree-Medium.ttf"),
        "figtree-bold": require("./assets/fonts/Figtree/static/Figtree-Bold.ttf"),
      });
      setFontLoaded(true); // Mark the fonts as loaded
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null; // Don't render anything until the fonts are loaded
  }

  return (
    <AsyncStorageDataProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <MyTabs />
      </NavigationContainer>
    </AsyncStorageDataProvider>
  );
}
