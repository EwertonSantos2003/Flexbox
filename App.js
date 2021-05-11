import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LayoutFixo from './assets/components/LayoutFixo';
import FlexGrow from './assets/components/FlexGrow';
import ExemploStates from './assets/components/ExemploStates';

export default function App() {
  return (
    <View style={styles.container}>
      <ExemploStates inicial="0"/>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
