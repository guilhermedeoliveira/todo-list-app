import React from 'react';

import { SafeContainer } from '../../components/shared';
import {
  WelcomeText,
  SignInText,
  SocialComponentsWrapper,
  DoNotSyncText
} from './Login.styles';
import Header from '../../components/Header';
import Social from './Social';

import styles from '../../utils/Style';

const LoginScreen = () => (
  <SafeContainer>
    <Header title="ToDo List App" />
    <WelcomeText fontSize={styles.fontSize.large}>
      Welcome to your To-do list App
    </WelcomeText>
    <SignInText fontSize={styles.fontSize.large}>
      Please, sign in to sync your task
    </SignInText>
    <SocialComponentsWrapper>
      <Social
        iconName="facebook-official"
        socialName="Facebook"
        color={styles.colors.facebookColor}
      />
      <Social
        iconName="google"
        socialName="Google"
        color={styles.colors.googleColor}
      />
    </SocialComponentsWrapper>
    <DoNotSyncText fontSize={styles.fontSize.regular} onPress={() => {}} >
      Skip, I do not want to sync my tasks
    </DoNotSyncText>
  </SafeContainer>
);

LoginScreen.navigationOptions = {
  header: null
};

export default LoginScreen;
