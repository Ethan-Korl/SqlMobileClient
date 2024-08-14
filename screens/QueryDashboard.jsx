import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DataSection from '../components/DataSection';

const QueryDashboard = () => {
  const [queryReady, setqueryReady] = useState(false);

  return (
    <View>
      <DataSection queryReady={queryReady}/>
      <Text>QueryDashboard</Text>
    </View>
  )
}

export default QueryDashboard

const styles = StyleSheet.create({})