/* 
To hold the data queried from the server
*/

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DataSection = (props) => {
  const { queryReady } = props;

  return (
    <View>
      {queryReady ?
        (<Text>DataSection</Text>) :
        (<Text>No query Data</Text>)
      }
    </View>
  )
}

export default DataSection

const styles = StyleSheet.create({})