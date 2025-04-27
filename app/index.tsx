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

export default function Index() {
  const [status, setStatus] = useState<
    "idle" | "processing" | "done" | "error"
  >("idle");
  const router = useRouter();
  const promptRef = useRef<{ clearPrompt: () => void }>(null);

  const handleCreatePress = () => {
    if (promptRef.current) {
      promptRef.current.clearPrompt();
    }
    setStatus("processing");

    return initiateGenerationProcess(
      () => setStatus("done"),
      () => setStatus("error"),
      3000,
      6000,
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
          backgroundColor: "#09090B",
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
