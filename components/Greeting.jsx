import { StyleSheet, Text, View } from 'react-native'
import { Entypo, Feather } from "@expo/vector-icons";
import React from 'react'

const Greeting = () => {
    return (
        <View className="flex-row justify-between pl-4 bottom-16 w-80">
            <Text className="m-1 text-4xl text-slate-50">Hi, There 👋🏻</Text>
            <View>
                <Feather
                    name={"moon"}
                    size={24}
                    color={"white"}
                />
            </View>
        </View>
    )
}

export default Greeting

const styles = StyleSheet.create({})