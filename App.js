// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import { MovieView } from './app/MovieView';
import { LoginView } from './app/LoginView';
import { key } from './app/key'
import axios from 'axios';

export default function App() {
  const [beginning, changeBeginning] = useState(true);
  const [movieTrending, setMovieTrending] = useState(null);
  const [movieTopRated, setMovieTopRated] = useState(null);
  const [tvTrending, setTvTrending] = useState(null);
  const [tvTopRated, setTvTopRated] = useState(null);
  const [page2TopRated, setPage2TopRated] = useState(null);
  const [page2Trending, setPage2Trending] = useState(null);
  const [defaultPage, changeDefaultPage] = useState('Movies');
  const [selectedFriends, setSelectedFriends] = useState([])

  const [loaded] = useFonts({
    Ubuntu: require('./assets/fonts/Ubuntu-Regular.ttf'),
    UbuntuBold: require('./assets/fonts/Ubuntu-Bold.ttf')
  })

/*   function toggleSelected(index) {
    if (selectedFriends.indexOf(index) === -1) {
      setSelectedFriends([index, ...selectedFriends])
    } else {
      const newBucket = [...selectedFriends];
      newBucket.splice(selectedFriends.indexOf(index), 1);
      setSelectedFriends(newBucket);
    }
  } */



  const friendsBucket = [
    require('./assets/images/friends/adamk.png'),
    require('./assets/images/friends/olivia.jpg'),
    require('./assets/images/friends/elliot.jpg'),
    require('./assets/images/friends/kevin.jpg'),
    require('./assets/images/friends/khai.jpg'),
    require('./assets/images/friends/adamj.png'),
    require('./assets/images/friends/jessica.png'),
    require('./assets/images/friends/annie.jpg'),
    require('./assets/images/friends/andrewv.jpg'),
    require('./assets/images/friends/eric.jpg'),
    require('./assets/images/friends/andrewt.jpg'),
  ]


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`)
    .then((res) => setMovieTopRated(res.data.results));
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
    .then((res) => setMovieTrending(res.data.results));
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=2`)
    .then((res) => setPage2TopRated(res.data.results));
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`)
    .then((res) => setPage2Trending(res.data.results));
    axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`)
    .then((res) => setTvTopRated(res.data.results));
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`)
    .then((res) => setTvTrending(res.data.results));
  }, [])

  if(!tvTrending || !tvTopRated || !movieTopRated || !movieTrending || !loaded) {
    return <Text>{"Loading..."}</Text>
  }
  return beginning ? (
    <LoginView changeBeginning={changeBeginning}
      changeDefaultPage={changeDefaultPage}
      friendsBucket={friendsBucket}
      setSelectedFriends={setSelectedFriends}
    />
  ) : (
    <MovieView
    defaultPage={defaultPage}
    changeBeginning={changeBeginning}
    changeDefaultPage={changeDefaultPage}
    data={{
      movieTopRated,
      movieTrending,
      tvTopRated,
      tvTrending,
      page2TopRated,
      page2Trending
    }}
    friendsBucket={friendsBucket}
    selectedFriends={selectedFriends}
    setSelectedFriends={setSelectedFriends}
    />
  );
}
