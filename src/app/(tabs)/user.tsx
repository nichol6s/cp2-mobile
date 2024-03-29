import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Avatar, AvatarImage } from '../../components/Avatar'

export default function User() {
  return (
    <View style={styles.container}>

      <Image source={require("../../assets/banner.jpg")} style={styles.img} />

      <View style={styles.avatarContainer} >

        <Avatar style={styles.avatar}>
          <AvatarImage source={{ uri: "https://github.com/nichol6s.png" }} />
        </Avatar>
        <Text style={styles.title} >Nicholas Santos</Text>
        <Text style={styles.subTxt} >@rm551809</Text>
      </View>

      <View style={styles.containerTxt} >
        <Text style={styles.title} >Tecnologias</Text>
        <Text style={styles.subTxt} >As tecnologias utilizadas neste projeto foram o React Native, Expo/Expo router e StyleSheet :)</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831"
  },
  containerTxt: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 50,
    gap: 10
  },
  avatarContainer: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    color: "#EEEEEE",
    fontWeight: "bold",
    fontSize: 24
  },
  subTxt: {
    color: "#E9E9E9",
    fontSize: 18,
    textAlign: "justify"
  },
  avatar: {
    width: 150,
    height: 150,
    borderWidth: 4,
    borderColor: "#31363F"
  },
  img: {
    width: "100%",
    height: 200,
    marginBottom: -70
  }
})