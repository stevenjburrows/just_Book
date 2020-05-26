import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import Request from '../helpers/Request.js';
import Customer from '../containers/Customer';

class ManageCustomers extends Component {
  constructor(props) {
    // console.log("ManageCustomers:", props.navigate)
    super(props);
    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    const request = new Request();

    request.get('http://localhost:8080/customers')
      .then((data) => {
        this.setState({ customers: data })
      })
  }

  // handleFormInput(formData)(
  //   .then my api call
  // )

  render() {
    return (
      < View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>

      <Button
        title="Add Customer"
        onPress={() => this.props.navigation.navigate("AddCustomer")}
      />

        <Text>Manage Customers</Text>
        {
          this.state.customers.map((customer) => (
            <Customer key={customer.id} customer={customer}></Customer>
          ))
        }

      </View >
    )
  }
}

export default ManageCustomers;
