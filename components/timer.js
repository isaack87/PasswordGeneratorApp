import React, { Component } from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import Constants from 'expo-constants';
import { ProgressBar, Colors, Card } from 'react-native-paper';

var i = 0
var seconds =0;

export default class Timer extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      timerValue:0,
      progress:0,
      finished: false
    }
  }
  componentDidMount(){
    this.timer()
    this.incrementSeconds()

  }

  componentDidUpdate() {
    if (this.state.progress == 1) {
      this.props.reset()
    }
  }

  timer(){
    setInterval(()=> {
      this.setState({
        timerValue: this.state.timerValue+1
      },()=>{
        if(this.state.timerValue==1){
          this.setState({
          timerValue: 0,
          finished: true
        })
        }
      })
  }, 1000);
}

  // progress bar increments when progress reaches end
  // call function to set password and hashpassword back to blank
  incrementSeconds() {
   setInterval(()=> {
      seconds = seconds +1
      if(seconds > 50){
        seconds=1
      }
      this.setState({
        seconds: seconds,
        progress: (2*seconds)/100
      })
  }, 1000);
}

render(){
  return (
    <View style={{justifyContent:'center', alignItems:'center', borderWidth: 1, height: 11, marginTop:11 }}>
        <ProgressBar progress={this.state.progress} color={Colors.blue700} style={{width:180, height: 11}}/>
    </View>
  );
  }
}
