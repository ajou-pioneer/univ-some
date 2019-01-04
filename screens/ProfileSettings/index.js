/**
 * Created by Park Seong-beom on 2018.8
 */

import { createStackNavigator } from 'react-navigation';
import NameSetting from './NameSetting';
import PicturesSetting from './PicturesSetting';
import SexSetting from './SexSetting';
import BirthSetting from './BirthSetting';
import TagSetting from './TagSetting';
import BioSetting from './BioSetting';

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
