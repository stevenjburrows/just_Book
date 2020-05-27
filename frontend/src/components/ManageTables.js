import React, { Component } from 'react';
import { Text, View, Button } from "react-native";
import Request from '../helpers/Request.js';
import Table from '../containers/Table.js';
import { ScrollView } from 'react-native-gesture-handler';


class ManageTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: []
    }
    this.fetchTables = this.fetchTables.bind(this);
  }

  fetchTables(){
    const request = new Request();

    request.get('http://localhost:8080/tables')
      .then((data) => {
        this.setState({ tables: data })
      })
  }
  
  componentDidMount() {
    this.fetchTables();
  }

  render() {
    return (

      <ScrollView>
      < View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Add Table"
          onPress={() => this.props.navigation.navigate("AddTable", {fetchTables: this.fetchTables})}
        />
        <Text>Manage Tables</Text>
        {
          this.state.tables.map((table) => (
            <Table key={table.id} table={table}></Table>
          ))
        }
      </View >
      </ScrollView>
    )
  }
}

export default ManageTables;

