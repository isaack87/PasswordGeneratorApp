
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> SECRET ENCRPYTION CYPHER</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  title: {
    shadowColor: 'blue',
    shadowOffset: {
      width: 11,
      height: 8,
    },
    color: 'red',
    fontSize: 35,
    marginTop: -120,
    justifyContent: 'center',
    textAlign: 'center',
    shadowOpacity: .8,
    shadowRadius: 3,
    elevation: 6,
  },
});
