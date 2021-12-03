import React from 'react';
import { Image } from 'react-native';

export function Logo() {
  return (
    <Image
    source={require('../../assets/images/icons/Netflix.jpeg')}
    style={{
      borderRadius: 100,
      width: 200,
      height: 200,
      marginTop: 100,
      marginBottom: 50,
      resizeMode: 'cover' }}
    />
  );
}