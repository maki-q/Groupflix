import React, { useState, useRef, useEffect } from 'react';
import { Text, SafeAreaView, ScrollView, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { SearchCard, TopSearchCard, CustomModal } from '../components'
import axios from 'axios';
import styles from '../styles';
import { key } from '../key';

export function SearchScreen({ data }) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [focusVideo, setFocusVideo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const search = useRef(null);

  useEffect(() => {
    search.current.focus();
  }, []);

  useEffect(() => {
    if (query) {
      axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${key}&query=${query}`)
      .then(res => setSearchResults(res.data.results))
    }
  }, [query])

  function selectVideo(data) {
    setFocusVideo(data);
    setModalVisible(true);
  }

  function createCards() {
    const bucket = []
    let subBucket = []

    for(let i = 0; i < searchResults.length; i++) {
      subBucket.push(<SearchCard key={i} data={searchResults[i]} onClick={selectVideo} />)

      if(subBucket.length === 3 || (i + 1 === searchResults.length)) {
        bucket.push((
          <View key={i} style={{flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
            {subBucket}
          </View>
        ));
        subBucket = [];
      }
    }
    return bucket;
  }

  return (
    <SafeAreaView style={[styles.backgroundTheme]}>
      <CustomModal setModalVisible={setModalVisible} modalVisible={modalVisible} data={focusVideo}/>
      <SearchBar
        placeholder="Search"
        ref={search}
        onChangeText={setQuery}
        value={query}
        containerStyle={{backgroundColor: '#0f0f0f', borderBottomColor: 'transparent', borderTopColor: 'transparent', width: '90%'}}
        keyboardAppearance="dark"
        onFocus={() => search.current.clear()}
        returnKeyType="done"
      />
      {!query ? (
        <ScrollView style={{width: '100%'}}>
          <Text style={{color: 'white', width: '100%',fontSize: 18, paddingLeft: 10, margin: 10, marginBottom: 5}}>Top Searches</Text>
          {data.trending.map((search, index) => <TopSearchCard data={search} key={index} onClick={selectVideo} />)}
        </ScrollView>) : (
        <ScrollView style={{width: '100%'}}>
          {createCards()}
        </ScrollView>)}

    </SafeAreaView>
  );
}