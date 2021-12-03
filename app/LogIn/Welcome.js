import * as React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import { LargeButton, CustomButton, Logo } from '../components';

export function Welcome({ navigation }) {

  const baseStyle = {
    alignItems: 'center'
  }

  return (
    <View style={[styles.backgroundTheme]}>
      <Logo/>
      <View style={[{flex: 6, width: '80%'}, baseStyle]}>
        <Text style={{ color: 'white', fontFamily: 'Ubuntu',fontSize: 46, textAlign: 'center' }}>Welcome to Groupflix</Text>
      </View>
      <View style={[{flex: 5, width: '100%'}, baseStyle]}>
        <LargeButton
          title="Let's get started."
          onPress={() => navigation.navigate('Sign Up')}
        />
        <LargeButton
          title="I've been here before."
          onPress={() => navigation.navigate('Sign In')}
        />
      </View>
      <CustomButton
        title="?"
        onPress={() => navigation.navigate('Info')}
      />
    </View>
  );
}