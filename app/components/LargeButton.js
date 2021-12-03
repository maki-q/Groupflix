import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import styles from '../styles';

export function LargeButton(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? '#FFA500' : '#0f0f0f' }, largeStyles.button, styles.button]} onPress={onPress}>
      {({ pressed }) => <Text style={[{color: pressed ? '#0f0f0f' : '#FFA500'}, largeStyles.text]}>{title}</Text>}
    </Pressable>
  );
}

const largeStyles = StyleSheet.create({
  button: {
    width: '80%',
    margin: 10,
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.25,
  },
});