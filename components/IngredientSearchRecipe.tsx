import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
  Linking,
} from "react-native";
import RenderHtml from "react-native-render-html";
import Picture from "./Picture";
import Button from "./Button";
import { RecipeInformation } from "../types";

export default function IngredientSearchRecipe({ route }: { route: any }) {
  const { fullRecipe } = route.params as {
    fullRecipe: RecipeInformation;
  };
  const { width } = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {fullRecipe.image && (
          <Picture
            src={fullRecipe.image}
            height={200}
            resizeMode="cover"
            borderRadius={16 * 1.5}
          />
        )}
        <Text style={[styles.titleText, { fontSize: 32, fontWeight: "bold" }]}>
          {fullRecipe.title}
        </Text>
        <RenderHtml
          source={{ html: fullRecipe.summary }}
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
        {fullRecipe.extendedIngredients.map((ingredient, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>{"\u2022"}</Text>
            <Text style={styles.text}>{ingredient.original}</Text>
          </View>
        ))}
      </View>

      {fullRecipe.analyzedInstructions &&
        fullRecipe.analyzedInstructions.length > 0 && (
          <View style={styles.instructions}>
            <Text
              style={[styles.titleText, { fontSize: 16 * 2, marginBottom: 16 }]}
            >
              Instructions
            </Text>
            {fullRecipe.analyzedInstructions[0]?.steps?.map(
              (instruction, index) => (
                <View key={index} style={styles.listItem}>
                  <Text style={styles.bullet}>{index + 1}.</Text>
                  <Text style={styles.text}>{instruction.step}</Text>
                </View>
              )
            )}
          </View>
        )}

      <View style={styles.sources}>
        <Button
          text="View Full Recipe"
          onPress={() => {
            Linking.openURL(fullRecipe.sourceUrl);
          }}
        />
        <Button
          text="View on Spoonacular"
          onPress={() => {
            Linking.openURL(fullRecipe.spoonacularSourceUrl);
          }}
          color="secondary"
        />
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
    paddingHorizontal: 16 * 1.5,
    paddingVertical: 16 * 2,
    flex: 1,
    gap: 16,
  },
  information: {
    backgroundColor: "#F4DF46",
    paddingHorizontal: 16 * 1.5,
    paddingTop: 16 * 1.5,
  },
  instructions: {
    backgroundColor: "#F4DF46",
    paddingHorizontal: 16 * 1.5,
    paddingTop: 16 * 1.5,
  },
  sources: {
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
    marginBottom: "auto",
  },
});
