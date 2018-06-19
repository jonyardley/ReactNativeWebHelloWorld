import React from "react";
const { Component } = React;
import { StyleSheet, View } from "react-native";
import Logo from "./Logo";

const Header = () => (
  <View style={styles.container}>
    <Logo width={300} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 100
  }
});

export default Header;
