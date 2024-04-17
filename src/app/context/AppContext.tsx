import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Item {
    nome: string;
    preco: string;
    favorito: boolean
}
interface AppContextType {
    items: Item[];
    favoriteItems: Item[]
    addItem: (nome: string, preco: string) => void;
    deleteItem: (index: number) => void;
    addFavoriteItem: (index: number) => void;
    deleteFavoriteItem: (index: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext tem que ser usado dentro do AppProvider');
    }
    return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<Item[]>([]);
    const [favoriteItems, setFavoriteItems] = useState<Item[]>([])

    useEffect(() => {
        async function loadItems() {
            try {
                const result = await AsyncStorage.getItem('ITEMS');
                if (result) {
                    setItems(JSON.parse(result));
                }
            } catch (error) {
                console.error('Erro ao carregar items:', error);
            }
        }
        loadItems();
    }, []);

    const addItem = async (nome: string, preco: string) => {
        const newItem: Item = { nome, preco, favorito: false };
        const updatedItems = [...items, newItem];
        setItems(updatedItems);
        await AsyncStorage.setItem('ITEMS', JSON.stringify(updatedItems));
    };

    const deleteItem = async (index: number) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
        await AsyncStorage.setItem('ITEMS', JSON.stringify(updatedItems));
    };

    const addFavoriteItem = async (index: number) => {
        const updatedItems = [...items];
        updatedItems[index].favorito = !updatedItems[index].favorito
        setItems(updatedItems);

        if (updatedItems[index].favorito){
            setFavoriteItems([...favoriteItems, updatedItems[index]])
        } else{
            const filteredFavoriteItems = favoriteItems.filter((item, i) => i !== index);
            setFavoriteItems(filteredFavoriteItems)
        }

        await AsyncStorage.setItem("ITEMS", JSON.stringify(updatedItems))
    }

    const deleteFavoriteItem = async (index: number) => {
        const filteredFavoriteItems = favoriteItems.filter((item, i) => i !== index);
        setFavoriteItems(filteredFavoriteItems)
    }

    return (
        <AppContext.Provider value={{ items, addItem, deleteItem, addFavoriteItem, deleteFavoriteItem, favoriteItems }}>
            {children}
        </AppContext.Provider>
    );
};
