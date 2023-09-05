import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

const Example01 = (props) => {
  const fadeAnim = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0
  const animV2 = useRef(new Animated.Value(0)).current;

  const spin = animV2.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg",],
  });

  const animate = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }), Animated.timing(animV2, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(animV2, {
        toValue: 0,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),

    ]).start(() => {
      fadeAnim.setValue(1);
      animV2.setValue(0);
    })
  }


  return (
    <View style={styles.container}>
      <Animated.Image
        style={{ width: 180, height: 150, opacity: fadeAnim, transform: [{ rotate: spin }] }}
        source={require("../assets/IT_Logo.png")}
      />
      <View style={{ width: "100%", bottom: -200 }}>
        <Button title="Sequence" onPress={animate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fadingContainer: {
    width: 250,
    height: 50,
    backgroundColor: "powderblue",
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
  },
});

export default Example01;
