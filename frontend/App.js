import  React, { Component} from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import ManageBookings from './components/ManageBookings';

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      bookings: []
    }
  }
  componentDidMount(){

    // do fetch for datat here and set into state
    // eg fetch to get all bookings 
    // setState({bookings: bookings})
  }
  render() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="ManageBookings" >
            {props => <ManageBookings allBookings={this.state.bookings} /> }
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
  }
}

export default App;




// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import {Tile} from 'react-native-elements';
// import { SafeAreaView, Text } from 'react-native';
// import myImage from './assets/justBook.jpg';
// import styled from 'styled-components';
// import {Tile} from 'react-native-elements';
// import Home from './components/HomeScreen';
// import myImage from './assets/justBook.jpg';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// export default class App extends React.Component {
//   render() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={HomeScreen} />
//             <SafeAreaView>
//               <Home></Home>
//             </SafeAreaView>
//         </Stack.Navigator>
//       </NavigationContainer>
//     )
//   }
// }



