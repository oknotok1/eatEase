import { useEffect, useState } from "react";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import recipeInformation from "./data";

export default function App() {
  // console.log(recipeInformation);

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

  const [image, setImage] = useState<string>("");

  // const googleSearchImage = (searchQuery: string) => {
  //   axios
  //     .get("https://api.serphouse.com/serp/live", {
  //       headers: {
  //         accept: "application/json",
  //         "content-type": "application/json",
  //         authorization:
  //           "Bearer X4t0HB0Y6B6jMaJ2XYEkte7aUYyM0NtI68uOXlXRJqZ3SzYSfoZ5erWlLkeb",
  //       },
  //       params: {
  //         q: searchQuery,
  //         domain: "google.com",
  //         location: "Singapore",
  //         lang: "en",
  //         device: "desktop",
  //         serp_type: "image",
  //         page: 1,
  //       },
  //     })
  //     .then((response) => {
  //       const results = response.data.results.results;
  //       console.log(
  //         "googleSearchImage::results[0]?.original",
  //         results[0]?.original
  //       );
  //       setImage(results[0]?.original);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // useEffect(() => {
  //   googleSearchImage(recipeInformation.extendedIngredients[0].image);
  // }, []);

  console.log(recipeInformation.summary);

  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />

        <ImageItem src={recipeInformation.image} />

        <Text style={[styles.text, { fontSize: 32, fontWeight: "bold" }]}>
          {recipeInformation.title}
        </Text>

        <Text style={[styles.text, { fontSize: 16 }]}>
          {recipeInformation.summary}
        </Text>

        <Text style={[styles.text, { fontSize: 16 }]}>
          {recipeInformation.instructions}
        </Text>
        <Text style={[styles.text, { fontSize: 16 }]}>
          {recipeInformation.extendedIngredients.map((ingredient) => {
            return <Text>{ingredient.original}</Text>;
          })}
        </Text>

        {/* {image && <ImageItem src={image} />} */}

        {/* <View style={{ width: 200, height: 200, backgroundColor: "lightgrey" }}>
          <Image
            source={{
              uri: "https://spoonacular.com/recipeImages/640352-312x231.jpg",
            }}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View> */}
      </ScrollView>
    </SafeAreaProvider>
  );
}

const ImageItem = ({ src }: { src: string }) => {
  return (
    <View
      style={{
        width: 200,
        height: 200,
        backgroundColor: "lightgrey",
      }}
    >
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
