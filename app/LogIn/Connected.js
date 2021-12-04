import * as React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import { SmallButton, Logo } from '../components';

export function Connected({ navigation, changeBeginning }) {
  return (
    <View style={[{ flex: 1, alignItems: 'center' }, styles.backgroundTheme]}>
      <Logo />
      <Text style={styles.infoText}>{"Awesome. You are now connected."}</Text>
      <Text style={styles.infoText}>{"Next time you watch together you'll find a title you all love in just a few seconds."}</Text>
      <SmallButton position="right"
        title="Explore"
        onPress={() => changeBeginning(false)}
      />
      <SmallButton position="left"
        title="Watch Now"
        onPress={() => navigation.navigate("Watching With")}
      />
    </View>
  );
}