import { View, Image } from "react-native";

const Picture = ({ src }: { src: string }) => {
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

export default Picture;
