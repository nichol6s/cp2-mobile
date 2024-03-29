import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { Feather, FontAwesome } from "@expo/vector-icons"

import React from 'react'

interface ProductsProps{
  nomeItem: string;
  precoItem: string;
  excluirItem: ()=> void;
}

export default function Products({nomeItem, precoItem, excluirItem}: ProductsProps) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.name}>
                    {nomeItem}
                </Text>
                <Text style={styles.preco}>
                    <FontAwesome name="dollar" size={16} color="#76ABAE" /> {precoItem}
                </Text>
            </View>

            <TouchableOpacity onPress={excluirItem}>
                <Feather
                    name="trash"
                    size={18}
                    color="#ff4949"
                />
            </TouchableOpacity>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: "#31363F",
      borderRadius: 7,
      padding: 16
    },
    content: {
      flex: 1,
    },
    name: {
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 5,
      color: "#EEEEEE"
    },
    preco: {
      fontSize: 14,
      color: "#EEEEEE",
    }
  });