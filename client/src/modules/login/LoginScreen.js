import React from 'react';

import { SafeContainer } from '../../components/shared';
import Header from '../../components/Header';
import Social from './Social';

import styles from '../../utils/Style';

const LoginScreen = () => (
  <SafeContainer>
    <Header title="ToDo List App" />
    <Social
      iconName="google"
      socialName="Google"
      color={styles.colors.googleColor}
    />
  </SafeContainer>
);

LoginScreen.navigationOptions = {
  header: null
};

export default LoginScreen;
