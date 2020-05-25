import * as React from "react";
import { Text } from "react-native";

const ManageTables = (props) => {
  return (
    <>
      <Text>Manage Tables</Text>
      {props.allTables.map((booking) => (
        <Table>{table.name}</Table>
      ))}
    </>
  );
};

export default ManageTables;
