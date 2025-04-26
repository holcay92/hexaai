import CreateButton from "@/components/CreateButton";
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
        <PromptInput />
        <LogoStylesContainer />
        <CreateButton />
      </View>
    </GestureHandlerRootView>
  );
}
