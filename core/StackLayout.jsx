import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from '../screens/WelcomeScreen'
import TapLayout from './TapLayout';

const Stack = createStackNavigator();

const StackLayout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name='WelcomeScreen'
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name='HomeScreen'
        component={TapLayout}
      />
    </Stack.Navigator>
  )
}

export default StackLayout

const styles = StyleSheet.create({})