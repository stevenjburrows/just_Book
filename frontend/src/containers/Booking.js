import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Booking = (props) => {
  return (
    <View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 2,
        }}
      />
      <Text style={styles.bookinginfo}>
        Party Name: {props.booking.partyName}
      </Text>
      <Text style={styles.bookinginfo}>
        Party Size: {props.booking.partySize}
      </Text>
      <Text style={styles.bookinginfo}>Date: {props.booking.date}</Text>
      <Text style={styles.bookinginfo}>Start: {props.booking.start}</Text>
      <Text style={styles.bookinginfo}>End: {props.booking.end}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bookinginfo: {
    fontSize: 18,
    alignSelf: "stretch",
    height: 40,
    paddingTop: 5,
    textAlign: "center",
    color: "#000000",
    justifyContent: "center",
  },

  applyLine: {
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
  },
});

export default Booking;
