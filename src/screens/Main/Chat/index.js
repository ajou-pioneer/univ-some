/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import MyGroups from './MyGroups';
import Search from './Search';
import Matched from './Matched';

const AppNavigator = createMaterialTopTabNavigator({
  MyGroupsScreen: { screen: MyGroups },
  SearchScreen: { screen: Search },
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

class Chat extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

export default Chat;
