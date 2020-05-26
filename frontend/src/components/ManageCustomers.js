import React, { Component } from "react";
import { Text, View } from "react-native";
import Request from '../helpers/Request.js';
import Customer from '../containers/Customer';


class ManageCustomers extends Component {
  constructor(props) {
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

  render() {
    return (
      < View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
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
