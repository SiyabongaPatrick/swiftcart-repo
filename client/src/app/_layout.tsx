import { Slot, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "@/context/auth";

export default function RootLayout() {
  return (
    <AuthProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: "#FFFFFF"}}>
        <Stack screenOptions={{headerShown: false}}/>
      </SafeAreaView>
    </AuthProvider>
  );
}
