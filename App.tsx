import React, { useState } from "react";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

//! navigation을 설정하기 위해서는 NavigationContainer로 감싸줘야 함.
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import RootNavigation from "./src/view/navigation/RootNavigation/RootNavigation";

import { ThemeProvider } from "styled-components/native";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "./src/utils/style/CustomeTheme";

export default function App() {
    const [isLoading, setLoading] = useState(true);

    const [fonts] = useFonts(Feather.font);
    const onFinish = () => setLoading(false);
    const startAsyncLoading = async () => {};

    const isLight = useColorScheme() === "light";

    if (isLoading)
        <AppLoading
            onFinish={onFinish}
            startAsync={startAsyncLoading}
            onError={console.warn}
        />;

    return (
        <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
            <NavigationContainer>
                <RootNavigation />
            </NavigationContainer>
        </ThemeProvider>
    );
}
