import React, { Component } from 'react';
import { Text, View } from "react-native";
import Request from '../helpers/Request.js';
import Booking from '../containers/Booking.js';

class ManageBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    }
  }

  componentDidMount() {
    const request = new Request();

    request.get('http://localhost:8080/bookings')
      .then((data) => {
        this.setState({ bookings: data })
      })
  }

  render() {
    return (
      < View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
        <Text>Manage Bookings</Text>
        {
          this.state.bookings.map((booking) => (
            <Booking key={booking.id} booking={booking}></Booking>
          ))
        }
      </View >
    )
  }
}

export default ManageBookings;
