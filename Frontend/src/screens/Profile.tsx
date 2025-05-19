import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const Profile = () => {
  return (<SafeAreaProvider style={styles.container}></SafeAreaProvider>);
};

const styles  =  StyleSheet.create({
  container : {
    backgroundColor: '#1A1A1A'
  }
})

export default Profile;