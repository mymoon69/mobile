import React, { Component } from "react";
import { StyleSheet, View, Alert } from "react-native";
import firebase from "../database/firebaseDB";
import { Button, Input, Image } from "react-native-elements";

class Example02 extends Component {
  constructor() {
    super();

    this.subjCollection = firebase.firestore().collection("students");

    this.state = {
      id: "",
      name: "",
      gpa: "",
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  storeStudents() {
    this.subjCollection
      .add({
        id: this.state.id,
        name: this.state.name,
        gpa: this.state.gpa,
      })
      .then((res) => {
        this.setState({
          id: "",
          name: "",
          gpa: "",
        });
        // Alert.alert(
        //   "Adding Alert",
        //   "New students was added!! Pls check your DB!!"
        // );
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/IT_Logo.png")}
          style={{ width: 120, height: 100 }}
          containerStyle={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <Input
          placeholder={"Student ID"}
          value={this.state.id}
          onChangeText={(val) => this.inputValueUpdate(val, "id")}
        />
        <Input
          placeholder={"Student Name"}
          value={this.state.name}
          onChangeText={(val) => this.inputValueUpdate(val, "name")}
        />
        <Input
          placeholder={"Student GPA"}
          value={this.state.gpa}
          onChangeText={(val) => this.inputValueUpdate(val, "gpa")}
        />
        <Button title="Add Student" onPress={() => this.storeStudents()} />
        <Button style={{ marginTop:20 }} title="View Students" onPress={() => { this.props.navigation.navigate("Student List")}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
});

export default Example02;
