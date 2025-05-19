import React from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS } from '../constants/colors';

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
      backgroundColor: COLORS.primaryColor,
    }
});

export default Configuration;