import * as React from 'react';
import { View, KeyboardAvoidingView, Text, Dimensions } from 'react-native';
import styles from '../styles';
import { Logo, Input, SmallButton } from '../components';

export function SignUp({ changeBeginning, navigation }) {
  return (
    <KeyboardAvoidingView behavior="position" style={[styles.backgroundTheme]}>
      <View style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height, alignItems: 'center'}}>
        <Logo />
        <Text style={[styles.infoText, {marginTop: 0, marginBottom: 40}]}>What do we call you?</Text>
        <Input inputTitle="First Name"/>
        <Input inputTitle="Last Name"/>
        <Input inputTitle="Email"/>
        <Input inputTitle="Password"/>
        <SmallButton position="right"
          title="Submit"
          onPress={() => changeBeginning(false)}
        />
        <SmallButton position="left"
          title="Back"
          onPress={() => navigation.navigate("Welcome")}
        />
      </View>
    </KeyboardAvoidingView>
  );
}