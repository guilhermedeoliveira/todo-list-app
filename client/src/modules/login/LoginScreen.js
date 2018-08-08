import React, { Component } from 'react';
import { shape, func } from 'prop-types';

import { SafeContainer } from '../../components/shared';
import LoginForm from './LoginForm';

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  static propTypes = {
    navigation: shape({
      navigate: func.isRequired
    }).isRequired
  };

  onSubmitFormLogin = () => {}

  navigateToHomeScreen = () => this.props.navigation.navigate('Home');

  render() {
    return (
      <SafeContainer>
        <LoginForm onSubmitForm={this.onSubmitFormLogin} />
      </SafeContainer>
    );
  }
}

export default LoginScreen;
