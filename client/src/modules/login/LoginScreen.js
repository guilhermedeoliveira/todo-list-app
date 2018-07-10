import React, { Component } from 'react';
import { shape, func } from 'prop-types';

import LoginContent from './LoginContent';

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  static propTypes = {
    navigation: shape({
      navigate: func.isRequired
    }).isRequired
  };

  navigateToHomeScreen = () => this.props.navigation.navigate('Home');

  render() {
    return <LoginContent onClickSkipText={this.navigateToHomeScreen} />;
  }
}

export default LoginScreen;
