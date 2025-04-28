import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { getImageSource } from "@/utils/utils";

interface LogoStyleItemProps {
  logo: { id: number; name: string; image: string };
}

const LogoStyleItem = ({ logo }: LogoStyleItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={
          logo.image
            ? getImageSource(logo.image)
            : require("../assets/images/slash.png")
        }
        style={{
          width: 90,
          height: 90,
          borderRadius: 16,
          padding: 4,
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      />
      <Text style={styles.text}>{logo.name}</Text>
    </View>
  );
};

export default LogoStyleItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  text: {
    fontSize: 12,
    fontFamily: "Manrope-Regular",
    fontWeight: "400",
    lineHeight: 16,
    color: "#FAFAFA",
    textAlign: "center",
  },
});
