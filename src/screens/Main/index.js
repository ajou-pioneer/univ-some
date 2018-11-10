/**
 * Created by Park Seong-beom on 2018.8
 */

import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Home from './Home';
import Chat from './Chat';
import Feed from './Feed';
import Profile from './Profile';

const AppNavigator = createBottomTabNavigator({
  HomeScreen: { screen: Home },
  ChatScreen: { screen: Chat },
  FeedScreen: { screen: Feed },
  ProfileScreen: { screen: Profile },
}, {
  initialRouteName: 'HomeScreen',
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
