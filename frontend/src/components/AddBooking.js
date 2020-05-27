import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Request from '../helpers/Request';
import AddBookingForm from '../containers/AddBookingForm'

class AddBooking extends Component {
    constructor(props){
        super(props)
        this.state = {
            customers: [],
            tables: []
        }

        this.fetchCustomers = this.fetchCustomers.bind(this);
        this.fetchTables = this.fetchTables.bind(this);
        this.handleAddBooking = this.handleAddBooking.bind(this);
    }
    
    handleAddBooking (booking) {
        const request = new Request();
        request.post('http://localhost:8080/bookings', booking)
        .then(() => {
          this.props.route.params.fetchBookings();
          this.props.navigation.goBack() 
        });
        console.log("this is the booking info", booking);
        
      }
      
      fetchCustomers(){
        const request = new Request();
        request.get('http://localhost:8080/customers')
          .then((data) => {
            this.setState({ customers: data })
          })
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
        this.fetchCustomers();
      }

      render() {
          if (!this.state.customers) {
              return(<Text>Loading...</Text>)
          }
    return(
        <View style={styles.form}>
          <AddBookingForm props={this.props} addBooking={this.handleAddBooking} customers={this.state.customers} tables={this.state.tables} />
        </View>
        )
    }
}


const styles = StyleSheet.create({
form: {
  alignSelf: 'stretch',
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

export default AddBooking