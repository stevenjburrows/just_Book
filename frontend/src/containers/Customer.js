import React from 'react';
import { Text, View } from "react-native";

const Customer = (props) => {
  console.log(props);
  return (
    <>
      <Text>Name: {props.customer.name}</Text>
      <Text>Visits: {props.customer.visits}</Text>
      <Text>Notes: {props.customer.notes}</Text>
    </>
  )
}

export default Customer;
