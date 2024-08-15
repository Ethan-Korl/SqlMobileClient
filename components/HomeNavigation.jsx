import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavButton from './NavButton'

const HomeNavigation = () => {
    return (
        <View style={styles.container} className="flex-row content-center justify-center bg-gray-900 w-fit rounded-3xl">
            <NavButton title="🥸 All" />
            <NavButton title="🧐 Notes" />
            <NavButton title="😎 Help" />
        </View>
    )
}

export default HomeNavigation

const styles = StyleSheet.create({
    container:{
        display:"flex",
        alignItems: "center",
    }
})