import React from 'react';
import { Image, Pressable } from 'react-native';

export function SearchCard({data, onClick}) {
  return (
    <Pressable style={{width: '30%', margin: 5}} onPress={() => onClick(data)}>
      <Image
        style={{width: '100%', height: 176, borderRadius: 10}}
        source={{uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`}}
        resizeMode="contain"
      />
    </Pressable>
  );
}