import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Recipe from "./Recipe";
import Button from "./Button";

const Stack = createStackNavigator();

const RecipesHome = ({ navigation }: any) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
