import React from 'react';
import { Text, View } from 'react-native';

const Table = (props) => {
  console.log(props);
  return (
    <>
      <Text>{props.table.type}</Text>
    </>
  )
}

export default Table;

