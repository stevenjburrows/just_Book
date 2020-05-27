import React, { Component } from "react";
import { Text, View, Button, ScrollView } from "react-native";
import Request from '../helpers/Request.js';
import Customer from '../containers/Customer';

class ManageCustomers extends Component {
  constructor(props) {
    // console.log("ManageCustomers:", props.navigate)
    super(props);
    this.state = {
      customers: []
    }
    this.fetchCustomers = this.fetchCustomers.bind(this);
  }

  fetchCustomers(){
    const request = new Request();

    request.get('http://localhost:8080/customers')
      .then((data) => {
        this.setState({ customers: data })
      })
  }

  componentDidMount() {
    this.fetchCustomers();
  }

  render() {
    return (
      < ScrollView style={{ flex: 2 }}>
        <View style={{alignItems: "center", justifyContent: "center"}}>

        <Button
          title="Add Customer"
          onPress={() => this.props.navigation.navigate("AddCustomer", {fetchCustomers: this.fetchCustomers})}
        />
      
        <Text>Manage Customers</Text>
        {
          this.state.customers.map((customer) => (
            <Customer key={customer.id} customer={customer}></Customer>
          ))
        }
        </View>

      </ScrollView >
    )
  }
}

export default ManageCustomers;
