// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React, { useState } from 'react';
import { MovieView } from './app/MovieView';
import { LoginView } from './app/LoginView';

export default function App() {
  const [beginning, changeBeginning] = useState(true);
  return beginning ? (
    <LoginView changeBeginning={changeBeginning}/>
  ) : (
    <MovieView changeBeginning={changeBeginning}/>
  );
}
