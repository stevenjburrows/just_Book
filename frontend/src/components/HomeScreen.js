import * as React from "react";
import { Text, View, Button, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
      <Image style={{ flex: 5}}
        source={require('../../assets/JustBook.jpg')}
      />
      <Text>justBook</Text>

      <Button
        title="Manage Bookings"
        onPress={() => navigation.navigate("ManageBookings")}
      />

      <Button
        title="Manage Tables"
        onPress={() => navigation.navigate("ManageTables")}
      />
      
      <Button
        title="Manage Customers"
        onPress={() => navigation.navigate("ManageCustomers")}
      />
    </View>
  );
};

export default HomeScreen;
