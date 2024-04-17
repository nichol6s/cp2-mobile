import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { Avatar, AvatarImage } from '../../components/Avatar'
import  Toast  from '../../components/Toast'

export default function User() {
  return (
    <View style={styles.container}>

      <Image source={require("../../assets/banner.jpg")} style={styles.img} />

      <View style={styles.avatarContainer} >

        <View>
          <Avatar style={styles.avatar}>
            <AvatarImage source={{ uri: "https://github.com/nichol6s.png" }} />
          </Avatar>
          <Text style={styles.subTitle}>Nicholas Santos</Text>
          <Text style={styles.subTxt}>rm551809</Text>
        </View>
        
        <Text style={styles.title}>🤝</Text>

        <View>
          <Avatar style={styles.avatar}>
            <AvatarImage source={{ uri: "https://github.com/VitorKubica.png" }} />
          </Avatar>
          <Text style={styles.subTitle}>Vitor Kubica</Text>
          <Text style={styles.subTxt}>rm98903</Text>
        </View>

      </View>

      <View style={styles.txtContainer} >
        <Text style={styles.title} >Tecnologias</Text>
        <Text style={styles.txt} >As tecnologias utilizadas neste projeto foram o React Native, Expo/Expo router, StyleSheet, useEffect, useState, useContext e AsyncStorage.</Text>
        <Toast message='⚓️' />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831"
  },
  avatarContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10
  },
  txtContainer: {
    width: "100%",
    marginTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
    gap: 20,
  },
  title:{
    color: "#EEEEEE",
    fontFamily: "Inter_700Bold",
    fontSize: 24
  },
  txt:{
    color: "#EEEEEE",
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    opacity: 0.7
  },
  subTitle: {
    color: "#EEEEEE",
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    textAlign: "center"
  },
  subTxt: {
    color: "#E9E9E9",
    opacity: 0.7,
    fontSize: 14,
    textAlign: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    borderWidth: 4,
    borderColor: "#31363F",
  },
  img: {
    width: "100%",
    height: 200,
    marginBottom: -70
  }
})