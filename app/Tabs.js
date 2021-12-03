import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

function ExploreScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function WatchedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Watched!</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}

function TvScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>TV!</Text>
    </View>
  );
}

function MovieScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Movies!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const NavbarOptions = ({ route }) => ({
  tabBarStyle: { backgroundColor: '#0f0f0f' },
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    switch(route.name) {
      case 'Explore':
        iconName = focused
        ? require('../assets/SelectedHome.png')
        : require('../assets/UnselectedHome.png');
        break;
      case 'Movies':
        iconName = focused
        ? require('../assets/SelectedMovie.png')
        : require('../assets/UnselectedMovie.png');
        break;
      case 'TV Shows':
        iconName = focused
        ? require('../assets/SelectedTv.png')
        : require('../assets/UnselectedTv.png');
        break;
      case 'Watch':
        iconName = focused
        ? require('../assets/SelectedFriends.png')
        : require('../assets/UnselectedFriends.png');
        break;
      case 'Search':
        iconName = focused
        ? require('../assets/SelectedSearch.png')
        : require('../assets/UnselectedSearch.png');
        break;
    }
    return <Image source={iconName} style={{ width: 30, resizeMode: 'contain'}}/>;
  },
  tabBarActiveTintColor: '#FFA500', //orange
  tabBarInactiveTintColor: '#C4C4C4', //light grey
})

export function MovieView() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Explore"
        screenOptions={NavbarOptions}
      >
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="TV Shows" component={TvScreen} />
        <Tab.Screen name="Movies" component={MovieScreen} />
        <Tab.Screen name="Watch" component={WatchedScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}