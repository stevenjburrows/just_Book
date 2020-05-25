import * as React from 'react';

import { Text, View, Button } from 'react-native';
// import myImage from './assets/justBook.jpg';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      
      <Button
        title="Manage Bookings"
        onPress={() => navigation.navigate('ManageBookings')}
      />
    </View>
  );
}


export default HomeScreen;