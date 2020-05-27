import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import AddCustomerForm from '../containers/AddCustomerForm'
import Request from '../helpers/Request'

const handleAddCustomer = (customer) => {
  const request = new Request();
  request.post('http://localhost:8080/customers', customer)
  .then(() => this.props.navigation.navigate("ManageCustomers"));
}

class AddCustomer extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      allergies: "",
      notes: ""
    }
  }

  render(){
    return(
          <View style={styles.customerForm}>
            <AddCustomerForm addCustomer={handleAddCustomer} />
          </View>
      )
  }
}


const styles = StyleSheet.create({
  customerForm: {
    alignSelf: 'stretch',
  },

  header: {
    fontSize: 24,
    color: '#000000',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1
  },
});

export default AddCustomer;