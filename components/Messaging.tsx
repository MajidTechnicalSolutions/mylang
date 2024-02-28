import React from "react";
import { StyleSheet, Text, View } from "react-native";

// useState
// proptypes

type Props = { text: String };

const text = "sometext";

const Messaging = (props: Props) => {
  return <Text>{text}</Text>;
};

export default Messaging;
