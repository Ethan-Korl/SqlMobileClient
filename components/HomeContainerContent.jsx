import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";

const HomeContainerContent = (props) => {
    const { title, iconName } = props
    return (
        <View className="flex-col px-3 py-3">
            <Text className="text-lg font-bold bottom-10 right-5">{title}</Text>
            <View className="top-6 left-14">
                <AntDesign
                    name={iconName}
                    size={24}
                    color={"black"}
                />
            </View>
        </View>
    )
}

export default HomeContainerContent

const styles = StyleSheet.create({})