import * as React from 'react';
import { Welcome, SignUp, LogIn, Info, Info2 } from './LogIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export function LoginView({ changeBeginning }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Sign Up" nav={changeBeginning}>
          {props => <SignUp {...props} changeBeginning={changeBeginning}/>}
        </Stack.Screen>
        <Stack.Screen name="Sign In" nav={changeBeginning}>
          {props => <LogIn {...props} changeBeginning={changeBeginning}/>}
        </Stack.Screen>
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Info2" nav={changeBeginning}>
          {props => <Info2 {...props} changeBeginning={changeBeginning}/>}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}