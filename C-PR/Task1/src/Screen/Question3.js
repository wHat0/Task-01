import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";

function Question3(props) {
  // Question- 3

  const [num1, setNum1] = useState(0); //5
  const [num2, setNum2] = useState(0); //3
  const [num3, setNum3] = useState(0); //3

  const Pressed = () => {
    let a = num1,
      c = 0,
      b = num2;

    if (num1 > num2) {
      a = num1;
      b = num2;
    } else {
      b = num1;
      a = num2;
    }
    console.log(a, b);

    while (Number(b) >= 1) {
      c = c + Number(a); //5+5=10 ,15
      b = Number(b) - 1; //2 ,1

      console.log("Loop=" + b, "=", +a);
    }
    setNum3(c);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 55, fontWeight: "bold" }}>Multiplication</Text>
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Input holder={"Number1"} ChangeValues={(value) => setNum1(value)} />
        <Input holder={"Number2"} ChangeValues={(value) => setNum2(value)} />
      </View>

      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        Your Answer={"  "}
        <Text style={{ color: "red", fontWeight: "bold", fontSize: 22 }}>
          {num3}
        </Text>
      </Text>
      <View style={{ width: "40%", height: "20%" }}>
        <Button tittle={"Press"} onPress={Pressed} />
      </View>
    </View>
  );
}

export default Question3;
