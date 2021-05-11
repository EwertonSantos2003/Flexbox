import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
export default function(props) {

    const [numero, setNumero] = useState(props.inicial);
    function add(){
        setNumero(numero + 1);
        console.log(numero);
    }

    function sub(){
        setNumero(numero - 1);
        console.log(numero);
    }

 return (
       <View style={estilos.container}>
           <Text>{numero}</Text>
            <Button title="+" onPress={add}/>
            <Button title="-" onPress={sub}/>
       </View>
   )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
})