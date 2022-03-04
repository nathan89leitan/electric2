import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Picker
} from "react-native";

import db from "../config";
import firebase from "firebase";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import { SearchBar, ListItem, Input } from "react-native-elements";
import { Appbar } from 'react-native-paper';


class CompareScreen extends Component{
 state= {user: '', user1: ''}
 updateUser = (user) => {
   this.setState({ user: user})
 }
 updateUser1 = (user1) => {
   this.setState({ user1: user1})
 }
  render() {
    return(
      <View style={styles.container}>
       <Appbar.Header style={{ backgroundColor: '#fff' }}>
          <Appbar.Content
            style={{ display: 'flex', alignItems: 'center' }}
            title="Electric Car App"
          />
      
        </Appbar.Header>
       <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}
         style={{ height: 50, width: 150 , marginLeft:10, marginTop: 10}}>
           <Picker.Item label = "Choose One" value = ""/>
           <Picker.Item label = "Tesla Model 3" value = "$44,990" />
           
           <Picker.Item label = "Tesla Model Y" value = "$58,990"/>
           <Picker.Item label = "Tesla Model X" value = "$104,990"/>
           <Picker.Item label = "Tesla Model S" value = "$94,990"/>
        </Picker>


       <Picker selectedValue = {this.state.user1} onValueChange = {this.updateUser1}
         style={{ height: 50, width: 150 , marginLeft:175, marginTop: -50}}>
           <Picker.Item label = "Choose One" value = ""/>
           <Picker.Item label = "BMW iX" value = "$83,200"/>
           <Picker.Item label = "Tesla Model Y" value = "$58,990"/>
           <Picker.Item label = "Tesla Model X" value = "$104,990"/>
           <Picker.Item label = "Tesla Model S" value = "$94,990"/>
        </Picker>
        <Text style = {styles.value}> Price: </Text><Text style ={styles.text}>{this.state.user}</Text>
        <Text style ={styles.text1}>{this.state.user1}</Text>
        
      </View>
    )
  } 
}
export default CompareScreen

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#6fc0b8"
  },
  text: {
    fontSize:20,
    alignSelf: 'left',
    marginLeft:50,
    color: 'green'
  },
  text1: {
    fontSize:20,
    alignSelf: 'right',
    marginLeft: 175,
    color: 'green',
    marginTop:-10
  },
  value: {
    marginTop: 10,
    fontSize: 12
  }
})