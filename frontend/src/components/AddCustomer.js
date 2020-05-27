import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import AddCustomerForm from '../containers/AddCustomerForm';
import Request from '../helpers/Request';

class AddCustomer extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
    this.handleAddCustomer = this.handleAddCustomer.bind(this);
  }

  handleAddCustomer (customer) {
    const request = new Request();
    request.post('http://localhost:8080/customers', customer)
    .then(() => {
      this.props.route.params.fetchCustomers();
      this.props.navigation.goBack() 
    });
  }

  render(){
    return(
          <View style={styles.customerForm}>
            <AddCustomerForm addCustomer={this.handleAddCustomer} />
          </View>
      )
  }
}


const styles = StyleSheet.create({
  customerForm: {
    alignSelf: 'stretch',
    backgroundColor: '#E3EFF2'
  },

  header: {
    fontSize: 24,
    color: '#000000',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1
  },
  
  inputBox: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  }
});

export default AddCustomer;