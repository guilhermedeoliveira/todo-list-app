import { createStackNavigator } from 'react-navigation';

import HomeScreen from './modules/home/HomeScreen';

const Router = createStackNavigator({
  Home: HomeScreen
});

export default Router;
