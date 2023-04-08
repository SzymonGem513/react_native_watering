import React, { useState, useEffect } from "react";
import { styles } from "./PlantDetailsStyles";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

const PlantDetails = () => {
  const [plantData, setPlantData] = useState(null);
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params && route.params.plant) {
      setPlantData(route.params.plant);
    }
  }, [route.params]);

  if (!plantData) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>No plant data available.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{plantData.title}</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.plantName}>{plantData.title}</Text>
        <Text style={styles.plantTime}>{plantData.time}</Text>

        <TouchableOpacity style={styles.wateringButton}>
          <Text style={styles.wateringButtonText}>
            Change watering interval
          </Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Plant care information</Text>
        <View style={styles.careInfoContainer}>
          <View style={styles.careInfoItem}>
            <Text style={styles.careInfoItemTitle}>Watering</Text>
            <Text style={styles.careInfoItemText}>Every 7 days</Text>
          </View>
          <View style={styles.careInfoItem}>
            <Text style={styles.careInfoItemTitle}>Light</Text>
            <Text style={styles.careInfoItemText}>Indirect sunlight</Text>
          </View>
          <View style={styles.careInfoItem}>
            <Text style={styles.careInfoItemTitle}>Temperature</Text>
            <Text style={styles.careInfoItemText}>65-75°F (18-24°C)</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Notes</Text>
        <Text style={styles.notesText}>
          This plant is susceptible to root rot if overwatered. Make sure the
          soil dries out between waterings.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default PlantDetails;
