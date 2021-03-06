import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import { LargeButton, Logo, ProfileIcon, FriendIcon } from '../components';

export function WatchingWith({ changeBeginning, changeDefaultPage, friendsBucket, setSelectedFriends }) {
  const [localFriends, setLocalFriends] = useState([]);

  function toggleSelected(index) {
    if (localFriends.indexOf(index) === -1) {
      setLocalFriends([index, ...localFriends])
    } else {
      const newBucket = [...localFriends];
      newBucket.splice(localFriends.indexOf(index), 1);
      setLocalFriends(newBucket);
    }
  }

  return (
    <View style={[{ flex: 1, alignItems: 'center' }, styles.backgroundTheme]}>
      <Logo />
      <ProfileIcon />
      <Text style={[{marginBottom: 50}, styles.infoText]}>{"Who are you watching with?"}</Text>
      <View style={{ flex: 6, flexDirection: 'row', width: '85%', flexWrap: 'wrap', justifyContent: 'center'}}>
        {friendsBucket.map((friend, index) => <FriendIcon key={`1-${index}`} friend={friend} id={index} toggleSelected={toggleSelected} />)}
      </View>
      <View style={{flex: 2, width: '100%', alignItems: 'center'}}>
      <LargeButton
        title="Find common titles"
        onPress={() => {
          setSelectedFriends(localFriends);
          changeDefaultPage('Watch');
          changeBeginning(false);
        }}
      />
      </View>
    </View>
  );
}