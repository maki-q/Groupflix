import React from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native';
import Modal from "react-native-modal";
import styles from '../styles';

export function CustomModal({setModalVisible, modalVisible, data}) {
  return (
    <Modal
      isVisible={modalVisible}
      backdropColor="#0f0f0f"
      backdropOpacity={1}
      onBackButtonPress={() => setModalVisible(false)}
      style={{ flex: 1 }}
    >
      <Pressable style={exploreStyle.close} onPress={() => setModalVisible(false)} >
        <Image style={exploreStyle.closeImage} source={require('../../assets/images/icons/Close.png')} />
      </Pressable>

      <View style={{ flex: 6 }}>
        <Image style={exploreStyle.banner} source={{ uri: `https://image.tmdb.org/t/p/original/${data?.backdrop_path}` }} />
      </View>
      <View style={{ flex: 10 }}>
        <View>
          <Text style={exploreStyle.title}>{data?.title || data?.original_title || data?.name}</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <Text style={exploreStyle.overview}>{`${data?.vote_average}/10`}</Text>
          {data?.release_date ? <View style={{ alignItems: 'center' }}>
            <Text style={exploreStyle.overview}>{"Released"}</Text>
            <Text style={exploreStyle.overview}>{data?.release_date}</Text>
          </View> : null}

        </View>

        <ScrollView>
          <Text style={exploreStyle.overview}>{data?.overview}</Text>
        </ScrollView>

        <View style={{ alignItems: 'center' }}>
          <Pressable
            style={({ pressed }) => [{ backgroundColor: pressed ? '#FFA500' : '#0f0f0f' }, exploreStyle.button, styles.button]}
            onPress={() => setModalVisible(false)}>
            {({ pressed }) => {
              return pressed ? <Text style={[{ color: '#0f0f0f' }, exploreStyle.text]}>{"Added to your list."}</Text> :
                <Text style={[{ color: 'white' }, exploreStyle.text]}>{"I want to see this!"}</Text>
            }}
          </Pressable>
        </View>
      </View>
    </Modal>
  )
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
