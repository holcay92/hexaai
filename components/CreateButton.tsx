import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const CreateButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => console.log("Button pressed")}
        style={styles.button}
      >
        <LinearGradient
          colors={["#2938DC", "#943DFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.lienarGradient}
        >
          <Text style={styles.buttonText}>Create</Text>
          <Image
            source={require("../assets/images/stars.png")}
            style={styles.image}
          />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default CreateButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  lienarGradient: {
    width: "100%",
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    flexDirection: "row",
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "800",
    fontFamily: "Manrope-ExtraBold",
    textAlign: "center",
  },
  image: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});
