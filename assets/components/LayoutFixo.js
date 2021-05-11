import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function() {
 return (
       <View style={estilos.container}>
           <View style={estilos.box1}></View>
           <View style={estilos.box2}></View>
           <View style={estilos.box3}></View>

           <View style={estilos.box1}></View>
           <View style={estilos.box2}></View>
           <View style={estilos.box3}></View>

           <View style={estilos.box1}></View>
           <View style={estilos.box2}></View>
           <View style={estilos.box3}></View>

       </View>
   )
}

const estilos = StyleSheet.create({
container: {
    flex: 1, 
    backgroundColor: '#ccc', 
    flexDirection: 'row',
    flexWrap: 'wrap',
},

    box1: {
        width: 70,
        height: 70,
        backgroundColor: 'red',
        
    },

    box2: {
        width: 70,
        height: 70,
        backgroundColor: '#fff',
        
    },

    box3: {
        width: 70,
        height: 70,
        backgroundColor: '#000',
        
    }
});