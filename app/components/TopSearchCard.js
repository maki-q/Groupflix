import React from 'react';
import { Text, Image, Pressable } from 'react-native';

export function TopSearchCard({data, onClick}) {
  return (
    <Pressable style={{width: '100%', margin: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} onPress={() => onClick(data)}>
      <Image
        style={{width: '30%', height: 75, borderRadius: 10}}
        source={{uri: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`}}
        resizeMode="cover"
      />
      <Text style={{color: 'white', width: '50%', padding: 15, fontFamily: 'UbuntuBold'}}>{data?.name || data?.original_title }</Text>
      <Image style={{width: 25, height: 25, marginRight: 15}} source={require('../../assets/images/icons/Info.png')} />
    </Pressable>
  );
}