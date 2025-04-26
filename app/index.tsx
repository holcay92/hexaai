import CreateButton from "@/components/CreateButton";
import PromptInput from "@/components/PromptInput";
import TopBar from "@/components/TopBar";
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
          padding: 24,
          backgroundColor: "#09090B",
        }}
      >
        <TopBar />
        <PromptInput />
        <CreateButton />
      </View>
    </GestureHandlerRootView>
  );
}
