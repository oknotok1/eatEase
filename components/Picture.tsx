import { View, Image } from "react-native";

const Picture = ({
  src,
  width,
  height,
  resizeMode,
  borderRadius,
}: {
  src: string;
  width?: string | number;
  height?: string | number;
  resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";
  borderRadius?: number;
}) => {
  return (
    <View
      style={{
        width: width ?? "100%",
        height: height ?? "100%",
        backgroundColor: "lightgrey",
        borderRadius: borderRadius ?? 0,
      }}
    >
      <Image
        source={{
          uri: src,
        }}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: resizeMode || "contain",
          borderRadius: borderRadius ?? 0,
        }}
      />
    </View>
  );
};

export default Picture;
