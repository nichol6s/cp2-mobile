import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function User() {
  return (
    <View  style={styles.container}>
      <Text>User</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222831"
  }
})