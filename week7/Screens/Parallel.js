import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

const Example03 = (props) => {
  const animV1 = useRef(new Animated.Value(0.3)).current; // Initial value for opacity: 0
  const animV2 = useRef(new Animated.Value(0)).current;

  const movingMargin = animV2.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 50, 0],
  });

  // const spin = animV2.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ["0deg", "360deg"],
  // });

  // const textSize = animVal.interpolate({
  //   inputRange: [0, 0.5, 1],
  //   outputRange: [1, 2, 1],
  // });

  const animate = () => {
    console.log("animate...");
    Animated.parallel([
      Animated.timing(animV2, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.spring(animV1, {
        toValue: 1,
        friction: 1,
        useNativeDriver: true,
      }),
    ]).start(() => {
      animV1.setValue(0.3);
      animV2.setValue(0);
    });
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{ width: 180, height: 150, transform: [{ scale: animV1 }] }}
        source={require("../assets/IT_Logo.png")}
      />
      <Animated.View
        style={[styles.textContainer, { translateX: movingMargin }]}
      >
        <Text style={{ color: "orange", fontSize: 25 }}>Welcome to Faculty of IT!!</Text>
      </Animated.View>

      <View style={{ width: "100%", bottom: -100 }}>
        <Button title="Parallel" onPress={animate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "space-around",
  },
  marginContainer: {
    height: 30,
    width: 40,
    backgroundColor: "red",
  },
  opContainer: {
    marginTop: 10,
    height: 30,
    width: 40,
    backgroundColor: "blue",
  },
  moveContainer: {
    marginTop: 10,
    height: 30,
    width: 40,
    backgroundColor: "orange",
  },
  textContainer: {
    marginTop: 10,
    // width: 50,
    // height: 40,
  },
  rotateContainer: {
    marginTop: 50,
    height: 30,
    width: 40,
    backgroundColor: "black",
  },
});

export default Example03;
