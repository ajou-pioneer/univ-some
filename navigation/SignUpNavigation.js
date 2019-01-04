/**
 * Created by Park Seong-beom on 2018.8
 */

import { createStackNavigator } from 'react-navigation';
import EmailSetting from '../screens/SignUp/EmailSetting';
import EmailVerification from '../screens/SignUp/EmailVerification';
import PasswordSetting from '../screens/SignUp/PasswordSetting';
import Greeting from '../screens/SignUp/Greeting';

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
