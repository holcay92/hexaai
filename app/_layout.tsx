import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ThemeProvider, useTheme } from "@/Context/ThemeContext";
import { View, StyleSheet } from "react-native";

SplashScreen.preventAutoHideAsync();

function AppWrapper({ children }: { children: React.ReactNode }) {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      {children}
    </View>
  );
}

export default function RootLayout() {
  const [loaded] = useFonts({
    "Manrope-Bold": require("../assets/fonts/Manrope/static/Manrope-Bold.ttf"),
    "Manrope-ExtraBold": require("../assets/fonts/Manrope/static/Manrope-ExtraBold.ttf"),
    "Manrope-ExtraLight": require("../assets/fonts/Manrope/static/Manrope-ExtraLight.ttf"),
    "Manrope-Light": require("../assets/fonts/Manrope/static/Manrope-Light.ttf"),
    "Manrope-Medium": require("../assets/fonts/Manrope/static/Manrope-Medium.ttf"),
    "Manrope-Regular": require("../assets/fonts/Manrope/static/Manrope-Regular.ttf"),
    "Manrope-SemiBold": require("../assets/fonts/Manrope/static/Manrope-SemiBold.ttf"),
  });
  const theme = useTheme();
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <AppWrapper>
        <Stack
          screenOptions={{
            headerTitle: "AI Logo",
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerTintColor: theme.colors.text,
            headerTitleStyle: {
              fontFamily: "Manrope-Bold",
              fontSize: 20,
            },
            headerTitleAlign: "center",
          }}
        />
      </AppWrapper>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09090B",
  },
});
