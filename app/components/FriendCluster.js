import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export function FriendCluster({friendsBucket, selectedFriends}) {
  return (
    <View style={{flexDirection: 'row', paddingLeft: 20}}>
      {selectedFriends.map((friend, index) => (
        <Image style={[styles.icon, {zIndex: 1 + index, left: -1 * (index * 10)}]} key={index} source={friendsBucket[friend]} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    borderRadius: 25,
    borderColor: '#0f0f0f',
    borderWidth: 1
  }
})