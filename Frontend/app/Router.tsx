import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../src/screens/Home"
import Profile from "../src/screens/Profile"
import Notifications from "../src/screens/Notifications"
import Configuration from "../src/screens/Configuration"
import { Routes } from "../src/common/enums/Routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { COLORS } from "@/src/constants/colors";
import { HomeOffIcon, 
        NotificationsOffIcon,
        SettingsOffIcon,
        MemberOffIcon,
} from "../src/components/icons/iconIndex";

const Drawer = createDrawerNavigator();

const Router = () =>  { 
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer.Navigator screenOptions={{ 
                drawerStyle: {backgroundColor: COLORS.primaryColor},
                drawerLabelStyle: {fontFamily: 'JetBrainsMono-Regular'},
                drawerActiveTintColor:  COLORS.white,
                drawerInactiveTintColor: COLORS.white,
                headerTitle: "", headerTransparent: true, headerTintColor: COLORS.white }}>

                <Drawer.Screen options={{
                    drawerIcon: () => (<HomeOffIcon width={20} height={18}/>)}}
                    name={Routes.Home} component={Home}/>

                <Drawer.Screen options={{
                    drawerIcon: () => (<MemberOffIcon width={20} height={18}/>)}}
                    name={Routes.Profile} component={Profile}/>

                <Drawer.Screen options={{
                    drawerIcon: () => (<NotificationsOffIcon width={20} height={18}/>)}}
                    name={Routes.Notifications} component={Notifications}/>

                <Drawer.Screen options={{
                    drawerIcon: () => (<SettingsOffIcon width={20} height={18}/>)}}
                    name={Routes.Configuration} component={Configuration}/>

            </Drawer.Navigator>
        </GestureHandlerRootView>
  );
};

export default Router;