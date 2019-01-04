import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Home from '../screens/Home';
import ChatTab from '../screens/Chat';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';

const MainTab = createMaterialBottomTabNavigator({
  HomeScreen: { screen: Home },
  ChatFlow: { screen: ChatTab },
  FeedScreen: { screen: Feed },
  ProfileScreen: { screen: Profile },
}, {
  initialRouteName: 'ProfileScreen',
  shifting: false,
  activeColor: '#000000',
  inactiveColor: '#C0C0C0',
  barStyle: { backgroundColor: '#FFFFFF' },
});

MainTab.navigationOptions = ({ navigation }) => {
  const findCurentRoute = (navState) => {
    if (navState.index !== undefined) {
      return findCurentRoute(navState.routes[navState.index]);
    }
    return navState.routeName;
  };

  const routeName = findCurentRoute(navigation.state);

  if (routeName === 'GroupInfoScreen') {
    return {
      header: null,
    };
  }

  return {
    headerTitle: 'Univ Some',
  };
};

export default MainTab;
