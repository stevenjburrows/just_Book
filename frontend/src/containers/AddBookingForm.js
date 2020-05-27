import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { Formik, FieldArray, Field, Form } from "formik";

const AddBookingForm = (props) => {
  console.log("this is from line 7 of add booking form", props);
  const allCustomers = props.customers;
  const allTables = props.tables;
  const styles = StyleSheet.create({
    input: {
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      borderWidth: 1,
      borderColor: "#ddd",
      margin: 24,
      fontSize: 18,
      borderRadius: 6,
    },
  });

  return (
    <View style={styles.bg}>
    <Formik
      initialValues={{
        partyName: "",
        partySize: "",
        date: "date dd-mm-yyyy",
        startTime: "start time hh:mm",
        endTime: "end time hh:mm"
      }}
      onSubmit={(values, actions) => {
        actions.resetForm();
        props.addBooking(values);
      }}
    >
      {(props) => (
        <View>
          {/* <Form onSubmit={handleSubmit}> */}
            <label>Select Customer</label>
            <select>
              {allCustomers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>

            <label>Select Table</label>
            <select>
              {allTables.map((table) => (
                <option key={table.id} value={table.id}>
                  {table.number}
                </option>
              ))}
            </select>

            <TextInput
              placeholder="Party Name"
              onChangeText={props.handleChange("partyName")}
              value={props.values.partyName}
            />
            <TextInput
                placeholder="Party size"
                onChangeText={props.handleChange('partySize')}
                value={props.values.partySize}
                keyboardType='numeric'
                style={styles.input}
                />

                <TextInput
                placeholder="Party date"
                onChangeText={props.handleChange('date')}
                value={props.values.date}

                />

                <TextInput
                placeholder="Start Time"
                onChangeText={props.handleChange('startTime')}
                value={props.values.startTime}

                />

                <TextInput
                placeholder="End Time"
                onChangeText={props.handleChange('endTime')}
                value={props.values.endTime}

                />  
                <Button title='submit' color='blue' onPress={props.handleSubmit} />
          {/* </Form> */}
        </View>
      )}
    </Formik>
    </View>

  );
};

export default AddBookingForm;
