import React, {useContext} from 'react';

import {useState, useEffect, useRef, StatusBar} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';

import SafeAreaStyle from './SafeAreaStyle';
import Colors from '../Utils/Colors';


// ICONS
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


//To navigate
import { useNavigation } from "@react-navigation/native";



//Cargar datos del store
//Para acceder y modificar los datos de mi store
import { useSelector, useDispatch } from 'react-redux';

//Esto importa la función que me permite cambiar los valores :C
import { changeRGB } from '../store/ColorSlice';


export default function Home()  {
    //Para usar y actualizar el store

    //colorChanger es el nombre que le di en ColorSlice
    const counter = useSelector(state => state.color.rgbColor);
    const dispatch = useDispatch();



    //To navigate
    const navigation = useNavigation();

    
    const iconsSize = 30;
    const playIconSize = 50;

    const handlePress = () => {
        dispatch(changeRGB())
      };
    
    return (
        //Para usar los datos de mi store
        
                // Contenedor General
            <SafeAreaView style={[styles.container, SafeAreaStyle.AndroidSafeArea, {backgroundColor: `rgb(${counter[0]}, ${counter[1]}, ${counter[2]})`}]}>
                    
                    
                {/* HEADER */}
                <View style={styles.header}>
                
                {/* GUARDAR */}
                <Pressable style={styles.button}>
                    <FontAwesome name='save' size={iconsSize} color={`rgb(${counter[0]}, ${counter[1]}, ${counter[2]})`}/>
                    <Text></Text>
                </Pressable>

                {/* LISTAR GUARDADOS */}
                <Pressable style={styles.button}>
                    <FontAwesome name='list-ul' size={iconsSize} color={`rgb(${counter[0]}, ${counter[1]}, ${counter[2]})`}/>
                
                    <Text></Text>
                </Pressable>

                {/* PANTALLA COMPLETA */}
                <Pressable style={styles.button} onPress={() => navigation.navigate('FullScreen')}>
                    <MaterialCommunityIcons name='fullscreen' size={iconsSize} color={`rgb(${counter[0]}, ${counter[1]}, ${counter[2]})`}/>

                </Pressable>
                </View>

                {/* FOOTER */}
                <View style={styles.footer}>

                {/* MÁS OPCIONES */}
                <Pressable style={styles.button}>
                    <MaterialCommunityIcons name='unfold-more-horizontal' size={iconsSize} color={`rgb(${counter[0]}, ${counter[1]}, ${counter[2]})`}/>
                
                    <Text></Text>
                </Pressable>

                {/* GENERAR COLOR */}
                <Pressable style={[styles.button, styles.playButton]} 
                            onPress={handlePress}
                            >
                    <MaterialCommunityIcons name='play' size={playIconSize} color={`rgb(${counter[0]}, ${counter[1]}, ${counter[2]})`}/>
                
                </Pressable>

                <Pressable style={styles.button}>
                    <MaterialCommunityIcons name='information-variant' size={iconsSize} color={`rgb(${counter[0]}, ${counter[1]}, ${counter[2]})`}/>
                
                    <Text></Text>
                </Pressable>


                </View>

            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      // backgroundColor: Colors.Background_Color,
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      height: '100%'
    },
    header:{
      flexDirection: 'row',
      justifyContent:'space-evenly',
      alignItems: 'center',
      width: '100%',
      height:'8%',
      backgroundColor: Colors.Nav_Color,
    },
    footer:{
      backgroundColor: Colors.Nav_Color,
      width: '100%',
      height:'8%',
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      justifyContent:'space-evenly',
      alignItems: 'center',
    },
    button:{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor:Colors.Button_Color,
      borderRadius: 10,
      width: '13%',
      height: '70%',
    },
    playButton:{
      width: '16%',
      height: '87%',
      bottom: '50%'
    }
  });
// ...
