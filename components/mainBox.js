
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Pressable, TextInput, ImageBackground, TouchableOpacity} from 'react-native';

import {Clipboard} from 'react-native';
import axios from 'axios';
import Timer from './timer.js';
import Title from './title.js';


export default function MainBox() {
  const [password, setPassword] = useState('');
  const [hashedpw, setHashedpw] = useState('');

  const getHashedPassword = (pw) => {
    axios.get(`http://192.168.0.120:5000/retrieve?password=${pw}`)
        .then(function(response) {
          if (response.data === 'password doesnt exist') {
            alert('password does not exist');
          }
          setHashedpw(response.data);
        })
        .catch(function(error) {
          console.log('error');
        });
  };

  // componentDidMount(re-render on state change)
  useEffect(() => {
    if (!password) {
      setHashedpw('');
    }
  });

  const removePassword = () => {
    setHashedpw('');
    setPassword('');
  };

  const createHashedPassword = (password) => {
    axios.post(`http://192.168.0.120:5000/create?password=${password}`)
        .then(function(response) {
          alert('pass created');
        })
        .catch(function(error) {
          console.log('error in createdhash');
        });
  };

  return (
    <ImageBackground
      resizeMode={'stretch'}
      style={styles.container}
      source={require('../assets/background2.jpeg')}>
      <View style={styles.container}>
        <Title />
        <TouchableOpacity onPress={() => Clipboard.setString(`${hashedpw}`)}>
          <View>
            <Text style={styles.hashedpw}>
              {hashedpw}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.mainbox}>
          <TextInput style={styles.inputbox}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="  Enter Password ..."
            placeholderTextColor="red"
          />
          <Pressable style={styles.btn}
            onPress={() => getHashedPassword(password)}>
            <Text style={styles.text}> Get Password</Text>
          </Pressable>
          <Pressable style={styles.btn}
            onPress={() => createHashedPassword(password)}>
            <Text style={styles.text}> Create Password</Text>
          </Pressable>
        </View>
        <Timer reset={removePassword}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '200%',
    borderWidth: 2,
  },
  size: {
    fontSize: 25,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 25,
    marginTop: 15,
    fontWeight: 'bold',
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'black',
    opacity: 0.9,
    shadowColor: '#4efd54',
    shadowOffset: {
      width: 2,
      height: 8,
    },
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    color: 'red',
  },
  inputbox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    color: 'white',
    borderColor: '#4efd54',
    paddingVertical: 5,
    borderRadius: 8,
    padding: 15,
    backgroundColor: 'black',
    opacity: 0.9,
    shadowColor: '#4efd54',
    shadowOffset: {
      width: 11,
      height: 8,
    },
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 15,
  },
  mainbox: {

  },
  hashedpw: {
    marginTop: 50,
    marginBottom: 80,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    backgroundColor: '#4D4DFF',
    opacity: 0.9,
    shadowColor: '#4efd54',
    shadowOffset: {
      width: 11,
      height: 8,
    },
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 15,
    borderRadius: 30,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
