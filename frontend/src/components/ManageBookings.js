import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import Request from "../helpers/Request.js";
import Booking from "../containers/Booking.js";
import AddBookingForm from "../containers/AddBookingForm";

class ManageBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
    };
    this.fetchBookings = this.fetchBookings.bind(this);
  }

  fetchBookings() {
    const request = new Request();
    request.get("http://localhost:8080/bookings").then((data) => {
      this.setState({ bookings: data });
    });
  }

  componentDidMount() {
    this.fetchBookings();
  }

  render() {
    return (
      <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Add Booking"
          onPress={() =>
            this.props.navigation.navigate("AddBooking", {
              fetchBookings: this.fetchBookings,
            })
          }
        />

        <Text style={styles.header}>Manage Bookings</Text>
        {this.state.bookings.map((booking) => (
          <Booking
            style={{ borderWidth: 1, borderColor: "#000000" }}
            key={booking.id}
            booking={booking}
          ></Booking>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bookinginfo: {
    fontSize: 40,
    alignSelf: "stretch",
    height: 40,
    paddingTop: 10,
    textAlign: "center",
    color: "#000000",
    borderWidth: 1,
    borderColor: "#ddd",
    borderBottomColor: "#000000",
    borderBottomWidth: 0.5,
    justifyContent: "center",
  },

  header: {
    fontSize: 24,
  },
});

export default ManageBookings;
