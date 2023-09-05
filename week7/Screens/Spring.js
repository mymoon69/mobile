import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";

const Example01 = (props) => {
    const SpringVal = useRef(new Animated.Value(0.3)).current; // Initial value for opacity: 0

    const spring = () => {
        console.log("sping");
        Animated.spring(SpringVal, {
            toValue: 1,
            friction: 1,
            useNativeDriver: true,
        }).start( ()=> {SpringVal.setValue(0.3);});
    };

    return (
        <View style={styles.container}>
            <Animated.Image
                style={{ width: 180, height: 150, transform: [{scale: SpringVal}]}}
                source={require("../assets/IT_Logo.png")}
            />
            <View style={{ width: "100%", bottom: -200 }}>
                <Button title="Spring" onPress={spring} />
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
