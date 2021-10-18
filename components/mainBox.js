
import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable, TextInput} from 'react-native';
import axios from 'axios';


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
    <View style={styles.container}>
      <View style={styles.mainbox}>
        <Text style={styles.center}> Enter PassWord: </Text>
        <TextInput style={styles.inputbox}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Enter Password to encrypt"
        />
        <Text style={styles.center}>   {hashedpw} </Text>
        <Pressable style={styles.btn}
          onPress={() => getHashedPassword(password)}>
          <Text style={styles.text}> Get Password</Text>
        </Pressable>

        <Pressable style={styles.btn}
          onPress={() => createHashedPassword(password)}>
          <Text style={styles.text}> Create Password</Text>
        </Pressable>
      </View>
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
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 30,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    color: 'red',
  },
  inputbox: {
    borderWidth: 1,
  },
  mainbox: {
    borderWidth: 1,
    borderColor: 'thistle',
  },
});
