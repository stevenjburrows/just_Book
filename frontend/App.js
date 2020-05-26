import React, { Component } from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import styled from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/components/HomeScreen";
import ManageBookings from "./src/components/ManageBookings";
import ManageTables from "./src/components/ManageTables";
import ManageCustomers from "./src/components/ManageCustomers";

const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      tables: [],
      customers: [],
    };
  }
  componentDidMount() {
    const url = 'http://localhost:8080/bookings';
    fetch(url)
      .then(res => res.json())
      .then(bookings => this.setState({ bookings: bookings }))
      .then(() => console.log(this.state.bookings))
      .catch(err => console.err(err))
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
          <Stack.Screen name="ManageBookings">
            {(props) => <ManageBookings allBookings={this.state.bookings} />}
          </Stack.Screen>
          <Stack.Screen name="ManageTables">
            {(props) => <ManageTables allTables={this.state.tables} />}
          </Stack.Screen>
          <Stack.Screen name="ManageCustomers"
            component={ManageCustomers}
            options={{ title: "Customers" }} />
        </Stack.Navigator>
      </NavigationContainer >
    );
  }
}

export default App;



