import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Table = (props) => {
  console.log(props);
  return (
    <>
      <Text style={styles.tableinfo}>Table Number: {props.table.number}</Text>
      <Text style={styles.tableinfo}>No of Seats: {props.table.numberOfSeats}</Text>
      <Text style={styles.tableinfo}>Type: {props.table.type}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  tableinfo: {
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

export default Table;

