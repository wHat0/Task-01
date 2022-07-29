import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";
import Task1 from "../Screen/Task1";
import Question2 from "../Screen/Question2";
import Question3 from "../Screen/Question3";
import Question4 from "../Screen/Question4";

const Stack = createNativeStackNavigator();

function StackNav(props) {
  return (
    <>
      <StatusBar style="light" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Task1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Question2"
          component={Question2}
          options={{
            headerStyle: { backgroundColor: "black" },
            headerTitleAlign: "center",
            headerTintColor: "white",
            presentation: "modal",
            contentStyle: { backgroundColor: "black" },
          }}
        />
        <Stack.Screen
          name="Question3"
          component={Question3}
          options={{
            headerStyle: { backgroundColor: "black" },
            headerTitleAlign: "center",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Question4"
          component={Question4}
          options={{
            headerStyle: { backgroundColor: "black" },
            headerTitleAlign: "center",
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </>
  );
}

export default StackNav;
