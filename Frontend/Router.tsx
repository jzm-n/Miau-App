import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./src/components/Home"
import Profile from "./src/components/Profile"
import Notifications from "./src/components/Notifications"
import Configuration from "./src/components/Configuration"
import { Routes } from "./src/common/enums/Routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

const Drawer = createDrawerNavigator();

const Router = () =>  {
    
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer.Navigator screenOptions={{ 
                drawerStyle: {backgroundColor: '#1A1A1A'},
                drawerLabelStyle: {fontFamily: 'JetBrainsMono-Regular'},
                drawerActiveTintColor: 'white',
                headerTitle: "", headerTransparent: true, drawerInactiveTintColor: 'white', headerTintColor: 'white' }}>
                <Drawer.Screen name={Routes.Home} component={Home}/>
                <Drawer.Screen name={Routes.Profile} component={Profile}/>
                <Drawer.Screen name={Routes.Notifications} component={Notifications}/>
                <Drawer.Screen name={Routes.Configuration} component={Configuration}/>
            </Drawer.Navigator>
        </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
    Drawer: {
      backgroundColor: "#1A1A1A",
    },
  });

export default Router;