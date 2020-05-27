import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Table = (props) => {
  console.log(props);
  return (
    <View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 2,
        }}
      />
      <Text style={styles.tableinfo}>Table Number: {props.table.number}</Text>
      <Text style={styles.tableinfo}>
        No of Seats: {props.table.numberOfSeats}
      </Text>
      <Text style={styles.tableinfo}>Type: {props.table.type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tableinfo: {
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

export default Table;
