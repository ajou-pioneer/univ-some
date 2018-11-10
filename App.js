/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Landing from './src/screens/Landing';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import EmailVerification from './src/screens/SignUp/EmailVerification';
import PasswordSetting from './src/screens/SignUp/PasswordSetting';
import Greeting from './src/screens/SignUp/Greeting';
import NameSetting from './src/screens/ProfileSettings/NameSetting';
import SexSetting from './src/screens/ProfileSettings/SexSetting';
import BirthSetting from './src/screens/ProfileSettings/BirthSetting';
import PicturesSetting from './src/screens/ProfileSettings/PicturesSetting';
import BioSetting from './src/screens/ProfileSettings/BioSetting';
import TagSetting from './src/screens/ProfileSettings/TagSetting';
import Main from './src/screens/Main';

const AppNavigator = createStackNavigator({
  LandingScreen: { screen: Landing },
  SignInScreen: { screen: SignIn },
  SignUpScreen: { screen: SignUp },
  EmailVerificationScreen: { screen: EmailVerification },
  PasswordSettingScreen: { screen: PasswordSetting },
  GreetingScreen: { screen: Greeting },
  NameSettingScreen: { screen: NameSetting },
  SexSettingScreen: { screen: SexSetting },
  BirthSettingScreen: { screen: BirthSetting },
  PicturesSettingScreen: { screen: PicturesSetting },
  BioSettingScreen: { screen: BioSetting },
  TagSettingScreen: { screen: TagSetting },
  MainScreen: { screen: Main },
}, {
  initialRouteName: 'MainScreen',
});

class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

export default App;
