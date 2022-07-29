import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNav from "./src/routes/Stacknav";
import Question1 from "./src/Screen/Question1";
import Question3 from "./src/Screen/Question3";
import Question4 from "./src/Screen/Question4";
import Task1 from "./src/Screen/Task1";

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffcccccccccccpf",
    alignItems: "center",
    justifyContent: "center",
  },
});
