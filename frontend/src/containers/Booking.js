import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Booking = (props) => {
  return (
    <>
      <Text>Party Name: {props.booking.partyName}</Text>
      <Text>Party Size: {props.booking.partySize}</Text>
      <Text>Date: {props.booking.date}</Text>
      <Text>Start: {props.booking.start}</Text>
      <Text>End: {props.booking.end}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  bookingInfo: {
    fontSize: 18,
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
});

export default Booking;
