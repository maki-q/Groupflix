import * as React from 'react';
import { View, Text, Button } from 'react-native';

export function Welcome({ navigation }) {
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