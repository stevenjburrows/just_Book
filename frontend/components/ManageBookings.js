import * as React from "react";
import { Text } from "react-native";

// other option is to make this class based
//then do the fetch in componentDidMount of this component
// rather than passing it down.
const ManageBookings = (props) => {
  return (
    <>
      <Text>Manage Bookings</Text>
      {props.allBookings.map((booking) => (
        <Booking>{booking.name}</Booking>
      ))}
    </>
  );
};

export default ManageBookings;
