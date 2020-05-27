import React, { Component } from "react";
import { Text, View, Button, ScrollView, StyleSheet } from "react-native";
import Request from "../helpers/Request.js";
import Customer from "../containers/Customer";

class ManageCustomers extends Component {
  constructor(props) {
    // console.log("ManageCustomers:", props.navigate)
    super(props);
    this.state = {
      customers: [],
    };
    this.fetchCustomers = this.fetchCustomers.bind(this);
  }

  fetchCustomers() {
    const request = new Request();

    request.get("http://localhost:8080/customers").then((data) => {
      this.setState({ customers: data });
    });
  }

  componentDidMount() {
    this.fetchCustomers();
  }

  render() {
    return (
      <ScrollView style={{ flex: 2 }}>
        <View
          style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
        >
          <Button
            title="Add Customer"
            onPress={() =>
              this.props.navigation.navigate("AddCustomer", {
                fetchCustomers: this.fetchCustomers,
              })
            }
          />

          <Text style={styles.header}>Manage Customers</Text>
          {this.state.customers.map((customer) => (
            <Customer key={customer.id} customer={customer}></Customer>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "#FCB1A6",
  },

  header: {
    fontSize: 24,
  },
});

export default ManageCustomers;
