import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const exploreStyle = StyleSheet.create({
  placeholder: {
    width: 275,
    height: 275,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export function MovieCard(props) {
  return (
    <View style={exploreStyle.placeholder}>
      <Text>{props.id}</Text>
    </View>
  )
}
