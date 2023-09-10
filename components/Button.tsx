import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Button({
  text,
  onPress,
  color,
}: {
  text: string;
  onPress: () => void;
  color?: string;
}) {
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        color === "secondary"
          ? { backgroundColor: "#598019" }
          : { backgroundColor: "#FF6025" },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginVertical: 16 / 2,
    paddingVertical: 16,
    paddingHorizontal: 16 * 1.5,
    borderRadius: 16 / 2,
  },
  text: {
    fontSize: 16,
    color: "#FFFF",
    fontFamily: "figtree-bold",
    textAlign: "center",
  },
});
