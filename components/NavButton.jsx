
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const NavButton = (props) => {
    const { onPress, title } = props
    return (
        <TouchableOpacity onPress={onPress} className="justify-center w-24 h-8 px-2 m-1 rounded-2xl bg-slate-950">
            <Text className="text-center text-white">{title}</Text>
        </TouchableOpacity>
    )
}

export default NavButton

const styles = StyleSheet.create({})