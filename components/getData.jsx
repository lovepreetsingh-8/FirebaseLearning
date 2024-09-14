import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import {SafeAreaView, StyleSheet, Text,list} from 'react-native';
import database from '@react-native-firebase/database';

function GetData() {
    const [myData, setMyData] = useState(null);
    const [myrealData, setMyRealData] = useState(null);
     useEffect (() => {
      getDatabase();
      realtimeDatabase();
     },[]);
     
     const getDatabase = async() => {
       try{
         const data = await  firestore().collection("login").doc("c5AkQ1eKwvXoIvZueBkK").get();
         
         setMyData(data._data);
       } catch (err) {
         console.log(err);
       }}
   
     const realtimeDatabase = async()=> {
       try{
         const realtimeData = await database().ref('id/1').once('value');
         setMyRealData(realtimeData.val());
   
       }catch(err){
         console.log(err);
       }
     }    
     
     return (
       <SafeAreaView>
         <Text>Age: {myData ? myData.age : "Loading"}</Text>
         <Text>Name: {myData ? myData.username : "Loading"}</Text>
         <Text>Hobby: {myData ? myData.hobby.map(list => ` ${list}`) : "Loading"}</Text>
         <Text>Age: {myrealData ? myrealData.age : "Loading"}</Text>
       </SafeAreaView>
     );
   
}

const styles = StyleSheet.create({
  
});

export default GetData;