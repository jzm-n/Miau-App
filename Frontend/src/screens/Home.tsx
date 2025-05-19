import React from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS } from '../constants/colors';

const Home = () => {
  return (
    <SafeAreaProvider style={styles.container}>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.primaryColor,
    }
});

export default Home;