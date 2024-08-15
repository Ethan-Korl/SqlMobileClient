import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Preview = () => {
    return (
        <View className="px-3 rounded-lg w-80">
            <View className="flex-row justify-between">
                <TouchableOpacity>
                    <Text className="text-xl text-slate-300">Recent Queries</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className="text-xl text-slate-300">{"More >"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Preview

const styles = StyleSheet.create({})