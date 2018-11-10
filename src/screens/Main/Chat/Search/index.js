/**
 * Created by Park Seong-beom on 2018.8
 */

import { createStackNavigator } from 'react-navigation';
import Search from './GroupList';
import GroupInfo from './GroupInfo';

const SearchStack = createStackNavigator({
  GroupListScreen: { screen: Search },
  GroupInfoScreen: { screen: GroupInfo },
}, {
  initialRouteName: 'GroupListScreen',
});

SearchStack.navigationOptions = ({ navigation }) => {
  if (navigation.state.index > 0) {
    return { tabBarVisible: false };
  }

  return {
    title: '그룹 탐색',
    header: null,
  };
};

export default SearchStack;
