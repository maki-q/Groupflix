import React, { useState, createRef } from 'react';
import { View, KeyboardAvoidingView, Text, TextInput, Dimensions, StyleSheet } from 'react-native';
import styles from '../styles';
import { Logo, SmallButton, EmailButton } from '../components';

const inputStyle = StyleSheet.create({
  input: {
    borderColor: '#C4C4C4',
    borderBottomWidth: 1,
    height: 30,
    color: 'white',
    width: "70%"
  },
  view: {
    // backgroundColor: 'red',
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
});

export function InviteFriends({ changeBeginning, navigation }) {
  const [emails, setEmails] = useState(['Adam.p.jupiter@gmail.com', 'kingbomb@aol.com']);
  const emailForm = createRef(null);

  function removeEmail(email) {
    const newEmails = [...emails];
    newEmails.splice(emails.indexOf(email), 1);
    setEmails(newEmails);
  }

  function submitEmail({ nativeEvent }) {
    setEmails([nativeEvent.text, ...emails]);
    emailForm.current.clear();
    emailForm.current.focus();
  }

  return (
    <KeyboardAvoidingView behavior="position" style={[styles.backgroundTheme]}>
      <View style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height, alignItems: 'center'}}>
        <Logo />
        <Text style={[styles.infoText, {marginTop: 0, marginBottom: 40}]}>Invite your friends, we know you have some.</Text>
        <TextInput
          style={[inputStyle.input]}
          keyboardType="email-address"
          returnKeyType="go"
          keyboardAppearance="dark"
          placeholder="Emails"
          placeholderTextColor="#C4C4C4"
          onSubmitEditing={submitEmail}
          ref={emailForm}
          autoCapitalize="none"
        />
        <View style={inputStyle.view}>
          {emails.map((email, index) => <EmailButton key={index} email={email} remove={removeEmail}/> )}
        </View>
        <SmallButton position="right"
          title="Invite"
          onPress={() => navigation.navigate("Connected")}
        />
        <SmallButton position="left"
          title="Later"
          onPress={() => changeBeginning(false)}
        />
      </View>
    </KeyboardAvoidingView>
  );
}