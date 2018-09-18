import React, { Component } from 'react';
import { shape, func } from 'prop-types';

import { SafeContainer } from '../../components/shared';
import SignupForm from './SignupForm';
import { GoToSignupText } from '../login/Login.styles';

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
        <GoToSignupText onPress={this.navigateToHomeScreen}>
          Create Account
        </GoToSignupText>
      </SafeContainer>
    );
  }
}

export default SignupScreen;
