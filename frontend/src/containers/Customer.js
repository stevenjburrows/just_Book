import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Customer = (props) => {
  console.log(props);
  return (
    <View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 2,
        }}
      />
      <Text style={styles.customerinfo}>Name: {props.customer.name}</Text>
      <Text style={styles.customerinfo}>Visits: {props.customer.visits}</Text>
      <Text style={styles.customerinfo}>Notes: {props.customer.notes}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  customerinfo: {
    fontSize: 20,
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

export default Customer;
