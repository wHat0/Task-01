import React from "react";
import { TextInput, View, Text } from "react-native";

// Question--1
const { useState } = require("react");

function Question1(props) {
  let a = 5,
    b = 3;

  a = a + b; //8
  b = a - b; //8-3=5
  a = a - b; //8-5=3

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}>
        A={a} , B={b}
      </Text>
    </View>
  );
}

export default Question1;
