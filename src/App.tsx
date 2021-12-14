import React, { useState } from "react"

import { ThemeProvider } from "styled-components/native"
import { NavigationContainer } from "@react-navigation/native"

import AppLoading from "expo-app-loading"

import Tab from "@components/view/navigation/TabNavigation/Tab"

import { darkTheme, lightTheme } from "@utils/style/CustomeTheme"

import useThemeMode from "@hooks/useThemeMode"
import { QueryClient, QueryClientProvider } from "react-query"
//===============================================================================

//*@ignore: https://stackoverflow.com/questions/44603362/setting-a-timer-for-a-long-period-of-time-i-e-multiple-minutes
import { LogBox } from "react-native"
LogBox.ignoreLogs(["Setting a timer"])

const queryClient = new QueryClient()

export default function App() {
    const [isLoading, setLoading] = useState(true)

    const onLoadingFinish = () => setLoading(false)
    const startAsyncLoading = async () => {}

    const isLight = useThemeMode()

    if (isLoading)
        <AppLoading
            onFinish={onLoadingFinish}
            startAsync={startAsyncLoading}
            onError={console.warn}
        />

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
                <NavigationContainer>
                    <Tab />
                </NavigationContainer>
            </ThemeProvider>
        </QueryClientProvider>
    )
}
