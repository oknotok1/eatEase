import { useEffect, useState } from "react";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  const [data, setData] = useState<any>(null);

  const fetchUserData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // Handle the API response data here
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        console.error(error);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Open up App.tsx to start working on your app!</Text>
        <Text>{data[0]?.name}</Text>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
