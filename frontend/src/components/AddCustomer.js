import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

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
          <View>
            <Text>Add Customer component</Text>

          </View>
      )
  }
}




export default AddCustomer;