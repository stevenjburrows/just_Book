import React from 'react';
import { Text, View } from 'react-native';

const Booking = (props) => {
  console.log(props);
  return (
    <>
      <Text>{props.booking.partyName}</Text>
    </>
  )
}

export default Booking;