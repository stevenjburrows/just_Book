import React, { Component } from "react";
import { Text, View, Button, Image, StyleSheet, Animated } from "react-native";

class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  };

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                }),
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.bg}>
      <ImageLoader
        style={styles.logo}
        source={require("../../assets/JustBook.jpg")}
      />
      <Text>Welcome.</Text>

      <Button
        title="Manage Bookings"
        onPress={() => navigation.navigate("ManageBookings")}
      />

      <Button
        title="Manage Tables"
        onPress={() => navigation.navigate("ManageTables")}
      />

      <Button
        title="Manage Customers"
        onPress={() => navigation.navigate("ManageCustomers")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  logo: {
    width: 250,
    height: 250,
    resizeMode: "stretch",
    borderColor: "#000000",
    borderRadius: 250 / 2,
    marginBottom: 80,
  },

  bg: {
    backgroundColor: "#C1DBE3",
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
