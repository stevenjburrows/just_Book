function BookingListScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
  
  const Stack = createStackNavigator();
  
  export default class BookingListScreen extends React.Component {
    render() {
        return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="BookingList" component={BookingsListScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
