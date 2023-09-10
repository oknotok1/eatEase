import { StatusBar } from "expo-status-bar";
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
import Picture from "./components/Picture";

import recipeInformation from "./data";

export default function App() {
  console.log(recipeInformation.instructions);
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar style="light" />

        <Picture src={recipeInformation.image} />

        <Text style={[styles.text, { fontSize: 32, fontWeight: "bold" }]}>
          {recipeInformation.title}
        </Text>

        <RenderHtml
          source={{ html: recipeInformation.summary }}
          contentWidth={width}
          baseStyle={{ color: "#fff" }}
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
    </SafeAreaView>
  );
}

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
