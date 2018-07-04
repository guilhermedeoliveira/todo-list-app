import React, { Component } from 'react';
import { Text } from 'react-native';

import { SafeContainer } from './Home.styles';
import Header from './Header';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <SafeContainer>
        <Header title="My Tasks" />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </SafeContainer>
    );
  }
}

export default HomeScreen;
