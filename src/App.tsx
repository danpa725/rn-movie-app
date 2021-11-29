import React, { useState } from "react";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

//! navigation을 설정하기 위해서는 NavigationContainer로 감싸줘야 함.
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./view/navigation/TabNavagation/TabNavigation";
import { Feather } from "@expo/vector-icons";
import StackNavigation from "./view/navigation/TabNavagation/StackNavigation/StackNavigation";

export default function App() {
    const [isLoading, setLoading] = useState(true);

    const [fonts] = useFonts(Feather.font);
    const onFinish = () => setLoading(false);
    const startAsyncLoading = async () => {
        console.log(fonts);
    };

    if (isLoading)
        return (
            <AppLoading
                onFinish={onFinish}
                startAsync={startAsyncLoading}
                onError={console.warn}
            />
        );

    return (
        <NavigationContainer>
            {/* <TabNavigation />
             */}
            <StackNavigation />
        </NavigationContainer>
    );
}
