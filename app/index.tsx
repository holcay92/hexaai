import CreateButton from "@/components/CreateButton";
import DesignReadyComponent from "@/components/DesignReadyComponent";
import ErrorComponent from "@/components/ErrorComponent";
import LoadingComponent from "@/components/LoadingComponent";
import LogoStylesContainer from "@/components/LogoStylesContainer";
import PromptInput from "@/components/PromptInput";
import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#09090B",
        }}
      >
        <LoadingComponent />
        <PromptInput />
        <LogoStylesContainer />
        <CreateButton />
      </View>
    </GestureHandlerRootView>
  );
}
