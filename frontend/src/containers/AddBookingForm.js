import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';

const AddBookingForm = (props) => {

    console.log(props.Customer);
return(
    
    <View>
    <Formik
    initialValues={{ name: '', allergies: '', notes: '' }}
    onSubmit={(values, actions) => {
        actions.resetForm();
        addBooking(values);
    }}
    ></Formik>


 
      
        </View>
      )
}

const styles = StyleSheet.create({
    input: {
      alignItems: "center", 
      justifyContent: "center",
      textAlign: 'center',
      borderWidth: 1,
      borderColor: '#ddd',
      margin: 24,
      fontSize:18,
      borderRadius: 6,
    }});

export default AddBookingForm;
