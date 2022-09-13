import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Form from './src/components/form';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topScreen}> 
        <Text style={styles.mainText}>Top Health </Text>
      </View>
      <ScrollView style={styles.scrollInfo}>
        <Form/>
        <Text style={styles.infoText}>O IMC, índice de massa corporal é uma medida que poderá ser calculada com apenas duas informações referentes a você, sua altura e peso. E através do resultado deste cálculo você irá ficar sabendo qual o seu grau de obesidade ou se está em um peso normal através da tabela IMC.</Text>
        <View style={styles.space}><Text> </Text></View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
    topScreen:{
      display: 'flex',
      
      height:'15%',
      margin: '0% 0% 0% 0%',
      alignItems: 'center',
      backgroundColor: 'rgb(177,10,12)',
      borderRadius:'20px 20px 0px 0px'
      
      
    },
    mainText:{
      color:'white',
      fontSize:'30px',
      marginTop: '18%',
      fontWeight:'bold',
      alignItems:'flex-start',
      justifyContent:'flex-start'
      
    },
    space:{
      height:'10%'
    },
    infoText:{
      margin: '2% 2% 20% 2%'
    },
    scrollInfo:{
      flexGrow:1,
      minHeight:'50%'
    }
});
