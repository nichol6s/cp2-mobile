import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import FavoriteProducts from '../../components/FavoriteProducts'

export default function Favorites() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLista}>
        <Text style={styles.txtTitle}>Lista de Favoritos</Text>
        <FavoriteProducts
          nomeItem='akaka'
          precoItem='20'
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
    paddingHorizontal: 32,
    gap: 16

  },
  containerLista: {
    flex: 1,
    marginTop: 50,
    gap: 10
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
    width: "85%",
    color: "#EEEEEE"
  },
})