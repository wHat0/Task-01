import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";

function Question4(props) {
  // Question -4

  //Division

  const [num1, setNum1] = useState(0); //5
  const [num2, setNum2] = useState(0); //3
  const [num3, setNum3] = useState(0); //3
  const [num4, setNum4] = useState(0); //3

  const Pressed = () => {
    let a = 0,
      c = 0,
      b = 0;

    if (Number(num1) > Number(num2)) {
      a = num1;
      b = num2;
    }
    if (Number(num1) < Number(num2)) {
      b = num1;
      a = num2;
    }

    console.log(a, b);

    while (Number(a) > Number(b) - 1) {
      a = Number(a) - Number(b); //20-5
      c++; //

      console.log("Loop=" + c, "=", +a);
    }

    return setNum3(c), setNum4(a); //remainder

    // quation=c reminder=b
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 55, fontWeight: "bold" }}>Division</Text>
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
        Your Quotient={"  "}
        <Text style={{ color: "red", fontWeight: "bold", fontSize: 22 }}>
          {num3}
        </Text>
      </Text>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        Your Reminder={"  "}
        <Text style={{ color: "red", fontWeight: "bold", fontSize: 22 }}>
          {num4}
        </Text>
      </Text>
      <View style={{ width: "40%", height: "20%" }}>
        <Button tittle={"Press"} onPress={Pressed} />
      </View>
    </View>
  );
}

export default Question4;
