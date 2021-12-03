import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export function CustomButton(props) {
  const { onPress, title = 'Save'} = props;
  let buttonStyle = {};

  switch(title) {
    case '?':
      buttonStyle = {
        width: 40,
        height: 40,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 0,
        borderRadius: '50%',
        position: 'absolute',
        bottom: 30,
        right: 30,
      };
      break;
  }
  return (
    <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? '#FFA500' : '#0f0f0f' }, styles.button, buttonStyle]} onPress={onPress}>
      {({ pressed }) => <Text style={[{color: pressed ? '#0f0f0f' : '#FFA500'}, styles.text]}>{title}</Text>}
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
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    borderStyle: 'solid',
  },
  text: {
    fontSize: 14,
    textAlign: 'center'
  },
});