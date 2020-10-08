import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = (
    <Text style={styles.subHeaderStyle}>
      Hi there! You are in ComponentsScreen.
    </Text>
  );
  const myName = 'Irenita';

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      {greeting}
      <Text style={styles.subHeaderStyle}>My name is {myName}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
