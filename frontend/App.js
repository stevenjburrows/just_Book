import React, { Component } from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import styled from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/components/HomeScreen";
import ManageBookings from "./src/components/ManageBookings";
import ManageTables from "./src/components/ManageTables";
import ManageCustomers from "./src/components/ManageCustomers";
import AddCustomer from "./src/components/AddCustomer";

const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    }
  

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home" }}
          />
          <Stack.Screen name="ManageBookings" component={ManageBookings} options={{ title: "Manage Bookings" }} />
          <Stack.Screen name="ManageTables" component={ManageTables} options={{ title: "Manage Tables" }} />
          <Stack.Screen name="ManageCustomers" component={ManageCustomers} options={{ title: "Manage Customers" }} />
          <Stack.Screen name="AddCustomer" component={AddCustomer} options={{ title: "Add Customer"}} />  
        </Stack.Navigator>
      </NavigationContainer >
    );
  }
}

export default App;



