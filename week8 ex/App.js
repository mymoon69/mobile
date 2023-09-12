import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Example01 from "./examples/Example01"; //เลิ่อนตามนิ้ว แล้วกลับ
import Example02 from "./examples/Example02"; //เลื่อนตามนิ้ว ไม่กลับ
import Example03 from "./examples/Example03"; //กดแล้วขยาย ตามนิ้วไม่กลับ
import Example04 from "./examples/Example04"; //สองนิ้วขยาย กลับเหมือนเดิม

export default function App() {
  return <Example04 />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
