/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import {Alert, Dimensions, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';



function App(){
 const [email,setEmail] = useState('');
 const [password,setPassword] = useState('');
 const [message, setMessage] = useState('');

 const handleSignUp = async() =>{
  try {
    const isUserCreated = await auth().createUserWithEmailAndPassword(email,password);
    console.log(isUserCreated);
    
  } catch (err) {
    console.log(err);
    setMessage(err.message);
  }
 }
  
  
  return (
    <View style={styles.container}>
      <StatusBar hidden= {true}/>
      <View>

        <Text style={{textAlign:'center', fontSize: 20, fontWeight: 'bold', color:'#fff'}}>
          SignUp Page</Text>

        <TextInput style={styles.inputBox} 
        placeholder='Email'
        value={email}
        onChangeText={value => setEmail(value)} />

      <TextInput style={styles.inputBox} 
        placeholder='Password'
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}/>

        
        <TouchableOpacity style={styles.button} onPress={() => handlehandleSignUp()}>
          <Text style={{color: '#fff'}}>SignUp</Text>
        </TouchableOpacity>
         
       <Text style={{color:"#888", marginTop: 10}}>{message}</Text>
      
      </View>
    </View>
  );
}

const {height,width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "black",
  },
  inputBox:{
    width: width - 30,
    borderRadius: 15,
    borderWidth: 2,
    marginVertical: 15,
    padding: 10,
    borderColor: '#fff',
    backgroundColor: '#fff',
    color: '#000'
    
  },
  button:{
  backgroundColor: 'green',
  alignItems: 'center',
  padding: 15,
  borderRadius: 50,
  },
  cardContainer:{
    marginVertical: 20,
  },
  card:{
    backgroundColor: '#6dd7fd',
    width: width - 40,
    padding: 20,
    borderRadius:30,
    marginVertical: 10,
  }
});

export default App;
