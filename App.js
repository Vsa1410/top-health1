import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { NativeRouter, Route, Routes, BrowserRouter } from 'react-router-native';

import FormScreen from './src/screen/formScreen/index.js'

import Home from './src/screen/homeScreen';


export default function App() {
  return (
    <View>

      <NativeRouter>
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route
            path="/pagina"
            element={<FormScreen/>}
          />  
        </Routes>

      </NativeRouter>
    </View>
  );
}


