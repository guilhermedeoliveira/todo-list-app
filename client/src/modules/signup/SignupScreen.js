import React, { Component } from 'react';
import { shape, func } from 'prop-types';

import { SafeContainer, TextNavigate } from '../../components/shared';
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

  navigateToHomeScreen = () => this.props.navigation.navigate('Home');

  render() {
    return (
      <SafeContainer>
        <SignupForm onSubmitForm={this.onSubmitFormLogin} />
        <TextNavigate onPress={this.navigateToHomeScreen}>
          Create Account
        </TextNavigate>
      </SafeContainer>
    );
  }
}

export default SignupScreen;
