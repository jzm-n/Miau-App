import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./src/screens/Home"
import Profile from "./src/screens/Profile"
import Notifications from "./src/screens/Notifications"
import Configuration from "./src/screens/Configuration"
import { Routes } from "./src/common/enums/Routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Drawer = createDrawerNavigator();

const Router = () =>  {
    
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer.Navigator screenOptions={{ 
                drawerStyle: {backgroundColor: '#1A1A1A'},
                drawerLabelStyle: {fontFamily: 'JetBrainsMono-Regular'},
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: 'white',
                headerTitle: "", headerTransparent: true, headerTintColor: 'white' }}>
                <Drawer.Screen name={Routes.Home} component={Home}/>
                <Drawer.Screen name={Routes.Profile} component={Profile}/>
                <Drawer.Screen name={Routes.Notifications} component={Notifications}/>
                <Drawer.Screen name={Routes.Configuration} component={Configuration}/>
            </Drawer.Navigator>
        </GestureHandlerRootView>
  );
};

export default Router;