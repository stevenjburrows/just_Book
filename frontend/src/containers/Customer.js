import React from 'react';
import { Text, View } from "react-native";

const Customer = (props) => {
  console.log(props);
  return (
    <>
      <Text>{props.customer.name} - visits: {props.customer.visits}</Text>
    </>
  )
}

export default Customer;
