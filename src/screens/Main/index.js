/**
 * Created by Park Seong-beom on 2018.8
 */

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Home from './Home';
import Chat from './Chat';
import Feed from './Feed';
import Profile from './Profile';

const MainStack = createMaterialBottomTabNavigator({
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

MainStack.navigationOptions = {
  title: '유니썸',
  headerLeft: null,
};

export default MainStack;
