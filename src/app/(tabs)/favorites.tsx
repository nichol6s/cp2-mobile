import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import FavoriteProducts from '../../components/FavoriteProducts'
import { useAppContext } from '../context/AppContext'

export default function Favorites() {
  const { favoriteItems, deleteFavoriteItem  } = useAppContext();

  return (
    <View style={styles.container}>

      <View style={styles.containerLista}>
        <Text style={styles.txtTitle}>Lista de Favoritos</Text>

        <ScrollView style={styles.scroll} contentContainerStyle={styles.items}>
          {favoriteItems.map((item, index) => (
            <FavoriteProducts
              key={index}
              nomeItem={item.nome}
              precoItem={item.preco}
              excluirFavorito={() => deleteFavoriteItem(index)}
            />
          ))}
        </ScrollView>

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
  items: {
    gap: 12
  },
  scroll: {
    borderTopWidth: 1,
    borderTopColor: "#76ABAE",
    paddingTop: 15,
    marginBottom: 20
  },
})