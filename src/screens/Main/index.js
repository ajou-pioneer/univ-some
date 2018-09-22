/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Home from './Home';
import Chat from './Chat';
import Feed from './Feed';
import Profile from './Profile';

const AppNavigator = createMaterialBottomTabNavigator({
  HomeScreen: { screen: Home },
  ChatScreen: { screen: Chat },
  FeedScreen: { screen: Feed },
  ProfileScreen: { screen: Profile },
}, {
  initialRouteName: 'HomeScreen',
  shifting: false,
  activeColor: '#000000',
  inactiveColor: '#C0C0C0',
  barStyle: { backgroundColor: '#FFFFFF' },
});

class Main extends React.Component {
  static navigationOptions = {
    title: 'Withsome+',
  };

  render() {
    return (
      <AppNavigator />
    );
  }
}

export default Main;
