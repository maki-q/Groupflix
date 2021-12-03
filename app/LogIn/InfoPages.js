import * as React from 'react';
import { View, Text, Button } from 'react-native';

export function Info({ navigation }) {
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

export function Info2({ navigation, changeBeginning }) {
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