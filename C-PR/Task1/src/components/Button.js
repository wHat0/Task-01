import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function Button({ tittle, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#6495ED",
        width: "100%",
        height: "45%",
        borderRadius: 8,
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
        {tittle}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
