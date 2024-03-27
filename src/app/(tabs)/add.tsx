import { StyleSheet, Text, View, Keyboard, TextInput, ScrollView } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button } from '../../components/Button'

export default function Add() {

  const [nomeItem, setNomeItem] = useState('')
  const [precoItem, setPrecoItem] = useState('')
  const [listItems, setListItems] = useState([])

  useEffect(() => {

  }, [])

  async function salvarItem() {
    let items = []
    items = JSON.parse(await AsyncStorage.getItem('ITEMS'))

    items.push({ nome: nomeItem, preco: precoItem })

    listarItems()

    Keyboard.dismiss()
  }

  async function listarItems() {
    const i = await AsyncStorage.getItem('ITEMS')
    setListItems(JSON.parse(i))
  }

  async function excluirItem(index) {
    const tempData = listItems
    const itemsSelecionados = tempData.filter((item, ind) => {
      return ind != index
    })

    setListItems(itemsSelecionados)
    await AsyncStorage.setItem('ITEMS', JSON.stringify(itemsSelecionados))

  }

  return (
    <View style={styles.container} >
      <Text style={styles.title} >Lista de Compras</Text>

      <TextInput
        placeholder="Nome do Item"
        value={nomeItem}
        onChangeText={(value) => setNomeItem(value)}
        style={styles.txtInput}
      />
      <TextInput
        placeholder="Preço do Item"
        value={precoItem}
        onChangeText={(value) => setPrecoItem(value)}
        style={styles.txtInput}
      />

      <Button title="Adicionar" onPress={salvarItem} />

      <View>
        <Text>Itens</Text>
      </View>

      <ScrollView>

      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 32,
    gap: 16
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 44,
    marginBottom: 24

  },
  txtInput: {
    height: 56,
    width: '100%',
    borderRadius: 7,
    borderWidth: 2,
    padding: 16,
    fontSize: 16,
    borderColor: "#BA68C8",
  }

})
