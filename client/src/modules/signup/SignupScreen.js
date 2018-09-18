import React, { Component } from 'react';
import { shape, func } from 'prop-types';

import { SafeContainer, TextNavigate } from '../../components/shared';
import Header from '../../components/Header';
import SignupForm from './SignupForm';

class SignupScreen extends Component {
  static navigationOptions = {
    header: null
  };

  static propTypes = {
    navigation: shape({
      navigate: func.isRequired
    }).isRequired
  };

  onSubmitFormLogin = () => {}

  navigateToLoginScreen = () => this.props.navigation.navigate('Login');

  render() {
    return (
      <SafeContainer>
        <Header title="Signup" />
        <SignupForm onSubmitForm={this.onSubmitFormLogin} />
        <TextNavigate onPress={this.navigateToLoginScreen}>
          Go Back To Login
        </TextNavigate>
      </SafeContainer>
    );
  }
}

export default SignupScreen;
