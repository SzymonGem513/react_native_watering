import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

   timeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   timeText: {
      fontSize: 32,
      marginHorizontal: 10,
   },
   buttonContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 10,
   },
   buttonText: {
      fontSize: 24,
      paddingHorizontal: 10,
   },
   columnContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },
   clockContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 15,
   },
   manualButton: {
      color: '#fff',
      borderColor: '#5e8c61',
      borderWidth: 3,
      borderRadius: 5,
      width: '50%',
      marginVertical:20,
		padding:10,
   },
   waterButton: {
      borderRadius: 5,
      backgroundColor: '#5e8c61',
      color: '#fff',
      width: '50%',
		padding:10,

   },
   manualButtonText: {
      color: '#5e8c61',
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
   },
   waterButtonText: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
      color: '#fff',
   },
});
