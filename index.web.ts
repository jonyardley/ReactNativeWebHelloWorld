import App from "./src/App";
import React from "react";
import { AppRegistry } from "react-native";

// register the app
AppRegistry.registerComponent("ReactNativeWebHelloWorld", () => App);

AppRegistry.runApplication("ReactNativeWebHelloWorld", {
  initialProps: {},
  rootTag: document.getElementById("root")
});
