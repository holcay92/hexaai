import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import React from "react";

const LoadingComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <ActivityIndicator size="large" color="#999999" />
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.titleText}>Creating Your Design...</Text>
        <Text style={styles.subtitleText}>Ready in 2 minutes</Text>
      </View>
    </View>
  );
};

export default LoadingComponent;

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
    backgroundColor: "#1a1a1c",
  },
  rightSide: {
    flex: 1,
    backgroundColor: "#2a2a2d",
    height: 70,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 12,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  titleText: {
    fontSize: 16,
    fontFamily: "Manrope-ExtraBold",
    color: "#FAFAFA",
  },
  subtitleText: {
    fontSize: 12,
    fontFamily: "Manrope-Regular",
    color: "#FAFAFA",
    marginTop: 4,
  },
});
