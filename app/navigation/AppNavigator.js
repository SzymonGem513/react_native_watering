import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import App from "../App";
import Home from "../index";
import PlantDetails from "../PlantDetails";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PlantList" component={Home} />
        <Stack.Screen name="PlantDetails" component={PlantDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
