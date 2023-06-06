import { View, Text, StatusBar, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


export default function HomePage() {
  const [isHovered, setIsHovered] = useState(false);

  const handlePress = () => {
    setIsHovered(!isHovered);
  };
  const box = isHovered ? styles.containerHovered :styles.box;

  return (
    <ScrollView>
      
    <View style={{backgroundColor:"darkblue"}}>
    
      <View style={styles.navbar}>
      <Text style={styles.box}>Services</Text>
      <Text style={styles.box}>Technologies</Text>
      <Text style={styles.box}>Blog</Text>
      <Text style={styles.box}>Latest Update</Text>
      <Text style={styles.box}>About</Text>
      <Text style={styles.box}>Complain</Text>
      <Text style={styles.box}>Feedback</Text>
      <Text style={styles.box}>Blog</Text>
      <Text style={styles.box}>Latest Update</Text>
      <Text style={styles.box}>About</Text>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <Text style={box}>Complain</Text></TouchableOpacity>
      <Text style={styles.box}>Feedback</Text>
      <Text style={styles.box}>Blog</Text>
      <Text style={styles.box}>Latest Update</Text>
      <Text style={styles.box}>About</Text>
      <Text style={styles.box}>Complain</Text>
      <Text style={styles.box}>Feedback</Text>
      <Text style={styles.box}>Blog</Text>
      <Text style={styles.box}>Latest Update</Text>
      <Text style={styles.box}>About</Text>
      <Text style={styles.box}>Complain</Text>
    </View>
    </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create ({
  title: {
    padding:30,
  marginTop: 30,
  textAlign: 'center',
  color: 'white',
  fontWeight: 'bold',
  borderBottomColor:"blue",
backgroundColor:'red',
  borderBottomWidth:3,
  fontSize: 25,
  
  },
  navbar:{
    padding:20,
    display:'flex',
    flexDirection:"row",
    gap:10,
    flexWrap:'wrap'
    
  },
  box:{
width:100,
backgroundColor:'red',
textAlign:'center',
display:'flex',
justifyContent:'center',
alignItems:'center',
color:'white',
textAlignVertical:'center',
fontWeight:'300',
height:100,
borderRadius:10


  },
  containerHovered:{
    width:100,
    backgroundColor:'gray',
    textAlign:'center',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color:'white',
    textAlignVertical:'center',
    fontWeight:'300',
    height:100,
    borderRadius:10
  }
  })