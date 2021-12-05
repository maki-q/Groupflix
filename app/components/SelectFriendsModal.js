import React from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native';
import { Logo } from './Logo';
import { ProfileIcon } from './ProfileIcon';
import { LargeButton } from './LargeButton';
import { FriendIcon } from './FriendIcon';
import Modal from "react-native-modal";
import styles from '../styles';

export function SelectFriendsModal({setModalVisible, modalVisible, toggleSelected, selectedFriends, friendsBucket}) {
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
            setModalVisible(false)
          }}
        />
        </View>
      </View>
    </Modal>
  )
}