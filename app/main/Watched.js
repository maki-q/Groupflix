import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Button } from 'react-native';
import { ProfileIcon, CustomCarousel, CustomModal, WatchingWithIcons, SelectFriendsModal } from '../components'
import styles from '../styles';
import { data } from './picks';


export function WatchedScreen({ changeBeginning, changeDefaultPage, friendsBucket, setSelectedFriends, selectedFriends, trending, topRated }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectingFriends, setSelectingFriends] = useState(false);
  const picks = data.results;

  function selectVideo (data) {
    setSelectedMovie(data);
    setModalVisible(true);
  }

  return (
    <SafeAreaView style={[styles.backgroundTheme]}>
      <CustomModal setModalVisible={setModalVisible} modalVisible={modalVisible} data={selectedMovie} />
      <SelectFriendsModal setModalVisible={setSelectingFriends} modalVisible={selectingFriends} setSelectedFriends={setSelectedFriends} friendsBucket={friendsBucket} selectedFriends={selectedFriends}/>

      <ProfileIcon />
      <View style={exploreStyle.header}>
        <Text style={styles.headerText}>{"Watching With"}</Text>
      </View>
      <WatchingWithIcons friends={selectedFriends.map(friend => friendsBucket[friend])} setSelectingFriends={setSelectingFriends}/>
      <Text style={{color: 'white', fontSize: 18, lineHeight: 27, padding: 20}}>
        We found 10 titles you all like and 13 titles most of you like.
      </Text>

      <ScrollView style={{width: '100%'}}>
        <CustomCarousel data={trending} title="Movies everyone likes:" selectVideo={selectVideo} watched friendsBucket={friendsBucket} selectedFriends={selectedFriends}/>
        <CustomCarousel data={topRated} title="Most everyone likes these:" selectVideo={selectVideo} watched most friendsBucket={friendsBucket} selectedFriends={selectedFriends}/>
        <CustomCarousel data={picks} title="Your likes:" selectVideo={selectVideo} watched your friendsBucket={friendsBucket} selectedFriends={selectedFriends}/>
        <Button onPress={() => {
          changeDefaultPage('Movies');
          changeBeginning(true);
        }} title="Beginning"/>
      </ScrollView>
    </SafeAreaView>
  );
}

const exploreStyle = StyleSheet.create({
  header: {
    width: '100%',
    padding: 30,
    paddingTop: 20,
    paddingBottom: 25,
  },
  close: {
    position: 'absolute',
    top: 30,
    left: 0,
    elevation: 10,
    zIndex: 10
  },
  closeImage: {
    width: 25,
    height: 25
  },
  banner: {
    width: '112%',
    height: 200,
    resizeMode: 'cover',
    marginLeft: -20,
    marginTop: 90,
  },
  title: {
    color: 'white',
    fontSize: 24,
    paddingBottom: 10,
  },
  overview: {
    color: '#C4C4C4'
  },
  button: {
    width: '80%',
    margin: 10,
    marginBottom: 30,
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.25,
  },
})
