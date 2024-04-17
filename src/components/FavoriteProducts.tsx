import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { FontAwesome } from '@expo/vector-icons'

interface FavoriteProductsProps {
    nomeItem: string;
    precoItem: string;
    excluirFavorito: () => void;
}

export default function FavoriteProducts({ nomeItem, precoItem, excluirFavorito }: FavoriteProductsProps) {
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
            <TouchableOpacity onPress={excluirFavorito}>
                <FontAwesome 
                    name="bookmark"
                    size={22}
                    color="yellow"
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#31363F",
        borderRadius: 7,
        padding: 16
    },
    content: {
        flex: 1
    },
    name: {
        fontSize: 16,
        fontFamily: "Inter_400Regular",
        marginBottom: 5,
        color: "#EEEEEE"
    },
    preco: {
        fontSize: 14,
        color: "#EEEEEE",
        fontFamily: "Inter_400Regular"
    }
})