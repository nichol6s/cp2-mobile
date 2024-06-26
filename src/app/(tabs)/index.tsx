import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native'
import React from 'react'

import { Link } from 'expo-router'

import { StatusBar } from 'expo-status-bar'

export default function Home() {
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar style="light" />
      <Image source={require("../../assets/Welcome.png")} style={styles.imgHome} />
      <View style={styles.txtContainer} >
        <Text style={styles.txtTitle} >Seja bem-vindo!</Text>
        <Text style={styles.txt} >
          Nosso app possui uma tela de funcionalidades principal a Add. Nela você consegue
          adicionar, remover, listar e favoritar items de compra, vamos testar?
        </Text>
      </View>

      <Link href="/add" asChild>
        <Pressable style={styles.pressable} >
          <Text style={styles.txtPressable} >Vamos lá</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222831"
  },
  txtContainer: {
    marginTop: 20,
    alignItems: "center",
    marginBottom: 50,
    width: "100%",
  },
  imgHome: {
    width: "100%",
    height: "50%",
    resizeMode: "contain"
  },
  txtTitle: {
    fontSize: 24,
    fontFamily: "Inter_700Bold",
    marginBottom: 10,
    color: "#EEEEEE"
  },
  txt: {
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    textAlign: "center",
    width: "95%",
    color: "#EEEEEE"
  },
  pressable: {
    height: 56,
    width: '65%',
    borderRadius: 7,
    backgroundColor: "#31363F",
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtPressable: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Inter_400Regular",
  }
})