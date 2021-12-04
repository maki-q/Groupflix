import React, {useState} from 'react';
import { Image, Pressable } from 'react-native';

export function FriendIcon(props) {
  const [selected, setSelected] = useState(false);
  return (
    <Pressable
      style={{margin: 10, position: 'relative'}}
      onPress={() => setSelected(!selected)}
    >
      <Image
        source={props.friend}
        style={{
          borderRadius: 100,
          width: 60,
          height: 60,
          borderColor: selected ? '#6BBE66' : '#0F0F0F',
          borderWidth: 2,
          resizeMode: 'cover' }}
      />
      <Image
        source={require('../../assets/images/icons/Selected.png')}
        style={{
          width: 20,
          height: 20,
          display: selected ? 'flex' : 'none',
          position: 'absolute',
          top: 0,
          right: -10
        }}
      />
    </Pressable>
  );
}