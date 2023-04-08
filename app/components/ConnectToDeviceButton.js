import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { styles } from "../styles";

const ConnectToDeviceButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Connect to device</Text>
    </TouchableOpacity>
  );
};

export default ConnectToDeviceButton;