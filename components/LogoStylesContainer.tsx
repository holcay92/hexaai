import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Logo } from "@/constant/types/logo";
import LogoStyleItem from "./LogoStyleItem";
import { mockData } from "@/constant/mockData";

const LogoStylesContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Logo Styles</Text>
      </View>
      <FlatList
        data={mockData}
        renderItem={({ item }) => <LogoStyleItem logo={item as Logo} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}
        style={{
          width: "100%",
        }}
      />
    </View>
  );
};

export default LogoStylesContainer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 24,
    paddingLeft: 24,
  },
  headerRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  headerText: {
    fontSize: 20,
    fontFamily: "Manrope-Bold",
    fontWeight: "800",
    lineHeight: 25,
    color: "#fff",
  },
});
