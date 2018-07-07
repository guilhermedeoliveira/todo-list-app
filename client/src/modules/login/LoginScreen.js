import React from 'react';

import { SafeContainer } from '../../components/shared';
import Header from '../../components/Header';
import StyledText from '../../components/StyledText';

const LoginScreen = () => (
  <SafeContainer>
    <Header title="ToDo List App" />
    <StyledText>Login</StyledText>
  </SafeContainer>
);

LoginScreen.navigationOptions = {
  header: null
};

export default LoginScreen;
