import { StyleSheet, Text, View, TextInput, ScrollView, Keyboard, Alert } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button } from '../../components/Button'
import Products from '../../components/Products'

interface Item {
  nome: string;
  preco: string
}

export default function Add() {

    const [nomeItem, setNomeItem] = useState('')
    const [precoItem, setPrecoItem] = useState('')
    const [listItems, setListItems] = useState<Item[]>([])

    useEffect(() => {
      listarItems()
    }, [])

    async function salvarItem() {
      if (!nomeItem || !precoItem) {
        Alert.alert('Erro', 'Preencha todas as informações!')
        return;
      }
      const result = await AsyncStorage.getItem('ITEMS');
      const items = result ? JSON.parse(result) : [];

      items.push({ nome: nomeItem, preco: precoItem });
      await AsyncStorage.setItem('ITEMS', JSON.stringify(items));

      listarItems();

      setNomeItem('');
      setPrecoItem('');

      Keyboard.dismiss()
    }

    async function listarItems() {
      const result = await AsyncStorage.getItem('ITEMS');
      const items = result ? JSON.parse(result) : [];
      setListItems(items);
    }

    async function excluirItem(index: number) {
      const itemsAtualizados = [...listItems];
      itemsAtualizados.splice(index, 1);

      setListItems(itemsAtualizados);
      await AsyncStorage.setItem('ITEMS', JSON.stringify(itemsAtualizados));
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
          {listItems.map((item, index) => (
            <Products
              key={index}
              nomeItem={item.nome}
              precoItem={item.preco}
              excluirItem={() => excluirItem(index)}
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
      fontWeight: '700',
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
      paddingTop: 24,

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
      fontWeight: '500',
      color: "white"
    }
  })
