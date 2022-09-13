import React from "react";
import {TextInput, View, Text, StyleSheet} from 'react-native'


 export default function Result(props){
    return(
        <View style={styles.resultAll}>

            <View ><Text style={styles.resultValue}>{props.resultValue}</Text></View>
            <View ><Text style={styles.resultText}>{props.resultText}</Text></View>
        </View>
    )
 }
 const styles = StyleSheet.create({
        
    resultText: {
        fontWeight:'bold',
        fontSize:'20px',
        margin:'2% 2% 2% 2%',
        paddingTop:'0%',
        paddingBottom:'5%'

        


    },
    resultValue:{
        
        fontSize: '20px',
        marginTop:'5%',
        fontWeight:'bold'
    },
    resultAll:{
        display:'flex',
        alignItems:'center',
        backgroundColor: '#ececec',
        marginTop: '10%',
        paddingBottom: '10%',
        borderRadius:'20px'

    }    
    })