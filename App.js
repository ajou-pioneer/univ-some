/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Landing from './src/screens/Landing';
import SignIn from './src/screens/SignIn';
import SignUpStack from './src/screens/SignUp';
import ProfileSettingsStack from './src/screens/ProfileSettings';
import MainTab from './src/screens/Main';

const AppNavigator = createStackNavigator({
  LandingScreen: { screen: Landing },
  SignInScreen: { screen: SignIn },
  SignUpFlow: { screen: SignUpStack },
  ProfileSettingsFlow: { screen: ProfileSettingsStack },
  MainFlow: { screen: MainTab },
}, {
  initialRouteName: 'MainFlow',
});

class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

export default App;
