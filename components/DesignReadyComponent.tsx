import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const DesignReadyComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Image
          source={require("../assets/images/output.png")}
          style={{ width: 70, height: 70, backgroundColor: "transparent" }}
          resizeMode="contain"
        />
      </View>

      <LinearGradient
        colors={["#2938DC", "#943DFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.rightSide}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Manrope-ExtraBold",
            color: "#ffffff",
          }}
        >
          Your Design is Ready!
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Manrope-Regular",
            color: "#ffffff",
            marginTop: 4,
          }}
        >
          Tap to see it
        </Text>
      </LinearGradient>
    </View>
  );
};

export default DesignReadyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 70,
    flexDirection: "row",
    padding: 24,
    borderRadius: 16,
  },
  leftSide: {
    width: 70,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: "#1c1c1e",
  },
  rightSide: {
    flex: 1,
    height: 70,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 12,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  lienarGradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",
  },
});
