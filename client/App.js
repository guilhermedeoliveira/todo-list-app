import React, { Component } from 'react';
import { BackHandler } from 'react-native';

import Router from './src/Router';

class App extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }

  render() {
    return <Router />;
  }
}

export default App;
