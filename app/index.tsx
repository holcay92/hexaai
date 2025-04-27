import CreateButton from "@/components/CreateButton";
import DesignReadyComponent from "@/components/DesignReadyComponent";
import LoadingComponent from "@/components/LoadingComponent";
import ErrorComponent from "@/components/ErrorComponent";
import LogoStylesContainer from "@/components/LogoStylesContainer";
import PromptInput from "@/components/PromptInput";
import { useRouter } from "expo-router";
import { useState, useRef } from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { initiateGenerationProcess } from "@/utils/utils";
import { useTheme } from "@/Context/ThemeContext";
export default function Index() {
  const [status, setStatus] = useState<
    "idle" | "processing" | "done" | "error"
  >("idle");
  const router = useRouter();
  const promptRef = useRef<{ clearPrompt: () => void }>(null);
  const { colors } = useTheme();

  const handleCreatePress = () => {
    if (promptRef.current) {
      promptRef.current.clearPrompt();
    }
    setStatus("processing");

    return initiateGenerationProcess(
      () => setStatus("done"),
      () => setStatus("error"),
      300,
      600,
      0.2
    );
  };

  const handleDesignReadyPress = () => {
    if (status === "done") {
      router.push("/output");
    }
  };

  const handleErrorPress = () => {
    handleCreatePress();
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: colors.primary,

          paddingTop: 24,
        }}
      >
        {status === "processing" && <LoadingComponent />}
        {status === "error" && <ErrorComponent onPress={handleErrorPress} />}
        {status === "done" && (
          <DesignReadyComponent onPress={handleDesignReadyPress} />
        )}

        <PromptInput ref={promptRef} />
        <LogoStylesContainer />
        <CreateButton onPress={handleCreatePress} />
      </View>
    </GestureHandlerRootView>
  );
}
