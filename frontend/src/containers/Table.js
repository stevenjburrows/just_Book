import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Table = (props) => {
  console.log(props);
  return (
    <>
      <Text style={styles.textInput}>Table Number: {props.table.number}</Text>
      <Text style={styles.textInput}>No of Seats: {props.table.numberOfSeats}</Text>
      <Text style={styles.textInput}>Type: {props.table.type}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 3,
    textAlign: 
    color: '#000000',
    borderBottomColor: '#000000',
    borderBottomWidth: 0.5,
    justifyContent: 'center'
  }
})

export default Table;

