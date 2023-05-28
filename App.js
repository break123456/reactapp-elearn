import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from './Screen/Splash';
import LoginPage from './Screen/LoginPage';
import LoginScreen from './Screen/LoginScreen';
import SignInPage from './Screen/SignInPage';
import SignInScreen from './Screen/SignInScreen';
const nav = createStackNavigator({
  home: {
    screen: Splash,
    navigationOptions: {headerShown: false},
  },
  LoginPage: {
    screen: LoginPage,
    navigationOptions: {headerShown: false},
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {headerShown: false},
  },
  SignInPage: {
    screen: SignInPage,
    navigationOptions: {headerShown: false},
  },
  SignInScreen: {
    screen: SignInScreen,
    navigationOptions: {headerShown: false},
  },
});

export default createAppContainer(nav);
