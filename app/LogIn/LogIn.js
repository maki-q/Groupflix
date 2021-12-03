import * as React from 'react';
import { View, Text, Button } from 'react-native';

export function LogIn({ changeBeginning, navigation }) {
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