import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Button } from 'react-native';
import { ProfileIcon, CustomCarousel, CustomModal } from '../components'
import styles from '../styles';
import { data } from './picks';
const picks = data.results

export function VideoScreen({ changeBeginning, changeDefaultPage, type, data }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  function selectVideo (data) {
    setSelectedMovie(data);
    setModalVisible(true);
  }

  return (
    <SafeAreaView style={[styles.backgroundTheme]}>
      <CustomModal setModalVisible={setModalVisible} modalVisible={modalVisible} data={selectedMovie} />

      <ProfileIcon/>
      <View style={exploreStyle.header}>
        <Text style={styles.headerText}>{type === 'Movies' ? 'Explore Movies' : 'Explore TV Shows'}</Text>
      </View>

      <ScrollView style={{width: '100%'}}>
        <CustomCarousel data={data.trending} title="Trending" selectVideo={selectVideo}/>
        <CustomCarousel data={data.topRated} title="Top Rated" selectVideo={selectVideo}/>
        <CustomCarousel data={picks} title="Your Picks" selectVideo={selectVideo}/>
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
