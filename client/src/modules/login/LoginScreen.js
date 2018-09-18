import React, { Component } from 'react';
import { shape, func } from 'prop-types';

import { SafeContainer, TextNavigate } from '../../components/shared';
import Header from '../../components/Header';
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

  navigateToSignupScreen = () => this.props.navigation.navigate('Signup');

  render() {
    return (
      <SafeContainer>
        <Header title="Login" />
        <LoginForm onSubmitForm={this.onSubmitFormLogin} />
        <TextNavigate onPress={this.navigateToSignupScreen}>
          Create Account
        </TextNavigate>
      </SafeContainer>
    );
  }
}

export default LoginScreen;
