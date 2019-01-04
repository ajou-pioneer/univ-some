/**
 * Created by Park Seong-beom on 2018.8
 */

import { createStackNavigator } from 'react-navigation';
import NameSetting from '../screens/ProfileSettings/NameSetting';
import PicturesSetting from '../screens/ProfileSettings/PicturesSetting';
import SexSetting from '../screens/ProfileSettings/SexSetting';
import BirthSetting from '../screens/ProfileSettings/BirthSetting';
import TagSetting from '../screens/ProfileSettings/TagSetting';
import BioSetting from '../screens/ProfileSettings/BioSetting';

const ProfileSettingsStack = createStackNavigator({
  NameSettingScreen: { screen: NameSetting },
  SexSettingScreen: { screen: SexSetting },
  BirthSettingScreen: { screen: BirthSetting },
  PicturesSettingScreen: { screen: PicturesSetting },
  TagSettingScreen: { screen: TagSetting },
  BioSettingScreen: { screen: BioSetting },
}, {
  initialRouteName: 'NameSettingScreen',
});

ProfileSettingsStack.navigationOptions = {
  header: null,
};

export default ProfileSettingsStack;
