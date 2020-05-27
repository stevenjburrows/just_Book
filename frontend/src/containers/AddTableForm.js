import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';

function AddTableForm( {addTable} ) {

return(
    <View style={StyleSheet.create}>
    <Formik
    initialValues={{ number: null, numberOfSeats: null, type: '' }}
    onSubmit={(values, actions) => {
        actions.resetForm()
        addTable(values);
    }}
    >
      {(props) => (
        <View style={StyleSheet.create}>
          <TextInput
          style={StyleSheet.create}
          placeholder="Table Number"
          onChangeText={props.handleChange('number')}
          value={props.values.number}
          keyboardType='numeric'
          />
          <TextInput
          placeholder="Number of Seats"
          onChangeText={props.handleChange('numberOfSeats')}
          value={props.values.numberOfSeats}
          keyboardType='numeric'
          />
          <TextInput
          placeholder="Type"
          onChangeText={props.handleChange('type')}
          value={props.values.type}
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

    export default AddTableForm;