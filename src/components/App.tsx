import React, { useState } from "react";
import { useColorScheme, Alert } from "react-native";

import { ThemeProvider } from "styled-components/native";

import AppLoading from "expo-app-loading";

import ButtonCustome from "./atoms/Buttons/Button";

import { darkTheme, lightTheme } from "@utils/style/CustomeTheme";
import pallete from "@utils/style/pallete";
import fontSize from "@utils/style/font";

import { AppContainer, ButtonContainer, WelcomeText } from "./App.style";
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
            <AppContainer>
                <WelcomeText>Templates for React Native</WelcomeText>
                <ButtonContainer>
                    <ButtonCustome
                        onPress={() => Alert.alert("Templates by @Danpacho 1")}
                        width="150px"
                        height="50px"
                        borderRadius="25px"
                        borderWidth="2.5px"
                        borderColor={pallete.red3}
                        background={pallete.red4}
                        buttonText="Welcome!"
                        fontSize={fontSize.lg}
                        activeOpacity={0.75}
                    />
                    <ButtonCustome
                        onPress={() => Alert.alert("Templates by @Danpacho 2")}
                        width="150px"
                        height="50px"
                        borderRadius="7.5px"
                        borderWidth="2.5px"
                        borderColor={pallete.blue2}
                        background={pallete.blue4}
                        buttonText="Hola!"
                        fontSize={fontSize.lg}
                        activeOpacity={0.85}
                    />
                </ButtonContainer>
            </AppContainer>
        </ThemeProvider>
    );
}
