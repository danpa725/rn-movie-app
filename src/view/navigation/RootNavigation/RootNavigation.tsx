import React from "react";
import {
    createNativeStackNavigator,
    NativeStackScreenProps,
} from "@react-navigation/native-stack";

import StackNavigation from "../StackNavigation/StackNavigation";
import TabNavigation from "../TabNavagation/TabNavigation";

const RootStack = createNativeStackNavigator();

export type RootNavigateProps = NativeStackScreenProps<any, "STACK">;

type RootStackParamList = {
    ScreenOne: undefined;
    ScreenTwo: undefined;
    ScreenThree: undefined;
    STACK: undefined;
    TAB: undefined;
};

const ROOT_ROUTE_NAME = {
    TAB: "TAB",
    STACK: "STACK",
};

function RootNavigation() {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen
                name={ROOT_ROUTE_NAME.TAB}
                component={TabNavigation}
            />
            <RootStack.Screen
                name={ROOT_ROUTE_NAME.STACK}
                component={StackNavigation}
            />
        </RootStack.Navigator>
    );
}

export default RootNavigation;
