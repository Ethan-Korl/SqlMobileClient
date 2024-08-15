
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const GuestButton = () => {
  return (
    <TouchableOpacity className="justify-center px-2 py-1 m-1 bg-pink-300 rounded-md h-9">
      <Text className="text-xl">Try as guest</Text>
    </TouchableOpacity>
  )
}

export default GuestButton

const styles = StyleSheet.create({})