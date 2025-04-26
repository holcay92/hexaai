import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>AI Logo</Text>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 12,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
