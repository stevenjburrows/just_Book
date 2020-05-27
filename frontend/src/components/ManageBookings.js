import React, { Component } from 'react';
import { Text, View, Button } from "react-native";
import Request from '../helpers/Request.js';
import Booking from '../containers/Booking.js';
import AddBookingForm from '../containers/AddBookingForm';

class ManageBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
    }
    this.fetchBookings = this.fetchBookings.bind(this);
    this.deleteBooking = this.deleteBooking.bind(this);
  }

  fetchBookings(){
    const request = new Request();
    request.get('http://localhost:8080/bookings')
      .then((data) => {
        this.setState({ bookings: data })
      })
  }

  deleteBooking(id){
    const request = new Request();
    const url = 'http://localhost:8080/bookings/' + id;
    request.delete(url)
      .then(() => this.fetchBookings())
  }

  componentDidMount() {
    this.fetchBookings();
  }

  render() {
    return (
      < View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
        <Button 
        title="Add Booking"
        onPress={() => this.props.navigation.navigate("AddBooking", {fetchBookings: this.fetchBookings})}
        />


        <Text>Manage Bookings</Text>
        {
          this.state.bookings.map((booking) => (
            <View key={booking.id + 1000}>
              <Booking key={booking.id + 10000} booking={booking}></Booking>
              <Button
                title="Delete"
                key={booking.id}
                onPress={() => this.deleteBooking(booking.id)}
                />
            </View>  
          ))
        }
      </View >
    )
  }
}

export default ManageBookings;
