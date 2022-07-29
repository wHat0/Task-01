import React from "react";
import { View, Text } from "react-native";

// Question--1

function Question2(props) {
  function arr_diff(a1, a2) {
    var a = [],
      diff = [];

    for (var i = 0; i < a2.length; i++) {
      if (a2[i] != a1[0]) {
        if (a2[i] != a1[1]) {
          diff[i] = a2[i];
        }
      }
    }

    // for (var i = 0; i < a1.length; i++) {
    //   a[a1[i]] = true;
    // }
    // for (var i = 0; i < a2.length; i++) {
    //   if (a[a2[i]]) {
    //     delete a[a2[i]];
    //   } else {
    //     a[a2[i]] = true;
    //   }
    // }

    // for (var k in a) {
    //   diff.push(k);
    // }

    return diff;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
          color: "white",
        }}
      >
        {arr_diff(["a", "b"], ["a", "b", "c", "d"])}
      </Text>
    </View>
  );
}

export default Question2;
