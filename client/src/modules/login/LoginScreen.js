import React, { Component } from 'react';
import { shape, func } from 'prop-types';

import { SafeContainer } from '../../components/shared';
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
    return (
      <SafeContainer>
        <LoginContent onClickSkipText={this.navigateToHomeScreen} />
      </SafeContainer>
    );
  }
}

export default LoginScreen;
