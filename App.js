// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React, { useState } from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import { MovieView } from './app/MovieView';
import { LoginView } from './app/LoginView';

export default function App() {
  const [beginning, changeBeginning] = useState(true);
  const [defaultPage, changeDefaultPage] = useState('Movies');
  const [loaded] = useFonts({
    Ubuntu: require('./assets/fonts/Ubuntu-Regular.ttf'),
  })

  if(!loaded) {
    return <Text>{"Loading..."}</Text>
  }

  return beginning ? (
    <LoginView changeBeginning={changeBeginning} changeDefaultPage={changeDefaultPage}/>
  ) : (
    <MovieView defaultPage={defaultPage} changeBeginning={changeBeginning} changeDefaultPage={changeDefaultPage}/>
  );
}
