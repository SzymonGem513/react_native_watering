import React, {useState, useEffect} from 'react';
import {styles} from './styles/PlantDetailsStyles';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

//placeholder
const sensorData = {temperature: '65-75°F (18-24°C)', light: 'Indirect sunlight'};

const PlantDetails = () => {
   const [plantData, setPlantData] = useState(null);
   const route = useRoute();
   const navigation = useNavigation();

   const [notes, setNotes] = useState('This plant is susceptible to root rot if overwatered. Make sure the soil dries out between waterings.');

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
         </View>
         <View style={styles.content}>
            <View>
               <Text style={styles.plantName}>{plantData.title}</Text>
               <Text style={styles.careInfoItemTitle}>Watering</Text>
               <Text style={styles.plantTime}>{plantData.time ? `${plantData.time}` : 'No watering time set'}</Text>

               <TouchableOpacity style={styles.waterButton}>
                  <Text style={styles.backButtonText}>Change watering interval</Text>
               </TouchableOpacity>
                 <TouchableOpacity style={styles.manualButton}>
                  <Text style={styles.backButtonText}>Water manually</Text>
               </TouchableOpacity>
            </View>

            <View style={styles.sensorInfoContainer}>
               <Text style={styles.sectionTitle}>Plant care information</Text>
               <View style={styles.careInfoContainer}>
                  <View style={styles.careInfoItem}>
                     <Text style={styles.careInfoItemTitle}>Light</Text>
                     <Text style={styles.careInfoItemText}>{sensorData.light}</Text>
                  </View>
                  <View style={styles.careInfoItem}>
                     <Text style={styles.careInfoItemTitle}>Temperature</Text>
                     <Text style={styles.careInfoItemText}>{sensorData.temperature}</Text>
                  </View>
               </View>

               <Text style={styles.sectionTitle}>Notes</Text>
               <View style={styles.careInfoItem}>
                  <Text style={styles.notesText}>{notes}</Text>
               </View>
               
            </View>
         </View>
      </SafeAreaView>
   );
};

export default PlantDetails;
