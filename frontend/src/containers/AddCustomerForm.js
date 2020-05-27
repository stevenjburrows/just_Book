import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';

export default function AddCustomerForm( { addCustomer } ) {

return(
    <View style={styles.bg}>
    <Formik
    initialValues={{ name: '', allergies: '', notes: '', visits: 0 }}
    onSubmit={(values, actions) => {
        actions.resetForm()
        addCustomer(values);
    }}
    >
      {(props) => (
        <View style={StyleSheet.create}>
          <TextInput
          placeholder="Customer Name"
          onChangeText={props.handleChange('name')}
          value={props.values.name}
          style={styles.input}
          />
          <TextInput
          multiline
          placeholder="Allergies"
          onChangeText={props.handleChange('allergies')}
          value={props.values.allergies}
          style={styles.input}
          />
          <TextInput
          placeholder="Notes"
          onChangeText={props.handleChange('notes')}
          value={props.values.notes}
          style={styles.input}
          />

          <Button title='submit' color='blue' onPress={props.handleSubmit} />
        </View>
      )
      }
        </Formik>
  </View>

)}

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
    },

    bg: {
      backgroundColor: "#E3EFF2",
    }
  });