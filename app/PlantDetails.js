import React, { useState, useEffect } from "react";
import { styles } from "./styles/PlantDetailsStyles";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";


//placeholder
const sensorData = {
  temperature: "24°C",
  light: "70%",
  ambientHumidity: "20%",
  soilHumidity: "78%",
};

const PlantDetails = () => {
  const [plantData, setPlantData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    if (route.params && route.params.plant) {
      setPlantData(route.params.plant);
    }
  }, [route.params]);

  if (!plantData) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>
          No plant data available. Please restart the application and contact to
          out support team
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.backButtonText}>{`<`} </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.plantName}>{plantData.title}</Text>
          <Text style={styles.careInfoItemTitle}>Watering</Text>
          <Text style={styles.plantTime}>
            {plantData.time ? `${plantData.time}` : "No watering time set"}
          </Text>

          <TouchableOpacity style={styles.waterButton} onPress={toggleModal}>
            <Text style={styles.waterButtonText}>Change watering interval</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.manualButton}>
            <Text style={styles.manualButtonText}>Water manually</Text>
          </TouchableOpacity>
        </View>

        <Modal visible={isModalVisible} animationType="slide">
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text>This is the popup screen</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <View style={styles.sensorInfoContainer}>
          <Text style={styles.sectionTitle}>Plant sensor info:</Text>
          <View style={styles.careInfoContainer}>
            <View style={styles.careInfoItem}>
              <Text style={styles.careInfoItemTitle}>
                Ambient temperature:{" "}
                <Text style={styles.careInfoItemText}>
                  {sensorData.temperature}
                </Text>
              </Text>

              <Text style={styles.careInfoItemTitle}>
                Ambient humidity:{" "}
                <Text style={styles.careInfoItemText}>
                  {sensorData.ambientHumidity}
                </Text>
              </Text>

              <Text style={styles.careInfoItemTitle}>
                Soil humidity:{" "}
                <Text style={styles.careInfoItemText}>
                  {sensorData.soilHumidity}
                </Text>
              </Text>

              <Text style={styles.careInfoItemTitle}>
                Light:{" "}
                <Text style={styles.careInfoItemText}>{sensorData.light}</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlantDetails;
