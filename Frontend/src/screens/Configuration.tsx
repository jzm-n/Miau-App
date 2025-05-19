import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Configuration = () => {
  return (<SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    </SafeAreaView>
  </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A1A1A',
    }
});

export default Configuration;