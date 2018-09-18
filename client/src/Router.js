import { createStackNavigator } from 'react-navigation';

import LoginScreen from './modules/login/LoginScreen';
import SignupScreen from './modules/signup/SignupScreen';
import HomeScreen from './modules/home/HomeScreen';

const Router = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: 'Login'
  }
);

export default Router;
