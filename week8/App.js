import React from "react";
import { StyleSheet } from "react-native";

// import screen ที่เกี่ยวข้อง
import Example02 from "./work/work"

export default function App() {
  return <Example02 />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
