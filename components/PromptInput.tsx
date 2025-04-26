import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const PromptInput = () => {
  const [text, setText] = useState("");

  return (
    <>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Enter Your Prompt</Text>
        <TouchableOpacity style={styles.surpriseMeContainer}>
          <Image
            source={require("../assets/images/dice.png")}
            style={styles.surpriseIcon}
          />
          <Text style={styles.surpriseText}>Surprise me</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.promptContainer}>
        <TextInput
          multiline
          numberOfLines={4}
          placeholder="Type your prompt here..."
          placeholderTextColor={"#888"}
          value={text}
          onChangeText={(value) => setText(value)}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 16,
            padding: 8,
            fontFamily: "Manrope-Regular",
            fontWeight: "400",
            lineHeight: 21,
            fontSize: 16,
            color: "#71717A",
          }}
        />
        <Text style={styles.charCounter}>{text.length}/500</Text>
      </View>
    </>
  );
};

export default PromptInput;

const styles = StyleSheet.create({
  promptContainer: {
    flex: 1,
    width: "100%",
    height: 175,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 16,
    backgroundColor: "#27272A",
    padding: 12,
    position: "relative",
  },
  charCounter: {
    position: "absolute",
    bottom: 12,
    left: 12,
    fontSize: 12,
    color: "#888",
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
  surpriseMeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  surpriseIcon: {
    width: 14,
    height: 16,
    marginRight: 6,
  },
  surpriseText: {
    fontSize: 13,
    color: "#FAFAFA",
    fontFamily: "Manrope-Regular",
    fontWeight: "400",
  },
});
