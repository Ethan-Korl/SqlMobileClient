import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HomeNavigation from '../components/HomeNavigation'
import HomeContainerContent from '../components/HomeContainerContent';
import Greeting from '../components/Greeting';
import Preview from '../components/Preview';

const HomeScreen = () => {
    return (
        <View style={styles.container} className="py-1 bg-black">
            <View className="">
                <Greeting />
            </View>
            <View className="mb-5">
                <HomeNavigation />
            </View>
            <View className="flex-row flex-wrap justify-center">

                <TouchableOpacity className="justify-center m-3 bg-pink-300 w-36 h-36 px-7 rounded-3xl">
                    <HomeContainerContent title="Query" iconName="codesquareo" />
                </TouchableOpacity>

                <TouchableOpacity className="justify-center m-3 bg-pink-300 w-36 h-36 px-7 rounded-3xl">
                    <HomeContainerContent title="Connect" iconName="pluscircleo" />
                </TouchableOpacity>
                <TouchableOpacity className="justify-center m-3 bg-pink-300 w-36 h-36 px-7 rounded-3xl">
                    <HomeContainerContent title="Manage" iconName="database" />
                </TouchableOpacity>
                <TouchableOpacity className="justify-center m-3 bg-pink-300 w-36 h-36 px-7 rounded-3xl">
                    <HomeContainerContent title="History" iconName="clockcircleo" />
                </TouchableOpacity>
            </View>
            <View className="mt-3">
                <Preview />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})