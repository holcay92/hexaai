import { usePrompt } from "@/Context/PromptContext";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const PromptInput = forwardRef(
  ({ showWarning }: { showWarning: boolean }, ref) => {
    const [text, setText] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const { prompt, setPrompt } = usePrompt();

    useImperativeHandle(ref, () => ({
      clearPrompt: () => setText(""),
    }));

    const handleTextChange = (value: string) => {
      setText(value);
      setPrompt(value);
    };

    return (
      <View style={styles.container}>
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
        <View
          style={[
            styles.promptContainer,
            { borderColor: isFocused ? "#959595" : "#27272A", borderWidth: 2 },
          ]}
        >
          <TextInput
            multiline
            numberOfLines={4}
            placeholder="Type your prompt here..."
            placeholderTextColor={"#888"}
            value={text}
            onChangeText={(value) => handleTextChange(value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={styles.textInput}
          />
          <Text style={styles.charCounter}>{text.length}/500</Text>
        </View>
        {showWarning && (
          <Text style={styles.warningText}>
            Your prompt is too short. Please enter at least 3 characters.
          </Text>
        )}
      </View>
    );
  }
);

export default PromptInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 24,
    marginTop: 24,
  },
  promptContainer: {
    width: "100%",
    height: 175,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 16,
    backgroundColor: "#27272A",
    padding: 12,
    position: "relative",
  },
  textInput: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    padding: 8,
    fontFamily: "Manrope-Regular",
    fontWeight: "400",
    lineHeight: 21,
    fontSize: 16,
    color: "#ffffff",
  },
  charCounter: {
    position: "absolute",
    bottom: 12,
    left: 12,
    fontSize: 12,
    color: "#888",
  },
  warningText: {
    marginTop: 8,
    fontSize: 14,
    color: "#FF6B6B",
    fontFamily: "Manrope-Regular",
    fontWeight: "400",
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
