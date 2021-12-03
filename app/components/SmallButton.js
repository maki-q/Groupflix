import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import styles from '../styles';

export function SmallButton(props) {
  const { onPress, title = 'Save' } = props;
  let position = {};

  if(props.position) {
    if(props.position === 'left') {
      position = {
        position: 'absolute',
        bottom: 20,
        left: 20,
      }
    } else if(props.position === 'right') {
      position = {
        position: 'absolute',
        bottom: 20,
        right: 20,
      }
    }
  }
  return (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor: pressed ? '#FFA500' : '#0f0f0f' },
        smallStyles.button,
        styles.button,
        position
      ]}
      onPress={onPress}>
      {({ pressed }) => <Text style={[{color: pressed ? '#0f0f0f' : '#FFA500'}, smallStyles.text]}>{title}</Text>}
    </Pressable>
  );
}

const smallStyles = StyleSheet.create({
  button: {
    width: 100,
    margin: 10,
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.25,
  },
});