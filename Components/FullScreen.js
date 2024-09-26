import React, { useState } from 'react';


import { StyleSheet, Text, View, SafeAreaView, Pressable, StatusBar  } from 'react-native';
import SafeAreaStyle from './SafeAreaStyle';

//Cargar datos del store
//Para acceder y modificar los datos de mi store
import { useSelector, useDispatch } from 'react-redux';

//Esto importa la función que me permite cambiar los valores :C
import { changeRGB } from '../store/ColorSlice';


export default function FullScreen()  {
    //Para usar y actualizar el store

    //colorChanger es el nombre que le di en ColorSlice
    const counter = useSelector(state => state.color.rgbColor);
    const dispatch = useDispatch();

    
    return (
        
        // Contenedor General
        <View style={[styles.container, {backgroundColor: `rgb(${counter[0]}, ${counter[1]}, ${counter[2]})`}]}>
            
            <Text style={styles.textStyle}>Chris Marica</Text>

        </View>
    );
  
}

const styles = StyleSheet.create({
    container: {
      // backgroundColor: Colors.Background_Color,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle:{
        fontSize: 100
    }
  });