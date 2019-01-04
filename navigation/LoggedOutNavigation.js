/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Landing from '../screens/Landing'
import SignIn from '../screens/SignIn';
import SignUpStack from './SignUpNavigation';
import ProfileSettingsStack from './ProfileSettingNavigation';
import MainTab from './MainTab';

const LoggedOutNavigation = createStackNavigator({
  LandingScreen: { screen: Landing },
  SignInScreen: { screen: SignIn },
  SignUpFlow: { screen: SignUpStack },
  ProfileSettingsFlow: { screen: ProfileSettingsStack },
  MainFlow: { screen: MainTab },
}, {
  initialRouteName: 'LandingScreen',
});

export default LoggedOutNavigation;