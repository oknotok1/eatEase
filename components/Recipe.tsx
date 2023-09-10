import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import RenderHtml from "react-native-render-html";
import Picture from "./Picture";
import recipeInformation from "../data";

export default function Recipe() {
  console.log(recipeInformation.instructions);
  const { width } = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
      <Picture src={recipeInformation.image} />

      <Text style={[styles.text, { fontSize: 32, fontWeight: "bold" }]}>
        {recipeInformation.title}
      </Text>

      <RenderHtml
        source={{ html: recipeInformation.summary }}
        contentWidth={width}
        // baseStyle={{ color: "#fff" }}
      />

      <Text style={[styles.text, { fontSize: 24 }]}>Ingredients</Text>
      <View>
        {recipeInformation.extendedIngredients.map((ingredient, index) => (
          <Text key={index} style={[styles.text, { fontSize: 16 }]}>
            {ingredient.original}
          </Text>
        ))}
      </View>

      <TouchableOpacity
        onPress={() => {
          Linking.openURL(recipeInformation.sourceUrl);
        }}
      >
        <Text style={[styles.text, { fontSize: 24 }]}>View Full Recipe</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    // color: "#fff",
  },
});
