import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";


// const listDataPlaceholder = [
//   { id: "1", title: "Plant 1", time: "5D 6H 3M" },
//   { id: "2", title: "Plant 2", time: "2D 3H 1M" },
//   { id: "3", title: "Plant 3", time: "1D 2H 50M" },
//   { id: "4", title: "Plant 4", time: "" },
// ];

const listData = [
  { id: "1", title: "Plant 1", time: "5D 6H 3M" },
  { id: "2", title: "Plant 2", time: "2D 3H 1M" },
  { id: "3", title: "Plant 3", time: "1D 2H 50M" },
  { id: "4", title: "Plant 4", time: "" },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.listElement}>
    <Text style={styles.listElementPlant}>{item.title}</Text>
    <Text style={styles.listElementTime}>{item.time ? `${item.time}` : 'No watering time set'}</Text>
  </TouchableOpacity>
);

const Home = () => {
  const navigation = useNavigation();
  const [selectedPlant, setSelectedPlant] = useState(null);
  // const [listData, setlistData] = useState(listDataPlaceholder);

  useEffect(() => {
  }, [selectedPlant]);

  const handlePlantPress = (item) => {
    setSelectedPlant(item);
    navigation.navigate("PlantDetails", { plant: item });
  };

  const renderItem = ({ item }) => (
    <Item item={item} onPress={() => handlePlantPress(item)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => console.log("Connect to device button pressed")}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Connect to device</Text>
        </TouchableOpacity>
        <FlatList
          data={listData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
