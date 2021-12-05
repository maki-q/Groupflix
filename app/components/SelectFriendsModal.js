import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Logo } from './Logo';
import { ProfileIcon } from './ProfileIcon';
import { LargeButton } from './LargeButton';
import { FriendIcon } from './FriendIcon';
import Modal from "react-native-modal";
import styles from '../styles';

export function SelectFriendsModal({setModalVisible, modalVisible, selectedFriends, friendsBucket, setSelectedFriends }) {
  const [localFriends, setLocalFriends] = useState(selectedFriends);

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
    <Modal
      isVisible={modalVisible}
      backdropColor="#0f0f0f"
      backdropOpacity={1}
      onBackButtonPress={() => setModalVisible(false)}
      style={{ flex: 1 }}
    >
      <View style={[{ flex: 1, alignItems: 'center', width: '110%', marginLeft: '-5%'}, styles.backgroundTheme]}>
        <Logo />
        <ProfileIcon />
        <Text style={[{marginBottom: 50}, styles.infoText]}>{"Who are you watching with?"}</Text>
        <View style={{ flex: 6, flexDirection: 'row', width: '85%', flexWrap: 'wrap', justifyContent: 'center'}}>
          {friendsBucket.map((friend, index) => <FriendIcon key={`1-${index}`} friend={friend} id={index} toggleSelected={toggleSelected} selected={selectedFriends.indexOf(index) !== -1}/>)}
        </View>
        <View style={{flex: 2, width: '100%', alignItems: 'center'}}>
        <LargeButton
          title="Find common titles"
          onPress={() => {
            setSelectedFriends(localFriends);
            setModalVisible(false);
          }}
        />
        </View>
      </View>
    </Modal>
  )
}