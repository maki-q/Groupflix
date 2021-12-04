import React from 'react';
import { Image } from 'react-native';

export function ProfileIcon(props) {
  return (
    <Image
    source={require('../../assets/images/friends/IMG_4427.png')}
    style={[{
      borderRadius: 100,
      width: 60,
      height: 60,
      position: 'absolute',
      top: 50,
      right: 25,
      borderColor: 'white',
      borderWidth: 1,
      resizeMode: 'cover' }, props.customStyle]}
    />
  );
}