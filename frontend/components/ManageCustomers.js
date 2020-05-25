import * as React from "react";
import { Text } from "react-native";

const ManageCustomers = (props) => {
  return (
    <>
      <Text>Manage Customers</Text>
      {props.allCustomers.map((customer) => (
        <Customer>{customer.name}</Customer>
      ))}
    </>
  );
};

export default ManageCustomers;
