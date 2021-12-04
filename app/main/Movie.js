import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Button } from 'react-native';
import { MyCarousel } from '../components/Carousel';
import { ProfileIcon } from '../components'
import styles from '../styles';

export function MovieScreen({ changeBeginning, changeDefaultPage }) {
  const movieBucket = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <SafeAreaView style={[styles.backgroundTheme]}>
      <ProfileIcon/>
      <View style={exploreStyle.header}>
        <Text style={styles.headerText}>Explore Movies</Text>
      </View>

      <ScrollView style={{width: '100%'}}>
        <MyCarousel data={movieBucket} title="Trending"/>
        <MyCarousel data={movieBucket} title="Top Rated"/>
        <MyCarousel data={movieBucket} title="Your Picks"/>
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
})
