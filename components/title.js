
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> SUPER SECRET ENCRPYTION DEVICE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    shadowColor: 'blue',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    color: 'red',
    shadowOpacity: .8,
    shadowRadius: 3,
    elevation: 6,
  },
});
