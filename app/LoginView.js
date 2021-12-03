import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function Welcome({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Groupflix</Text>
      <Button
        title="Let's get started"
        onPress={() => navigation.navigate('Sign Up')}
      />
      <Button
        title="I've been here before"
        onPress={() => navigation.navigate('Sign In')}
      />
      <Button
        title="?"
        onPress={() => navigation.navigate('Info')}
      />
    </View>
  );
}

function SignUp({ changeBeginning, navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sign Up Page!</Text>
      <Button
        title="Create account"
        onPress={() => changeBeginning(false)}
      />
      <Button
        title="Back"
        onPress={() => navigation.navigate("Welcome")}
      />
    </View>
  );
}

function SignIn({ changeBeginning, navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sign In Page!</Text>
      <Button
        title="Log In"
        onPress={() => changeBeginning(false)}
      />
      <Button
        title="Back"
        onPress={() => navigation.navigate("Welcome")}
      />
    </View>
  );
}

function Info({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Info!</Text>
      <Button
        title="Next Info Page"
        onPress={() => navigation.navigate("Info2")}
      />
      <Button
        title="Back"
        onPress={() => navigation.navigate("Welcome")}
      />
    </View>
  );
}

function Info2({ navigation, changeBeginning }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Info Page 2!</Text>
      <Button
        title="Main Page"
        onPress={() => changeBeginning(false)}
      />
      <Button
        title="Back"
        onPress={() => navigation.navigate("Info")}
      />
    </View>
  );
}

export function LoginView({ changeBeginning }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Sign Up" nav={changeBeginning}>
          {props => <SignUp {...props} changeBeginning={changeBeginning}/>}
        </Stack.Screen>
        <Stack.Screen name="Sign In" nav={changeBeginning}>
          {props => <SignIn {...props} changeBeginning={changeBeginning}/>}
        </Stack.Screen>
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Info2" nav={changeBeginning}>
          {props => <Info2 {...props} changeBeginning={changeBeginning}/>}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}