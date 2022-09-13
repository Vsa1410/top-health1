import React, { useState } from "react";
import {TextInput, View, Text, StyleSheet} from 'react-native'
import {Button} from '@react-native-material/core'
import Result from "../resultimc";


export default function Form(){
    const [weight, setWeight] = useState()
    const [personHeight, setPersonHeight]= useState()
    const [imcResult, setImcResult] = useState()
    const [imcText, setImcText] =useState("Digite os valores para consultar seu IMC")

    function calculate(){
        let heightFixed = (personHeight.replace(",", "."))
        let functionHeight = Number(heightFixed)
        let functionWeight = Number(weight)

        let result = (functionWeight/(functionHeight**2))
        let resultText=""
        
        if (result < 17){
            setImcText( "Você está muito abaixo do peso")
        }
        else if(result< 18.49){
            setImcText("Você está abaixo do Peso")
        }
        else if(result< 24.49){
            setImcText("Seu peso está no ideal")
        }
        else if (result < 29.99){
            setImcText("você está acima do peso ideal")
        }
        else if (result < 34.99){
            setImcText("Você está com obesidade nível I")

        }
        else if(result < 39.99){
            setImcText("você está com obesidade nível II considerada ‘severa’")
        }
        else if (result>= 40){
            setImcText( "Você está com obesidade nível III considerada ‘mórbida’")
                
        }
        setImcResult(result)
        }
    


    return (
        <View>
            <View style={styles.mainScreen}>
                <Text style={styles.labelText}>Altura</Text>
                <TextInput
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
                    style={styles.inputText}
                    returnKeyType='done' 
                    onChangeText={(e) => setPersonHeight(e)}
                />
                
                
                <Text style={styles.labelText}>Peso</Text>
                <TextInput
                    placeholder="Ex: 86"
                    keyboardType="numeric"
                    onChangeText={e => setWeight(e)}
                    returnKeyType='done' 
                    style={styles.inputText}
                />
            </View>
            <View style={styles.calculateButton}>
                <Button title="Calcular"   color="error"  onPress={calculate} />
            </View>
            <Result
                resultValue={imcResult}
                resultText={imcText}
                />
        </View>
    )
}
const styles = StyleSheet.create({
    mainScreen: {
      
      
      color: 'black',
      display: 'flex',
      alignItems: 'center',
      marginTop:'5%',
      marginBottom:'0%',
      paddingBottom:'0%'
      
      
    },
    labelText: {
        fontSize:'30px',
        marginTop: '5%'

    },
    inputText:{
        height:'15%',
        fontSize: '25px',
        borderStyle: 'dashed',
        borderColor: 'black',
        

    },
    calculateButton:{
        marginTop: '0%',
        alignSelf:'center',
        paddingTop:'0%'

    }
    })