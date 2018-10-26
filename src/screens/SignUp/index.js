/**
 * Created by Park Seong-beom on 2018.8
 */

import { createStackNavigator } from 'react-navigation';
import EmailSetting from './EmailSetting';
import EmailVerification from './EmailVerification';
import PasswordSetting from './PasswordSetting';
import Greeting from './Greeting';

const SignUpStack = createStackNavigator({
  EmailSettingScreen: { screen: EmailSetting },
  EmailVerificationScreen: { screen: EmailVerification },
  PasswordSettingScreen: { screen: PasswordSetting },
  GreetingScreen: { screen: Greeting },
}, {
  initialRouteName: 'EmailSettingScreen',
});

SignUpStack.navigationOptions = {
  header: null,
};

export default SignUpStack;
