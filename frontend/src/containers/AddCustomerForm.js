import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Form } from 'react-native';
import { Formik } from 'formik';

export default function AddCustomerForm( { addCustomer } ) {

return(
    // <View style={styles.customerForm}>
    //   <Text style={styles.header}>Add Customer</Text>
    //formik yop
    <View style={StyleSheet.create}>
    <Formik
    initialValues={{ title: '', body: '', rating: '' }}
    onSubmit={(values, actions) => {
        actions.resetForm()
        addCustomer(values);
    }}
    >
      {(props) => (
        <View>
          <TextInput
          placeholder="Review title"
          onChangeText={props.handleChange('title')}
          value={props.values.title}
          />
          <TextInput
          multiline
          placeholder="Review body"
          onChangeText={props.handleChange('body')}
          value={props.values.body}
          />
          <TextInput
          placeholder="Rating (1-5)"
          onChangeText={props.handleChange('rating')}
          value={props.values.rating}
          keyboardType='numeric'
          />

          <Button title='submit' color='maroon' onPress={props.handleSubmit} />
        </View>
      )
      }
        </Formik>
  </View>

)}

const styles = StyleSheet.create({
    inout: {
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      fontSize:18,
      borderRadius: 6,
    }});