import { Stack } from "expo-router"

import React from 'react'

import { AppProvider } from "./context/AppContext"

export default function AppLayout() {
    return (
        <AppProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </AppProvider>
    )
}