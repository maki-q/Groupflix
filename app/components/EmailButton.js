import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export function EmailButton(props) {
  const { email, remove} = props;
  let buttonStyle = {};

  return (
    <Pressable
      style={({ pressed }) => [{ backgroundColor: pressed ? '#FFA500' : '#0f0f0f' }, styles.button, buttonStyle]}
      onLongPress={() => remove(email)}
    >
      {({ pressed }) => <Text style={[{color: pressed ? '#0f0f0f' : '#FFA500'}, styles.text]}>{email}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderColor: '#FFA500',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 3,
    borderStyle: 'solid',
    maxWidth: '100%',
  },
  text: {
    fontSize: 10,
    textAlign: 'center'
  },
});