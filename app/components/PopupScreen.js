import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, Modal} from 'react-native';

import {styles} from '../styles/PopupStyles';

const PopupScreen = ({isModalVisible, toggleModal}) => {
   const [hour, setHour] = useState(12);
   const [minute, setMinute] = useState(0);
   const [day, setDay] = useState(0);
   const [seconds, setSeconds] = useState(0);

   const formatNumber = (number) => {
      return number < 10 ? '0' + number : number;
   };

   const handleHourIncrement = () => {
      setHour((hour + 1) % 13 );
   };

   const handleHourDecrement = () => {
      setHour((hour + 12) % 13 );
   };

   const handleMinuteIncrement = () => {
      setMinute((minute + 1) % 60);
   };

   const handleMinuteDecrement = () => {
      setMinute((minute + 59) % 60);
   };

   const handleDayIncrement = () => {
      setDay(day + 1);
   };

   const handleDayDecrement = () => {
      if (day > 0) {
         setDay(day - 1);
      }
   };

   useEffect(() => {
      console.log(seconds);
   }, [seconds]);

   const handleSave = () => {
		const totalSeconds = (hour * 60 * 60) + (minute * 60) + (day * 24 * 60 * 60);
		setSeconds(totalSeconds);
		toggleModal();
	};

   return (
      <>
         <Modal
            visible={isModalVisible}
            animationType='slide'
         >
            <View style={styles.clockContainer}>
               {/* days */}
               <View style={styles.columnContainer}>
                  <Text> Days </Text>
                  <TouchableOpacity onPress={handleDayIncrement}>
                     <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>

                  <Text style={styles.timeText}>{formatNumber(day)}</Text>

                  <TouchableOpacity onPress={handleDayDecrement}>
                     <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>
               </View>
               {/* hours */}
               <View style={styles.columnContainer}>
                  <Text> Hours </Text>

                  <TouchableOpacity onPress={handleHourIncrement}>
                     <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>

                  <Text style={styles.timeText}>{formatNumber(hour)}</Text>

                  <TouchableOpacity onPress={handleHourDecrement}>
                     <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>
               </View>

               {/* minutes */}
               <View style={styles.columnContainer}>
                  <Text> Minutes </Text>

                  <TouchableOpacity onPress={handleMinuteIncrement}>
                     <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>

                  <Text style={styles.timeText}>{formatNumber(minute)}</Text>

                  <TouchableOpacity onPress={handleMinuteDecrement}>
                     <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>
               </View>
            </View>

            <View style={styles.buttonContainer}>
               {/* save button */}
               <TouchableOpacity
                  style={styles.waterButton}
                  onPress={handleSave}
               >
                  <Text style={styles.waterButtonText}>Save</Text>
               </TouchableOpacity>
               {/* close button */}
               <TouchableOpacity
                  style={styles.manualButton}
                  onPress={toggleModal}
               >
                  <Text style={styles.manualButtonText}>Cancel</Text>
               </TouchableOpacity>
            </View>
         </Modal>
      </>
   );
};

export default PopupScreen;
