import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from '../screens/WelcomeScreen'

const Stack = createStackNavigator();

const StackLayout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
    </Stack.Navigator>
  )
}

export default StackLayout

const styles = StyleSheet.create({})