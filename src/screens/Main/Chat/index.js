/**
 * Created by Park Seong-beom on 2018.8
 */

import { createMaterialTopTabNavigator } from 'react-navigation';
import MyGroups from './MyGroups';
import SearchStack from './Search';
import Matched from './Matched';

const ChatTab = createMaterialTopTabNavigator({
  MyGroupsScreen: { screen: MyGroups },
  SearchFlow: { screen: SearchStack },
  MatchedScreen: { screen: Matched },
}, {
  initialRouteName: 'MyGroupsScreen',
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#000000',
    inactiveTintColor: '#000000',
    indicatorStyle: {
      backgroundColor: '#000000',
    },
    style: {
      backgroundColor: '#FFFFFF',
    },
  },
});

ChatTab.navigationOptions = {
  title: '채팅',
};

export default ChatTab;
