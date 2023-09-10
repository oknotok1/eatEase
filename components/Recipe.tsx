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
import Button from "./Button";

export default function Recipe() {
  console.log(recipeInformation.instructions);
  const { width } = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Picture
          src={recipeInformation.image}
          height={200}
          resizeMode="cover"
          borderRadius={16 * 1.5}
        />

        <Text style={[styles.titleText, { fontSize: 32, fontWeight: "bold" }]}>
          {recipeInformation.title}
        </Text>

        <RenderHtml
          source={{ html: recipeInformation.summary }}
          contentWidth={width}
          baseStyle={{ fontSize: 16, fontFamily: "figtree-regular" }}
        />
      </View>

      <View style={styles.information}>
        <Text
          style={[styles.titleText, { fontSize: 16 * 2, marginBottom: 16 }]}
        >
          Ingredients
        </Text>
        {recipeInformation.extendedIngredients.map((ingredient, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>{"\u2022"}</Text>
            <Text style={styles.text}>{ingredient.original}</Text>
          </View>
        ))}
        <View style={{ marginTop: 16 * 1.5 }}>
          <Button
            text="View Full Recipe"
            onPress={() => {
              Linking.openURL(recipeInformation.sourceUrl);
            }}
          />
          <Button
            text="View on Spoonacular"
            onPress={() => {
              Linking.openURL(recipeInformation.spoonacularSourceUrl);
            }}
            color="secondary"
          />
        </View>
      </View>
    </ScrollView>
  );
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
  header: {
    backgroundColor: "#FB6107",
    padding: 16 * 1.5,
    flex: 1,
    gap: 16,
    paddingVertical: 16 * 2,
  },
  information: {
    backgroundColor: "#F4DF46",
    padding: 16 * 1.5,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16 / 2,
    marginBottom: 16 / 4,
    paddingRight: 16 * 1.5,
  },
  bullet: {
    fontSize: 16,
    marginRight: 8,
  },
});
