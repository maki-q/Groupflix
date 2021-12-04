import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Button, Pressable, Image, FlatList } from 'react-native';
import { ProfileIcon, CustomCarousel } from '../components'
import Modal from "react-native-modal";
import styles from '../styles';

export function VideoScreen({ changeBeginning, changeDefaultPage, type }) {
  const movieBucket = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  function selectVideo () {
    setSelectedMovie("ShawShank 2");
    setModalVisible(true);
  }

  return (
    <SafeAreaView style={[styles.backgroundTheme]}>
      <Modal
        isVisible={modalVisible}
        backdropColor="#0f0f0f"
        backdropOpacity={1}
        onBackButtonPress={() => setModalVisible(false)}
        style={{flex: 1}}
      >
        <Pressable style={exploreStyle.close} onPress={() => setModalVisible(false)} >
          <Image style={exploreStyle.closeImage} source={require('../../assets/images/icons/Close.png')} />
        </Pressable>

        <View style={{flex: 6}}>
          <Image style={exploreStyle.banner} source={{uri: "https://image.tmdb.org/t/p/original/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg"}}/>
        </View>
        <View style={{flex: 10}}>
          <View>
            <Text style={exploreStyle.title}>{"Shawshank Redemption"}</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
            <Text style={exploreStyle.overview}>{"7.5/10"}</Text>
            <View style={{alignItems: 'center'}}>
              <Text style={exploreStyle.overview}>{"Released"}</Text>
              <Text style={exploreStyle.overview}>{"06-05-14"}</Text>
            </View>

          </View>

          <ScrollView>
            <Text style={exploreStyle.overview}>{"As humanity picks up the pieces, following the conclusion of \"Transformers: Dark of the Moon,\" Autobots and Decepticons have all but vanished from the face of the planet. However, a group of powerful, ingenious businessman and scientists attempt to learn from past Transformer incursions and push the boundaries of technology beyond what they can control - all while an ancient, powerful Transformer menace sets Earth in his cross-hairs.As humanity picks up the pieces, following the conclusion of \"Transformers: Dark of the Moon,\" Autobots and Decepticons have all but vanished from the face of the planet. However, a group of powerful, ingenious businessman and scientists attempt to learn from past Transformer incursions and push the boundaries of technology beyond what they can control - all while an ancient, powerful Transformer menace sets Earth in his cross-hairs.As humanity picks up the pieces, following the conclusion of \"Transformers: Dark of the Moon,\" Autobots and Decepticons have all but vanished from the face of the planet. However, a group of powerful, ingenious businessman and scientists attempt to learn from past Transformer incursions and push the boundaries of technology beyond what they can control - all while an ancient, powerful Transformer menace sets Earth in his cross-hairs."}</Text>
          </ScrollView>

          <View style={{ alignItems: 'center'}}>
            <Pressable
              style={({ pressed }) => [{ backgroundColor: pressed ? '#FFA500' : '#0f0f0f' }, exploreStyle.button, styles.button]}
              onPress={() => setModalVisible(false)}>
              {({ pressed }) => {
                return pressed ? <Text style={[{color: '#0f0f0f' }, exploreStyle.text]}>{"Added to your list."}</Text> :
                  <Text style={[{color: 'white' }, exploreStyle.text]}>{"I want to see this!"}</Text>
              }}
            </Pressable>
          </View>
        </View>
      </Modal>

      <ProfileIcon/>
      <View style={exploreStyle.header}>
        <Text style={styles.headerText}>{type === 'Movies' ? 'Explore Movies' : 'Explore TV Shows'}</Text>
      </View>

      <ScrollView style={{width: '100%'}}>
        <CustomCarousel data={movieBucket} title="Trending" selectVideo={selectVideo}/>
        <CustomCarousel data={movieBucket} title="Top Rated" selectVideo={selectVideo}/>
        <CustomCarousel data={movieBucket} title="Your Picks" selectVideo={selectVideo}/>
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
