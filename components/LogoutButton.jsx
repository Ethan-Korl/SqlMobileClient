import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { handleLogout } from '../utils/general'

const LogoutButton = () => {
  return (
    <Pressable onPress={handleLogout}>
      <Text>LogoutButton</Text>
    </Pressable>
  )
}

export default LogoutButton

const styles = StyleSheet.create({})