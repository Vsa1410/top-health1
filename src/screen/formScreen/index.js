import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View,Button } from 'react-native';
import Form from '../../components/form';
import { Link } from 'react-router-native';



export default function FormScreen() {
  return (
    <View style={styles.container}>
      
      <View style={styles.topScreen}> 
        <Text style={styles.mainText}>Top Health </Text>
      </View>
      <ScrollView style={styles.scrollInfo}>
        <Form/>
        
      </ScrollView>
        <Link to={"/"}>
          <Text style={styles.button}>Voltar</Text>
        </Link>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    height:'95%'
    
    
  },
    topScreen:{
      display: 'flex',
      
      height:'22%',
      margin: '0% 0% 0% 0%',
      alignItems: 'center',
      backgroundColor: 'rgb(177,10,12)',
      borderRadius:'20px 20px 0px 0px'
      
      
    },
    mainText:{
      color:'white',
      fontSize:'30px',
      marginTop: '20%',
      fontWeight:'bold',
      alignItems:'flex-start',
      justifyContent:'flex-start'
      
    },
    space:{
      height:'10%'
    },
    
    scrollInfo:{
      
      minHeight:'50%'
    },
    button:{
      fontSize:'20px',
      fontWeight:'bold',
      color:"'rgb(177,10,12)'"
    }
});