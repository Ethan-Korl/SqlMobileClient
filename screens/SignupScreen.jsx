import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import { handleSignup } from '../utils/general'

const SignupScreen = () => {
  return (
    <View>
      <Text>SignupScreen</Text>
      <CustomButton onPress={handleSignup} />
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({})