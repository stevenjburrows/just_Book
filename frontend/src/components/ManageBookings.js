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
    this.deleteBooking = this.deleteBooking.bind(this);
  }

  fetchBookings() {
    const request = new Request();
    request.get("http://localhost:8080/bookings").then((data) => {
      this.setState({ bookings: data });
    });
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
      <View style={styles.bg}>
        <Button
          title="Add Booking"
          onPress={() =>
            this.props.navigation.navigate("AddBooking", {
              fetchBookings: this.fetchBookings,
            })
          }
        />


        <Text style={styles.header}>Manage Bookings</Text>
        {
          this.state.bookings.map((booking) => (
            <View key={booking.id + 1000}>
              <Booking style={{ borderWidth: 1, borderColor: "#000000" }} key={booking.id + 10000} booking={booking}></Booking>
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

  bg: {
    backgroundColor: "#E3EFF2",
    flex: 2, 
    alignItems: "center", 
  },

  header: {
    fontSize: 24,
  },

  
});

export default ManageBookings;
