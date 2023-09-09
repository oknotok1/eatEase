import { useEffect, useState } from "react";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image } from "react-native";
import recipeInformation from "./data";

export default function App() {
  console.log(recipeInformation);

  // const getRecipeInformation = () => {
  //   axios
  //     .get("https://api.spoonacular.com/recipes/716429/information", {
  //       params: {
  //         apiKey: "c2fac6ab9ee34f06a3c19558516ee1f4",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       console.log("Worked");
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // useEffect(() => {
  //   getRecipeInformation();
  // }, []);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.text}>
          Open up App.tsx to start working on your app!
        </Text>
        <ImageItem src="https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg" />

        <View style={{ width: 200, height: 200, backgroundColor: "lightgrey" }}>
          <Image
            source={{
              uri: "https://spoonacular.com/recipeImages/640352-312x231.jpg",
            }}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const ImageItem = ({ src }: { src: string }) => {
  return (
    <View style={{ width: 200, height: 200, backgroundColor: "lightgrey" }}>
      <Image
        source={{
          uri: src,
        }}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "contain",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
