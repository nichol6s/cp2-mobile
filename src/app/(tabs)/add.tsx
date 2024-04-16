import { StyleSheet, Text, View, TextInput, ScrollView, Keyboard, Alert } from 'react-native'

import React from 'react'
import { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { Button } from '../../components/Button'
import Products from '../../components/Products'

export default function Add() {

    const { items, addItem, deleteItem } = useAppContext();
    const [nomeItem, setNomeItem] = useState('')
    const [precoItem, setPrecoItem] = useState('')

    async function salvarItem() {
      if (!nomeItem || !precoItem) {
        Alert.alert('Erro', 'Preencha todas as informações!')
        return;
      }
      
      addItem(nomeItem, precoItem)
      setNomeItem('');
      setPrecoItem('');

      Keyboard.dismiss()
    }

    return (
      <View style={styles.container} >
        <Text style={styles.title} >Lista de Compras</Text>

        <TextInput
          placeholder="Nome do Item"
          placeholderTextColor={"#EEEEEE"}
          value={nomeItem}
          onChangeText={(value) => setNomeItem(value)}
          blurOnSubmit={true}
          style={styles.txtInput}
        />
        <TextInput
          placeholder="Preço do Item"
          placeholderTextColor={"#EEEEEE"}
          value={precoItem}
          onChangeText={(value) => setPrecoItem(value)}
          blurOnSubmit={true}
          style={styles.txtInput}
        />

        <Button title="Adicionar" onPress={salvarItem} />

        <View style={styles.header} >
          <Text style={styles.headerTitle} >Itens</Text>
        </View>

        <ScrollView style={styles.scroll} contentContainerStyle={styles.items} showsVerticalScrollIndicator={false} >
          {items.map((item, index) => (
            <Products
              key={index}
              nomeItem={item.nome}
              precoItem={item.preco}
              excluirItem={() => deleteItem(index)}
            />
          ))}
        </ScrollView>

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
    title: {
      fontSize: 22,
      fontFamily: "Inter_700Bold",
      marginTop: 44,
      marginBottom: 24,
      color: "#EEEEEE"
    },
    txtInput: {
      height: 56,
      width: '100%',
      borderRadius: 7,
      borderWidth: 2,
      padding: 16,
      fontSize: 16,
      borderColor: "#31363F",
      color: "#EEEEEE"
    },
    items: {
      gap: 12,
    },
    scroll: {
      borderTopWidth: 1,
      borderTopColor: "#76ABAE",
      paddingTop: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#76ABAE",
      marginBottom: 20
    },
    header: {
      marginTop: 32,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    headerTitle: {
      fontSize: 16,
      color: "white",
      fontFamily: "Inter_700Bold"
    }
  })
