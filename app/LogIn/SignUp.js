import * as React from 'react';
import { View, Text, Button } from 'react-native';

export function SignUp({ changeBeginning, navigation }) {
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