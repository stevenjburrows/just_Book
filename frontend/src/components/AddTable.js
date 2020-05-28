import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Request from '../helpers/Request';
import AddTableForm from '../containers/AddTableForm';

class AddTable extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    this.handleAddTable = this.handleAddTable.bind(this);
    }
    

    handleAddTable (table) {
        const request = new Request();
        request.post('http://localhost:8080/tables', table)
        .then(() => {
          this.props.route.params.fetchTables();
          this.props.navigation.goBack() 
        });
      }

      render() {
    return(
        <View style={styles.form}>
          <AddTableForm addTable={this.handleAddTable} />
        </View>
          )
       }
    }


const styles = StyleSheet.create({
form: {
  alignSelf: 'stretch',
  backgroundColor: "#E3EFF2",
  flex: 1,
},

header: {
  fontSize: 24,
  color: '#000000',
  paddingBottom: 10,
  marginBottom: 40,
  borderBottomColor: '#199187',
  borderBottomWidth: 1
},
});

export default AddTable;