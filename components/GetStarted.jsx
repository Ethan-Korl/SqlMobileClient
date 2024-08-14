
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const GetStarted = () => {
  return (
    <TouchableOpacity onPress={() => alert("jsj")}>
      <Text>Get Started</Text>
    </TouchableOpacity>
  )
}

export default GetStarted

const styles = StyleSheet.create({})