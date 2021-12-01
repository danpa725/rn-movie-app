import React from "react";

import { NAVIGATION_OPTIONS, SCREEN_OPTIONS } from "./TabNavigation.style";
import { useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "view/screen/Home/Home";
import MovieScreen from "view/screen/Movie/Movie";
import SettingScreen from "view/screen/Setting/Setting";

const Tab = createBottomTabNavigator();

const ROUTE_NAME = {
    HOME: "Home",
    SETTINGS: "Settings",
    MOVIE: "Movie",
};

function TabNavigation() {
    const isLight = useColorScheme() === "light";

    return (
        <Tab.Navigator
            initialRouteName={ROUTE_NAME.HOME}
            screenOptions={
                isLight ? NAVIGATION_OPTIONS.light : NAVIGATION_OPTIONS.dark
            }
        >
            <Tab.Screen
                name={ROUTE_NAME.HOME}
                component={HomeScreen}
                options={
                    isLight
                        ? SCREEN_OPTIONS.home.light
                        : SCREEN_OPTIONS.home.dark
                }
            />
            <Tab.Screen
                name={ROUTE_NAME.MOVIE}
                component={MovieScreen}
                options={
                    isLight
                        ? SCREEN_OPTIONS.movie.light
                        : SCREEN_OPTIONS.movie.dark
                }
            />
            <Tab.Screen
                name={ROUTE_NAME.SETTINGS}
                component={SettingScreen}
                options={
                    isLight
                        ? SCREEN_OPTIONS.settings.light
                        : SCREEN_OPTIONS.settings.dark
                }
            />
        </Tab.Navigator>
    );
}

export default TabNavigation;