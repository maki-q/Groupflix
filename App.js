// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React, { useState } from 'react';
import { Text, View, Image, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MovieView } from './app/Tabs';

function TestScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Test!</Text>
      <Button
        title="Go to Test 2"
        onPress={() => navigation.navigate('Test 2')}
      />
    </View>
  );
}

function TestScreen2({ changeBeginning }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Test!</Text>
      <Button
        title="Go to Explore"
        onPress={() => changeBeginning(false)}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();


const NavbarOptions = ({ route }) => ({
  tabBarStyle: { backgroundColor: '#0f0f0f' },
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    switch(route.name) {
      case 'Explore':
        iconName = focused
        ? require('./assets/SelectedHome.png')
        : require('./assets/UnselectedHome.png');
        break;
      case 'Movies':
        iconName = focused
        ? require('./assets/SelectedMovie.png')
        : require('./assets/UnselectedMovie.png');
        break;
      case 'TV Shows':
        iconName = focused
        ? require('./assets/SelectedTv.png')
        : require('./assets/UnselectedTv.png');
        break;
      case 'Watch':
        iconName = focused
        ? require('./assets/SelectedFriends.png')
        : require('./assets/UnselectedFriends.png');
        break;
      case 'Search':
        iconName = focused
        ? require('./assets/SelectedSearch.png')
        : require('./assets/UnselectedSearch.png');
        break;
    }
    return <Image source={iconName} style={{ width: 30, resizeMode: 'contain'}}/>;
  },
  tabBarActiveTintColor: '#FFA500', //orange
  tabBarInactiveTintColor: '#C4C4C4', //light grey
  tabBarButton: [
    "Test",
    "Test 2"
  ].includes(route.name)
    ? () => {
        return null;
      }
    : undefined,
})

export default function App() {
  const [beginning, changeBeginning] = useState(true);
  return beginning ? (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Test"
        screenOptions={NavbarOptions}
      >
        <Stack.Screen name="Test" component={TestScreen} options={{tabBarVisible: false}}/>
        <Stack.Screen name="Test 2" nav={changeBeginning} options={{tabBarVisible: false}}>
          {props => <TestScreen2 {...props} changeBeginning={changeBeginning}/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <MovieView />
  );
}
