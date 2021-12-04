import React, { useState, useRef, useEffect } from 'react';
import { Text, SafeAreaView, ScrollView, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { SearchCard, TopSearchCard, CustomModal } from '../components'
import styles from '../styles';
import { data } from './data';

export function SearchScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [focusVideo, setFocusVideo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [topSearch, setTopSearch] = useState(data.results);

  const search = useRef(null);

  useEffect(() => {
    search.current.focus();
  }, []);

  function selectVideo(data) {
    setFocusVideo(data);
    setModalVisible(true);
  }

  function createSearchCards() {
    const bucket = []
    let subBucket = []
    for(let i = 0; i < topSearch.length; i++) {
      subBucket.push(<SearchCard key={i} data={topSearch[i]} onClick={selectVideo} />)

      if(subBucket.length === 3 || (i + 1 === topSearch.length)) {
        bucket.push((
          <View key={i} style={{flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
            {subBucket}
          </View>
        ));
        subBucket = [];
      }
    }
    console.log(bucket)
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
      <Text style={{color: 'white', width: '100%',fontSize: 18, paddingLeft: 10, margin: 10, marginBottom: 5}}>Top Searches</Text>
      <ScrollView style={{width: '100%'}}>
        {createSearchCards()}
        <TopSearchCard />
      </ScrollView>

    </SafeAreaView>
  );
}