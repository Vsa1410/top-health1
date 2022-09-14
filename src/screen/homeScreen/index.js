
import React from "react";
import { StyleSheet, Text, View,Image } from 'react-native';
import { Link } from "react-router-native";



export default function Home(){
    return(
        <View>
            <View style={styles.topScreen}> 
                <Text style={styles.mainText}>Top Health </Text>
            </View>
            <View style={styles.mainContent} >
                <Image
                    style={styles.tinyLogo}
                    source={require('../../../assets/Balance.png')}
                />
                <Text style={styles.infoText}>O IMC, índice de massa corporal é uma medida que poderá ser calculada com apenas duas informações referentes a você, sua altura e peso. E através do resultado deste cálculo você irá ficar sabendo qual o seu grau de obesidade ou se está em um peso normal através da tabela IMC.</Text>    
                <Link to="/pagina">
                    <Text style={styles.button}>Calcular</Text>
                </Link>
            </View>
            
                
        </View>
    )
}
const styles = StyleSheet.create({

    infoText:{
        marginTop:'25%',
        marginBottom:'10%',
        marginLeft:'2%',
        marginRight:'2%',
        display:'flex',
        fontSize:'15px'
      },
      topScreen:{
        display: 'flex',
        
        height:'25%',
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
      button:{
        fontSize:'20px',
        fontWeight:'bold',
        color:"'rgb(177,10,12)'"
      },
      tinyLogo:{
        display:'flex',
        alignItems:'center',
        height:'30%',
        width:'30%'
      },
      mainContent:{
        display: 'flex',
        alignItems: 'center'
      }
})