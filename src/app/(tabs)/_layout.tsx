import { Tabs } from "expo-router"
import React from 'react'

import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter"
import { Feather, MaterialIcons } from "@expo/vector-icons"

export default function TabsLayout() {

    const [fontsLoaded, fontError] = useFonts({
        Inter_400Regular,
        Inter_700Bold
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <Tabs screenOptions={{headerShown:false}}>
            <Tabs.Screen name="index" options={{
                headerTitle: "Home",
                title: "Home",
                tabBarIcon: ({color})=> <MaterialIcons name="home" size={22} color={color} />,
                tabBarStyle:{backgroundColor: "#222831"},
                tabBarActiveTintColor: "#EEEEEE"
            }}/>
            <Tabs.Screen name="Add" options={{
                headerTitle: "Lista de compras",
                title: "Add",
                tabBarIcon: ({color})=> <Feather name="plus" size={22} color={color} />,
                tabBarStyle:{backgroundColor: "#222831"},
                tabBarActiveTintColor: "#EEEEEE"
            }}/>
            <Tabs.Screen name="User" options={{
                headerTitle: "User Page",
                title: "User",
                tabBarIcon: ({color})=> <Feather name="user" size={22} color={color} />,
                tabBarStyle:{backgroundColor: "#222831"},
                tabBarActiveTintColor: "#EEEEEE"
            }}/>

        </Tabs>
    )
}