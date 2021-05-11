import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function() {
 return (
        <View style={estilos.container}>
            <View style={estilos.box1}></View>
            <View style={estilos.box2}></View>
            <View style={estilos.box3}></View>
        </View>
   )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#333',
        flex: 1,
    },
    box1: {
        backgroundColor: 'red',
        flexGrow: 1,
        borderWidth: 1   
    },

    box2: {
       
        backgroundColor: 'white',
        flexGrow: 1,
        borderWidth: 1
    },

    box3: {
        backgroundColor: '#000',
        flexGrow: 1,
        borderWidth: 1
    }
})