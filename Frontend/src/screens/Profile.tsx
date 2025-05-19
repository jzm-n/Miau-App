import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

const Profile = () => {
  return (<SafeAreaProvider style={styles.container}></SafeAreaProvider>);
};

const styles  =  StyleSheet.create({
  container : {
    backgroundColor: COLORS.primaryColor,
  }
})

export default Profile;