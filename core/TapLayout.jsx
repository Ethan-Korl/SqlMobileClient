import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const tapIcon = (name) => {
  return (
    <AntDesign name={name} size={24} color={"grey"} />
  )
}

const TapLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: 'absolute', borderTopWidth: 0, backgroundColor: 'black', height: 65 },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white"

      }}>
      <Tab.Screen
        options={{ headerShown: false, tabBarIcon: () => tapIcon("home") }}
        name='Home'
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ headerShown: false, tabBarIcon: () => tapIcon("database") }}
        name='Query'
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ headerShown: false, tabBarIcon: () => tapIcon("setting") }}
        name='History'
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ headerShown: false, tabBarIcon: () => tapIcon("user") }}
        name='Profile'
        component={HomeScreen}
      />
    </Tab.Navigator>
  )
}

export default TapLayout

const styles = StyleSheet.create({})