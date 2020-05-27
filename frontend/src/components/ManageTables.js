import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from "react-native";
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

  deleteTable(id){
    const request = new Request();
    const url = 'http://localhost:8080/tables/' + id;
    request.delete(url)
      .then(() => this.fetchTables())
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
        <Text style={styles.header}>Manage Tables</Text>
        {
          this.state.tables.map((table) => (
            <View key={table.id + 1000}>
              <Table key={table.id +10000} table={table}></Table>
              <Button
                title="Delete"
                key={table.id}
                onPress={() => this.deleteTable(table.id)}
                />
              </View>
          ))
        }
      </View >
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
}})

export default ManageTables;

