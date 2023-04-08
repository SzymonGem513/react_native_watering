import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { styles } from "../styles";

const PlantListItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.listElement}
    >
      <Text style={styles.listElementPlant}>{item.title}</Text>
      <Text style={styles.listElementTime}>{item.time}</Text>
    </TouchableOpacity>
  );
};

export default PlantListItem;