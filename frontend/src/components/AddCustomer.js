import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

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
          <View>
            <Text>Add Customer component</Text>
            
            <FormLabel>Name</FormLabel>
            <FormInput onChangeText={someFunction}/>
            <FormValidationMessage>Error message</FormValidationMessage>
          </View>
      )
  }



}

export default AddCustomer;