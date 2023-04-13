import React from 'react'
import {
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
	Modal,
 } from "react-native";

const PopupScreen = ({isModalVisible, toggleModal}) => {
  return (
<>

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

</>
	)
}

export default PopupScreen