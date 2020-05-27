import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import AddCustomerForm from '../containers/AddCustomerForm'

const addCustomer = (customer) => {
  console.log(customer);
}

class AddCustomer extends Component {
  constructor(props){
    // console.log("ManageCustomers:", props.navigate)
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
            <AddCustomerForm addCustomer={addCustomer} />

            {/* <Text style={styles.header}>Add Customer</Text>
            <TextInput placeholder="Customer Name"></TextInput>
            {/* {/* <FormLabel>Name</FormLabel> */}
            {/* <FormInput onChangeText={console.log()}/> */}
            {/* <FormValidationMessage>Error message</FormValidationMessage> */} 
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