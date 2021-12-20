import React from "react"
import { useColorScheme } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import MovieScreen from "@components/view/screen/Movie/MovieScreen"
import SearchScreen from "@components/view/screen/Search/SearchScreen"
import TvScreen from "@components/view/screen/Tv/TvScreen"

import { NAVIGATION_OPTIONS, SCREEN_OPTIONS } from "./Tab.style"

const TabNav = createBottomTabNavigator()

const ROUTE_NAME = {
    MOVIE: "Movie",
    TV: "Tv",
    SEARCH: "Search",
}

function Tab() {
    const isLight = useColorScheme() === "light"

    return (
        <TabNav.Navigator
            initialRouteName={ROUTE_NAME.MOVIE}
            screenOptions={
                isLight ? NAVIGATION_OPTIONS.light : NAVIGATION_OPTIONS.dark
            }
        >
            <TabNav.Screen
                name={ROUTE_NAME.TV}
                component={TvScreen}
                options={
                    isLight
                        ? SCREEN_OPTIONS.movie.light
                        : SCREEN_OPTIONS.movie.dark
                }
            />
            <TabNav.Screen
                name={ROUTE_NAME.MOVIE}
                component={MovieScreen}
                options={
                    isLight
                        ? SCREEN_OPTIONS.home.light
                        : SCREEN_OPTIONS.home.dark
                }
            />
            <TabNav.Screen
                name={ROUTE_NAME.SEARCH}
                component={SearchScreen}
                options={
                    isLight
                        ? SCREEN_OPTIONS.trending.light
                        : SCREEN_OPTIONS.trending.dark
                }
            />
        </TabNav.Navigator>
    )
}

export default Tab
