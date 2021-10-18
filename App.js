import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainBox from './components/mainBox.js'
import Title from './components/title.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Title />

        <MainBox />
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    marginBottom: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
