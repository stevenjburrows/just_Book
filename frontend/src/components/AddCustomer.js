import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Form } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Formik } from 'formik';



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
          // <View style={styles.customerForm}>
          //   <Text style={styles.header}>Add Customer</Text>

          <Formik
          initialValues={{ email: '' }}
          onSubmit={values => console.log(values)}
          >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Button onPress={handleSubmit} title="Submit" />
            </View>
          )}
        </Formik>
      );
      
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