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
  mode: 'modal',
  headerMode: 'none',
});

SearchStack.navigationOptions = {
  title: '탐색',
};

export default SearchStack;
