import React, {useState} from 'react'
import {
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
	Modal,
} from "react-native";

import {styles} from '../styles/PopupStyles'

const PopupScreen = ( {isModalVisible, toggleModal} ) => {

	const [hour, setHour] = useState( 12 );
	const [minute, setMinute] = useState( 0 );
	const [isAM, setIsAM] = useState( true );

	const toggleAMPM = () => {
		setIsAM( !isAM );
	};

	const formatNumber = ( number ) => {
		return number < 10 ? '0' + number : number;
	};

	const handleHourIncrement = () => {
		setHour( ( hour + 1 ) % 12 || 12 );
	};

	const handleHourDecrement = () => {
		setHour( ( hour + 11 ) % 12 || 12 );
	};

	const handleMinuteIncrement = () => {
		setMinute( ( minute + 1 ) % 60 );
	};

	const handleMinuteDecrement = () => {
		setMinute( ( minute + 59 ) % 60 );
	};


	return (
		<>
			<Modal visible={isModalVisible} animationType="slide">

					<View style={styles.timeContainer}>
						<TouchableOpacity onPress={handleHourIncrement}>
							<Text style={styles.timeText}>{formatNumber( hour )}</Text>
						</TouchableOpacity>
						<Text style={styles.timeText}>:</Text>
						<TouchableOpacity onPress={handleMinuteIncrement}>
							<Text style={styles.timeText}>{formatNumber( minute )}</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={toggleAMPM}>
							<Text style={styles.timeText}>{isAM ? 'AM' : 'PM'}</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.buttonContainer}>
						<TouchableOpacity onPress={handleHourIncrement}>
							<Text style={styles.buttonText}>+</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={handleHourDecrement}>
							<Text style={styles.buttonText}>-</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={handleMinuteIncrement}>
							<Text style={styles.buttonText}>+</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={handleMinuteDecrement}>
							<Text style={styles.buttonText}>-</Text>
						</TouchableOpacity>
					</View>


				<TouchableOpacity onPress={toggleModal}>
					<Text>Close</Text>
				</TouchableOpacity>

			</Modal>
			{/* <Modal visible={isModalVisible} animationType="slide">
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text>This is the popup screen</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal> */}

		</>
	)
}

export default PopupScreen