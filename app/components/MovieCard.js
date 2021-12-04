import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { MovieCardButton } from './MovieCardButton';

const exploreStyle = StyleSheet.create({
  container: {
    width: 275,
    height: 275,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
  },
  banner: {
    width: '100%',
    height: 150,
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
    resizeMode: 'cover'
  },
  title: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5
  },
  text: {
    color: '#C4C4C4'
  }
})

export function MovieCard(props) {
  return (
    <View style={exploreStyle.container}>
      <Image style={exploreStyle.banner} source={{uri: "https://image.tmdb.org/t/p/original/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg"}}/>
      <View>
        <View style={{padding: 20}}>
          <Text style={exploreStyle.title}>{"Shawshank Redemption"}</Text>
          <Text style={exploreStyle.text}>{"7.5/10"}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <MovieCardButton title="Info" />
          <MovieCardButton title="Dislike" />
          <MovieCardButton title="Like" />
        </View>
      </View>
    </View>
  )
}
