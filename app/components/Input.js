import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export function Input(props) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={[{width: '85%', marginBottom: 15}, props.overrideStyle]}>
      <Text style={[{ color: isFocused ? '#FFA500' : 'white', marginBottom: 3}]} >{props.inputTitle}</Text>
      <TextInput
        style={[{ borderColor: isFocused ? '#FFA500' : 'white'}, styles.input]}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        keyboardType={props.keyboardType || 'default'}
        returnKeyType={props.returnKeyType || 'done'}
        textContentType={props.textContentType || 'none'}
        keyboardAppearance="dark"
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: 'white'
  }
})