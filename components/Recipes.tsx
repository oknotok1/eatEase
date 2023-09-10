import { View, Text } from "react-native";
import Recipe from "./Recipe";

export default function Recipes() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Recipe />
    </View>
  );
}
