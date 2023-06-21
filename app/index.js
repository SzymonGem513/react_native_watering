import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text, Alert, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import PlantDetails from './PlantDetails';

const Item = ({item, onPress}) => {
   const [timeString, setTimeString] = useState('');

   useEffect(() => {
      if (item.time > 0) {
         const seconds = parseInt(item.time);
         const days = Math.floor(seconds / (24 * 60 * 60));
         const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
         const minutes = Math.floor((seconds % (60 * 60)) / 60);
         setTimeString(`${days}D ${hours}H ${minutes}M`);
      } else {
         setTimeString('No watering time set');
      }
   }, [item.time]);

   return (
      <TouchableOpacity
         activeOpacity={0.8}
         onPress={onPress}
         style={styles.listElement}
      >
         <Text style={styles.listElementPlant}>{item.title}</Text>
         <Text style={styles.listElementTime}>{timeString}</Text>
      </TouchableOpacity>
   );
};

const Home = () => {
   const [listData, setListData] = useState([
      {id: '1', title: 'Plant 1', time: 7200},
      {id: '2', title: 'Plant 2', time: 1080},
      {id: '3', title: 'Plant 3', time: 7200},
      {id: '4', title: 'Plant 4', time: 0},
   ]);

   // const navigation = useNavigation();
   const [selectedPlant, setSelectedPlant] = useState(null);

   const [isModalVisible, setIsModalVisible] = useState(false);

   const toggleModal = () => {
      setIsModalVisible(!isModalVisible);
   };

   useEffect(() => {}, [selectedPlant]);

   const handlePlantPress = (item) => {
      setSelectedPlant(item);
      setIsModalVisible(true);
   };

   const renderItem = ({item}) => (
      <Item
         item={item}
         onPress={() => handlePlantPress(item)}
      />
   );

   return (
      // <NavigationContainer>
      // <ListDataProvider>
      <SafeAreaView style={styles.container}>
         <View>
            <TouchableOpacity
               activeOpacity={0.8}
               onPress={() => console.log('Connect to device button pressed')}
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
         {isModalVisible ? selectedPlant && (
            <PlantDetails
               toggleScreen={toggleModal}
               isVisible={isModalVisible}
               plant={selectedPlant}
               listData={listData}
               setListData={setListData}
            />
         ) : <></>}
      </SafeAreaView>
   );
};

export default Home;
