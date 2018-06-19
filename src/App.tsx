import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
const { Component } = React;

import Header from "./components/Header";
import Home from "./components/Home";

export default class App extends Component {
  public render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Header />
          <Home />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#258BBB",
    flex: 1,
    flexDirection: "column"
  }
});
