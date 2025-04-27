import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const ErrorComponent = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leftSide}>
        <Image
          source={require("../assets/images/alert.png")}
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.rightSide}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Manrope-ExtraBold",
            color: "#ffffff",
          }}
        >
          Oops, something went wrong
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Manrope-Regular",
            color: "#ffffff",
            marginTop: 4,
          }}
        >
          Click to try again
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ErrorComponent;

const styles = StyleSheet.create({
  container: {
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
    padding: 12,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: "rgba(239, 68, 68, 0.7)",
  },
  rightSide: {
    flex: 1,
    width: "100%",
    height: 70,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 12,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: "rgba(239, 68, 68, 1)",
  },
});
