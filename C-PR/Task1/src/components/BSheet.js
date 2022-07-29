import React, { useCallback, useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

export const BottomSheet = () => {
  // ref
  const bottomSheetRef = useRef(0);
  // variables
  const snapPoints = useMemo(() => ["25%", "30%"], []);

  // callbacks

  const handleClosePress = () => {
    console.log("CLOSE"), bottomSheetRef.current.close();
  };

  // renders
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClosePress}>
        <Text>TeXT</Text>
      </TouchableOpacity>
      <BottomSheet
        /// <reference path="" />
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
  },
});
