//import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Vistas propias
import Home from './Components/Home';
import FullScreen from './Components/FullScreen';

//Para el contexto usando Redux
import { Provider } from 'react-redux';
//Mi store usando Redux
import Store from './store/Store';


const Stack = createStackNavigator();


export default function App() {

  return (

    // ColorContext.Provider envía los datos que se guyardaron en ColorProvider
    //  a todos los elementos que estén dentro de él
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown:false}}
          />
          <Stack.Screen
              name="FullScreen"
              component={FullScreen}
              options={{headerShown:false}}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
  );
}
