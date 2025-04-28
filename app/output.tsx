import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Alert,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useTheme } from "@/Context/ThemeContext";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { usePrompt } from "@/Context/PromptContext";
import * as Clipboard from "expo-clipboard";

const { height: screenHeight } = Dimensions.get("window");

const output = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const { prompt } = usePrompt();

  const handleClose = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const handleCopy = () => {
    Clipboard.setStringAsync(prompt);
    Alert.alert("Copied to Clipboard", "The prompt text has been copied.");
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <View style={styles.headercontainer}>
        <Text style={styles.header}> Your Design</Text>
        <TouchableOpacity onPress={handleClose}>
          <Image
            source={require("../assets/images/close.png")}
            width={13.75}
            height={13.75}
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../assets/images/outputbig.png")}
        style={{
          width: "100%",
          height: screenHeight * 0.4,
          borderRadius: 20,
        }}
      />
      <View style={styles.promptcontainer}>
        <View style={styles.promptHeader}>
          <Text style={styles.promptHeaderText}>Prompt</Text>
          <TouchableOpacity onPress={handleCopy} style={{ marginLeft: "auto" }}>
            <Image
              source={require("../assets/images/copy.png")}
              style={{
                width: 50,
                height: 16,
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.promptText}>{prompt}</Text>
        <Image
          source={require("../assets/images/outputtype.png")}
          style={{
            width: 76,
            height: 24,
            borderRadius: 20,
            alignSelf: "flex-start",
            marginLeft: 12,
          }}
        />
      </View>
    </View>
  );
};

export default output;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 24,
  },
  headercontainer: {
    width: "100%",
    height: 60,
    marginTop: 24,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  header: {
    fontFamily: "Manrope-ExtraBold",
    fontWeight: "800",
    fontSize: 22,
    color: "rgba(255, 255, 255, 1)",
  },
  promptcontainer: {
    width: "100%",
    height: 134,
    borderRadius: 12,
    gap: 12,
    backgroundColor: "rgba(39, 39, 42, 1)",
    marginTop: 24,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  promptHeader: {
    width: "100%",
    height: "auto",
    padding: 12,
    flexDirection: "row",
  },
  promptHeaderText: {
    fontFamily: "Manrope-Regular",
    fontWeight: "700",
    fontSize: 15,
    lineHeight: 20,
    color: "rgba(255, 255, 255, 1)",
  },
  promptText: {
    fontFamily: "Manrope-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 21,
    color: "rgba(255, 255, 255, 1)",
    paddingHorizontal: 12,
    textAlign: "left",
    width: "100%",
  },
});
