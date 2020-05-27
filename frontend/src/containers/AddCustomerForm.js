import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Form } from 'react-native';
import { Formik } from 'formik';

export default function AddCustomerForm( { addCustomer } ) {

return(
    //formik yop
    <View style={StyleSheet.create}>
    <Formik
    initialValues={{ name: '', allergies: '', notes: '' }}
    onSubmit={(values, actions) => {
        actions.resetForm()
        addCustomer(values);
    }}
    >
      {(props) => (
        <View>
          <TextInput
          placeholder="Customer Name"
          onChangeText={props.handleChange('name')}
          value={props.values.title}
          />
          <TextInput
          multiline
          placeholder="Allergies"
          onChangeText={props.handleChange('allergies')}
          value={props.values.body}
          />
          <TextInput
          placeholder="Notes"
          onChangeText={props.handleChange('notes')}
          value={props.values.rating}
          // keyboardType='numeric'
          />

          <Button title='submit' color='blue' onPress={props.handleSubmit} />
        </View>
      )
      }
        </Formik>
  </View>

)}

const styles = StyleSheet.create({
    inout: {
      alignItems: "center", 
      justifyContent: "center",
      textAlign: 'center',
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      fontSize:18,
      borderRadius: 6,
    }});