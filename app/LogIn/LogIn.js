import * as React from 'react';
import { View, KeyboardAvoidingView, Text, Pressable, Dimensions, StyleSheet } from 'react-native';
import styles from '../styles';
import { Logo, Input, SmallButton } from '../components';

export function LogIn({ changeBeginning, navigation }) {
  return (
    <KeyboardAvoidingView behavior="position" style={[styles.backgroundTheme]}>
      <View style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height, alignItems: 'center'}}>
        <Logo />
        <Text style={[styles.infoText, {marginTop: 0, marginBottom: 40}]}>Back for more?</Text>
        <Input inputTitle="Email"/>
        <Input overrideStyle={{marginBottom: 0}}inputTitle="Password"/>
        <View style={{flexDirection: 'row', width: '80%', justifyContent: 'space-between'}}>
          <Pressable>
            {({ pressed }) => <Text style={[{color: pressed ? 'white' : '#FFA500'}, buttonStyles.button]}>{"Don't have an account?"}</Text>}
          </Pressable>
          <Pressable>
            {({ pressed }) => <Text style={[{color: pressed ? 'white' : '#FFA500'}, buttonStyles.button]}>{"Forgot your password?"}</Text>}
          </Pressable>
        </View>
        <SmallButton position="right"
          title="Log In"
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

const buttonStyles = StyleSheet.create({
  button: {
    fontSize: 10,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
  }
});