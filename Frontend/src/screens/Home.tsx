import React from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaProvider style={styles.container}>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1A1A1A'
    }
});

export default Home;