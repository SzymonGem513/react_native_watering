import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
   },
   sensorContent: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   plantName: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
   },
   plantTime: {
      fontSize: 20,
      marginBottom: 20,
   },
   backButton: {
      backgroundColor: '#ddd',
      borderRadius: 5,
      padding: 10,
   },
   backButtonText: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
   },
   waterButton:{
      backgroundColor: '#ddd',
      borderRadius: 5,
      padding: 10,
      marginVertical:10,
   },   manualButton:{
      backgroundColor: '#ddd',
      borderRadius: 5,
      padding: 10,
      marginVertical:10,


   },
   header: {
      display: 'flex',
   },
   sensorInfoContainer: {
      marginTop:10,
   },
   sectionTitle: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 16,
      marginVertical: 10,
   },

   careInfoItem: {
      margin: 10,
   },
});
