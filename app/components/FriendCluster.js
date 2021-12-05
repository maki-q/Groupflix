import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export function FriendCluster({friendsBucket, selectedFriends, your, most, seed}) {
  seed = seed === 0 ? 1 : seed;
  const offset = [];
  const randomYourList = seed % 2;
  if (selectedFriends.length) {
    if (most) {
      offset.push(seed % selectedFriends.length);
    } else if (your) {
      while (offset.length < (2 + randomYourList)) {
        offset.push(seed % selectedFriends.length);
        offset.push((seed * 2) % selectedFriends.length);
      }
    }
  }

  function createFriends() {
    let bucket = []
    let randomMost = seed % 4;
    selectedFriends.map((friend, index) => (
      <Image style={[styles.icon, {zIndex: 1 + index, left: -1 * (index * 10)}]} key={index} source={friendsBucket[friend]} />
    ))

    if(most && randomMost !== 2) {
      bucket = selectedFriends.map((friend, index) => (
        <Image style={[styles.icon, {zIndex: 1 + index, left: -1 * ((index) * 10)}]} key={index} source={friendsBucket[friend]} />
      ))
    } else {
      bucket = selectedFriends.filter(friend => offset.indexOf(friend) === -1).map((friend, index) => (
        <Image style={[styles.icon, {zIndex: 2 + index, left: -1 * ((index + 1) * 10)}]} key={index} source={friendsBucket[friend]} />
      ))
      bucket.unshift(<Image style={[styles.icon, {zIndex: 1, left:0}]} key={'solo'} source={require('../../assets/images/friends/IMG_4427.png')} />)
    }
    return bucket;
  }

  return (
    <View style={{flexDirection: 'row', paddingLeft: 20}}>
      {createFriends()}
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