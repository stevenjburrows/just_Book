import React, { Component } from "react";
import { Text, View, Button, ScrollView, StyleSheet} from "react-native";
import Request from "../helpers/Request.js";
import Customer from "../containers/Customer";

class ManageCustomers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };
    this.fetchCustomers = this.fetchCustomers.bind(this);
    this.deleteCustomer = this.deleteCustomer.bind(this);
  }

  fetchCustomers() {
    const request = new Request();
    request.get('http://localhost:8080/customers')
      .then((data) => {
        this.setState({ customers: data })
      })
  }

  deleteCustomer(id){
    const request = new Request();
    const url = 'http://localhost:8080/customers/' + id;
    request.delete(url)
      .then(() => this.fetchCustomers())
  }

  componentDidMount() {
    this.fetchCustomers();
  }

  render() {
    return (
      < ScrollView style={styles.bg}>
        <View style={{flex: 2, alignItems: "center", justifyContent: "center"}} >

        <Button
          title="Add Customer"
          onPress={() => this.props.navigation.navigate("AddCustomer", {fetchCustomers: this.fetchCustomers})}
        />
      
        <Text>Manage Customers</Text>
        {
          this.state.customers.map((customer) => (
            <View key={customer.id + 1000}>
              <Customer key={customer.id + 10000} customer={customer}></Customer>
              <Button
                title="Delete"
                key={customer.id}
                onPress={() => this.deleteCustomer(customer.id)}
                />
            </View>
          ))
        }
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

  image: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center"
  },

  bg: {
    backgroundColor: "#E3EFF2",
  },
});

export default ManageCustomers;
