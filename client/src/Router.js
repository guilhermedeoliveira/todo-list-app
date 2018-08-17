import { createStackNavigator } from 'react-navigation';

import LoginScreen from './modules/login/LoginScreen';
import HomeScreen from './modules/home/HomeScreen';

const Router = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home'
  }
);

export default Router;
