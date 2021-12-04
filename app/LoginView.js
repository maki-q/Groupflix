import * as React from 'react';
import { Welcome, SignUp, LogIn, Info, Info2, InviteFriends, Connected, WatchingWith } from './login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export function LoginView({ changeBeginning }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Invite Friends">
          {props => <InviteFriends {...props} changeBeginning={changeBeginning}/>}
        </Stack.Screen>
        <Stack.Screen name="Connected">
          {props => <Connected {...props} changeBeginning={changeBeginning}/>}
        </Stack.Screen>
        <Stack.Screen name="Watching With">
          {props => <WatchingWith {...props} changeBeginning={changeBeginning}/>}
        </Stack.Screen>
        <Stack.Screen name="Sign In">
          {props => <LogIn {...props} changeBeginning={changeBeginning}/>}
        </Stack.Screen>
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Info2">
          {props => <Info2 {...props} changeBeginning={changeBeginning}/>}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}