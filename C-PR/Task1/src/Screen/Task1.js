import React, { useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import Button from "../components/Button";
import BottomSheet from "@gorhom/bottom-sheet";

function Ques1() {
  let a = 5,
    b = 3;

  a = a + b; //8
  b = a - b; //8-3=5
  a = a - b; //8-5=3

  Alert.alert("Values After Swapping: ", "Values A=" + a + "  " + "B=" + b);
}

function Task1({ navigation }) {
  const [Button2, setButton2] = useState(false);

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "30%"], []);

  const [Answer, setAnswer] = useState();

  function Answer2() {
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
      return diff;
    }

    console.log("Q-2");
    return (
      setAnswer(arr_diff(["a", "b"], ["a", "b", "c", "d"])), setButton2(true)
    );
  }

  const handleClosePress = () => {
    console.log("CAlledHandel");
    setButton2(false);
    bottomSheetRef?.current?.close();
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        padding: 16,
        marginTop: 30,
        backgroundColor: Button2 ? "grey" : "white",
      }}
    >
      <View style={{ flex: 1, width: "100%", margin: 5 }}>
        <Button tittle={"Button 1"} onPress={Ques1} />
        <Button tittle={"Button 2"} onPress={Answer2} />
      </View>
      <View style={{ flex: 1, margin: 5 }}>
        <Button
          tittle={"Button 3"}
          onPress={() => navigation.navigate("Question3")}
        />
        <Button
          tittle={"Button 4"}
          onPress={() => navigation.navigate("Question4")}
        />
      </View>
      {Button2 && (
        <TouchableWithoutFeedback onPress={handleClosePress}>
          <View style={styles.touchArea} />
        </TouchableWithoutFeedback>
      )}
      {Button2 && (
        <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 40 }}>{Answer}</Text>
          </View>

          <TouchableWithoutFeedback onPress={handleClosePress}>
            <View style={styles.touchArea} />
          </TouchableWithoutFeedback>
        </BottomSheet>
      )}
    </View>
  );
}

export default Task1;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  touchArea: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
