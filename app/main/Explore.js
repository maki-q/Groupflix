import * as React from 'react';
import { View, Text, Button } from 'react-native';

export function ExploreScreen({ changeBeginning }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button
        title="Back to Welcome Screen"
        onPress={() => changeBeginning(true)}/>
    </View>
  );
}