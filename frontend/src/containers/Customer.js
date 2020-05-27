import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Button } from 'semantic-ui-react';

const Customer = (props) => {
  return (
    <>
      <Text style={styles.customerInfo}>Name: {props.customer.name}</Text>
      <Text style={styles.customerInfo}>Visits: {props.customer.visits}</Text>
      <Text style={styles.customerInfo}>Notes: {props.customer.notes}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  customerInfo: {
    fontSize: 18,
    alignSelf: 'stretch',
    height: 40,
    paddingTop: 10,
    textAlign: 'center',
    color: '#000000',
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomColor: '#000000',
    borderBottomWidth: 0.5,
    justifyContent: 'center'
  }
})

export default Customer;
