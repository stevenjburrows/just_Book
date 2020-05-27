import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Booking = (props) => {
  return (
<<<<<<< HEAD
    <>
      <Text>Party Name: {props.booking.partyName}</Text>
      <Text>Party Size: {props.booking.partySize}</Text>
      <Text>Date: {props.booking.date}</Text>
      <Text>Start: {props.booking.start}</Text>
      <Text>End: {props.booking.end}</Text>
    </>
=======
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
>>>>>>> development
  );
};

const styles = StyleSheet.create({
  bookinginfo: {
    fontSize: 18,
    alignSelf: "stretch",
    height: 40,
<<<<<<< HEAD
    paddingTop: 10,
    textAlign: "center",
    color: "#000000",
    borderWidth: 1,
    borderColor: "#ddd",
    borderBottomColor: "#000000",
    borderBottomWidth: 0.5,
    justifyContent: "center",
  },
=======
    paddingTop: 5,
    textAlign: "center",
    color: "#000000",
    justifyContent: "center",
  },

  applyLine: {
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
  },
>>>>>>> development
});

export default Booking;
