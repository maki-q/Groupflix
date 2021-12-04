import * as React from 'react';
import { Image } from 'react-native';
import { MovieScreen, TvScreen, SearchScreen, WatchedScreen } from './main';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const NavbarOptions = ({ route }) => ({
  tabBarStyle: { backgroundColor: '#0f0f0f' },
  tabBarIcon: ({ focused }) => {
    let iconName;
    switch(route.name) {
      case 'Movies':
        iconName = focused
        ? require('../assets/images/icons/SelectedMovie.png')
        : require('../assets/images/icons/UnselectedMovie.png');
        break;
      case 'TV Shows':
        iconName = focused
        ? require('../assets/images/icons/SelectedTv.png')
        : require('../assets/images/icons/UnselectedTv.png');
        break;
      case 'Watch':
        iconName = focused
        ? require('../assets/images/icons/SelectedFriends.png')
        : require('../assets/images/icons/UnselectedFriends.png');
        break;
      case 'Search':
        iconName = focused
        ? require('../assets/images/icons/SelectedSearch.png')
        : require('../assets/images/icons/UnselectedSearch.png');
        break;
    }
    return <Image source={iconName} style={{ width: 30, resizeMode: 'contain'}}/>;
  },
  tabBarActiveTintColor: '#FFA500', //orange
  tabBarInactiveTintColor: '#C4C4C4', //light grey
  headerShown: false,
})

export function MovieView({ defaultPage, changeDefaultPage, changeBeginning }) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={defaultPage}
        screenOptions={NavbarOptions}
      >
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Movies">
          {(props) => <MovieScreen {...props} changeBeginning={changeBeginning} changeDefaultPage={changeDefaultPage} />}
        </Tab.Screen>
        <Tab.Screen name="TV Shows" component={TvScreen} />
        <Tab.Screen name="Watch" component={WatchedScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}