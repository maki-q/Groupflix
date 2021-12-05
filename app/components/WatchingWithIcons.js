import React from 'react';
import { View, Image, Pressable, StyleSheet} from 'react-native';

export function WatchingWithIcons({friends, setSelectingFriends}) {
  function drawIcons() {
    let bucket = [];
    if (friends.length > 4) {
      bucket = friends.map((friend, index) => <Image style={style.icon} key={index} source={friend} />)
    } else {
      bucket = friends.map((friend, index) => <Image style={style.icon} key={index} source={friend} />)
    }
    return bucket;
  }
  return (
    <View style={style.container}>
      {drawIcons()}
      <Pressable onPress={() => setSelectingFriends(true)}>
        <Image style={style.clickable} source={require('../../assets/images/icons/Group.png')} />
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 20,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15
  },
  clickable: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  }
});