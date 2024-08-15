import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GetStarted from '../components/GetStarted'
import GuestButton from '../components/GuestButton'

const WelcomeScreen = () => {
  return (
    <View style={styles.container} className='border-y-orange-100'>
      <Text>WelcomeScreen</Text>
      <View className="flex-row">
        <GetStarted  />
        <GuestButton />
      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})