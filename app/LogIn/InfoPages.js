import * as React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import { SmallButton, Logo } from '../components';

export function Info({ navigation }) {
  return (
    <View style={[{ flex: 1, alignItems: 'center' }, styles.backgroundTheme]}>
      <Logo />
      <Text style={styles.infoText}>Explore and tell us a bit about the titles you are interested in seeing in the future.</Text>
      <SmallButton position="right"
        title="Next"
        onPress={() => navigation.navigate("Info2")}
      />
      <SmallButton position="left"
        title="Back"
        onPress={() => navigation.navigate("Welcome")}
      />
    </View>
  );
}

export function Info2({ navigation, changeBeginning }) {
  return (
    <View style={[{ flex: 1, alignItems: 'center' }, styles.backgroundTheme]}>
      <Logo />
      <Text style={styles.infoText}>{"Next time you gather with friends we will match titles that you've all liked."}</Text>
      <Text style={styles.infoText}>{"Stop wasting time trying to figure out what to watch."}</Text>
      <Text style={styles.infoText}>{"We’ll find it for you and make sure you’ll all enjoy it."}</Text>
      <SmallButton position="right"
        title="Explore"
        onPress={() => changeBeginning(false)}
      />
      <SmallButton position="left"
        title="Back"
        onPress={() => navigation.navigate("Info")}
      />
    </View>
  );
}