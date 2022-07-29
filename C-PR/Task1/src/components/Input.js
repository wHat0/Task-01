import React from "react";
import { TextInput, StyleSheet } from "react-native";

function Input({ holder, ChangeValues }) {
  return (
    <TextInput
      placeholder={holder}
      keyboardType="number-pad"
      onChangeText={ChangeValues}
      style={styles.container}
    />
  );
}

export default Input;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    width: "50%",
    borderRadius: 8,
    padding: 8,
    margin: 5,
  },
});
