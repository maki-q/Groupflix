import * as React from 'react';
import { Image } from 'react-native';
import { VideoScreen, SearchScreen, WatchedScreen } from './main';
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

export function MovieView({ defaultPage, changeDefaultPage, changeBeginning, data, friendsBucket, setSelectedFriends, selectedFriends }) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={defaultPage}
        screenOptions={NavbarOptions}
      >
        <Tab.Screen name="Search">
          {(props) => <SearchScreen {...props}
            data={{trending: data.movieTrending}}
            type="Search"
        />}
        </Tab.Screen>
        <Tab.Screen name="Movies">
          {(props) => <VideoScreen {...props}
            data={{trending: data.movieTrending, topRated: data.movieTopRated}}
            changeBeginning={changeBeginning}
            changeDefaultPage={changeDefaultPage}
            type="Movies"/
          >}
        </Tab.Screen>
        <Tab.Screen name="TV Shows">
          {(props) => <VideoScreen {...props}
            data={{trending: data.tvTrending, topRated: data.tvTopRated}}
            changeBeginning={changeBeginning}
            changeDefaultPage={changeDefaultPage}
            type="TV Shows"
          />}
        </Tab.Screen>
        <Tab.Screen name="Watch">
          {(props) => <WatchedScreen {...props} friendsBucket={friendsBucket} changeBeginning={changeBeginning} changeDefaultPage={changeDefaultPage} type="Watch" setSelectedFriends={setSelectedFriends} selectedFriends={selectedFriends} trending={data.page2Trending} topRated={data.page2TopRated} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}