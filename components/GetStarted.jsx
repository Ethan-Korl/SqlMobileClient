
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const GetStarted = (props) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity className="justify-center px-2 py-1 m-1 bg-pink-300 rounded-md h-9" onPress={() => navigation.navigate("HomeScreen")}>
      <Text className="text-xl">Get Started</Text>
    </TouchableOpacity>
  )
}

export default GetStarted

const styles = StyleSheet.create({})