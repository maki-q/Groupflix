import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { MovieCardButton } from './MovieCardButton';
import { FriendCluster } from './FriendCluster';

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

export function MovieCard({ selectVideo, data, watched, friendsBucket, selectedFriends }) {
  function truncateTitle(name) {
    if(name.length > 25) {
      return name.substring(0, 25) + '...';
    } else {
      return name;
    }
  }
  if (watched) {
    return  (
      <View style={exploreStyle.container}>
        <Image style={exploreStyle.banner} source={{uri: `https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}}/>
        <View>
          <View style={{padding: 20}}>
            <Text style={exploreStyle.title}>{truncateTitle(data?.title || data?.original_title || data?.name)}</Text>
            <Text style={exploreStyle.text}>{`${data?.vote_average}/10`}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <FriendCluster friendsBucket={friendsBucket} selectedFriends={selectedFriends} />
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 30}}>
              <MovieCardButton title="Info" selectVideo={selectVideo} data={data} customStyle={{paddingLeft: 0, paddingRight: 30}}/>
              <MovieCardButton title="Stream" customStyle={{paddingLeft: 0, paddingRight: 0}}/>
            </View>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={exploreStyle.container}>
        <Image style={exploreStyle.banner} source={{uri: `https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}}/>
        <View>
          <View style={{padding: 20}}>
            <Text style={exploreStyle.title}>{truncateTitle(data?.title || data?.original_title || data?.name)}</Text>
            <Text style={exploreStyle.text}>{`${data?.vote_average}/10`}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MovieCardButton title="Info" selectVideo={selectVideo} data={data}/>
            <MovieCardButton title="Dislike" />
            <MovieCardButton title="Like" />
          </View>
        </View>
      </View>
    )
  }
}
