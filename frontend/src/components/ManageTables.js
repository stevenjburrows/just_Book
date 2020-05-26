import React, { Component } from 'react';
import { Text, View } from "react-native";
import Request from '../helpers/Request.js';
import Table from '../containers/Table.js';


class ManageTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: []
    }
  }

  componentDidMount() {
    const request = new Request();

    request.get('http://localhost:8080/tables')
      .then((data) => {
        this.setState({ tables: data })
      })
  }

  render() {
    return (
      < View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
        <Text>Manage Tables</Text>
        {
          this.state.tables.map((table) => (
            <Table key={table.id} table={table}></Table>
          ))
        }
      </View >
    )
  }
}

export default ManageTables;

// const ManageTables = (props) => {
//   return (
//     <>
//       <Text>Manage Tables</Text>
//       {props.allTables.map((booking) => (
//         <Table>{table.name}</Table>
//       ))}
//     </>
//   );
// };
