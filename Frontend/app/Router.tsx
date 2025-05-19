import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../src/screens/Home"
import Profile from "../src/screens/Profile"
import Notifications from "../src/screens/Notifications"
import Configuration from "../src/screens/Configuration"
import { Routes } from "../src/common/enums/Routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { COLORS } from "@/src/constants/colors";
import { FONTS } from "@/src/constants/fonts";

const Drawer = createDrawerNavigator();

const Router = () =>  {
    
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer.Navigator screenOptions={{ 
                drawerStyle: {backgroundColor: COLORS.primaryColor},
                drawerLabelStyle: {fontFamily: 'JetBrainsMono-Regular'},
                drawerActiveTintColor:  COLORS.fontLight,
                drawerInactiveTintColor: COLORS.fontLight,
                headerTitle: "", headerTransparent: true, headerTintColor: COLORS.fontLight }}>
                <Drawer.Screen name={Routes.Home} component={Home}/>
                <Drawer.Screen name={Routes.Profile} component={Profile}/>
                <Drawer.Screen name={Routes.Notifications} component={Notifications}/>
                <Drawer.Screen name={Routes.Configuration} component={Configuration}/>
            </Drawer.Navigator>
        </GestureHandlerRootView>
  );
};

export default Router;