import {
    StyleSheet,
  } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start",
      marginTop: 50,
      marginHorizontal: 16,
    },
    listElement: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginTop: 5,
    },
    listElementPlant: {
      width: "49%",
      backgroundColor: "#5e8c61",
      padding: 20,
      borderRadius: 20,
      color: '#fff',
      fontWeight: 700,
      letterSpacing: 1.5,
    },
    listElementTime: {
      width: "49%",
      backgroundColor: "#4e6151",
      padding: 20,
      borderRadius: 20,
      color: '#fff',
      fontWeight: 700,
    },
    list: { 
      marginTop: 30,
   },
   appButtonContainer: {
    marginTop:40,
      elevation: 8,
      backgroundColor: "#3b322c",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });