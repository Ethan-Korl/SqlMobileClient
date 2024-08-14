
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import { handleLogin } from '../utils/general'

const LoginScreen = () => {
    return (
        <View>
            <Text>LoginScreen</Text>
            <View>
                <CustomInput />
                <CustomInput />
                <CustomButton onPress={handleLogin} />
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})