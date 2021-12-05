import React, { useState } from "react";
import { useColorScheme } from "react-native";

import { ThemeProvider } from "styled-components/native";

import AppLoading from "expo-app-loading";

import { darkTheme, lightTheme } from "@utils/style/CustomeTheme";

import Tab from "./view/navigation/TabNavigation/Tab";
import { NavigationContainer } from "@react-navigation/native";
//===============================================r================================

export default function App() {
    const [isLoading, setLoading] = useState(true);

    const onLoadingFinish = () => setLoading(false);
    const startAsyncLoading = async () => {};

    const isLight = useColorScheme() === "light";

    if (isLoading)
        <AppLoading
            onFinish={onLoadingFinish}
            startAsync={startAsyncLoading}
            onError={console.warn}
        />;

    return (
        <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
            <NavigationContainer>
                <Tab />
            </NavigationContainer>
        </ThemeProvider>
    );
}
