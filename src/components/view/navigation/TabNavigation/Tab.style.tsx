import React from "react"

import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"
import { Feather, Ionicons } from "@expo/vector-icons"
import pallete from "utils/style/pallete"

//* 전체 navigation tap 스타일 설정
interface NavigationOptions {
    dark: BottomTabNavigationOptions
    light: BottomTabNavigationOptions
}

const COMMON_NAVIGATION_OPTIONS: BottomTabNavigationOptions = {
    headerTitleAlign: "left",

    headerTitleStyle: {
        fontSize: 16,
        fontWeight: "200",
        marginLeft: 5,
    },
    //* 화면에서 벗어나면 메모리에서 컴포넌트 해제
    //* unmountOnBlur: true,
}

const NAVIGATION_OPTIONS: NavigationOptions = {
    light: {
        ...COMMON_NAVIGATION_OPTIONS,
        headerTintColor: pallete.gray9,
        headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: pallete.gray4,
            backgroundColor: pallete.gray2,
            height: 40,
            elevation: 10,
        },
        tabBarStyle: {
            backgroundColor: pallete.gray1,
        },
        //* 아이콘의 색을 변경한다
        tabBarActiveTintColor: pallete.teal8,
        tabBarInactiveTintColor: pallete.gray9,
        tabBarShowLabel: false,
    },
    dark: {
        ...COMMON_NAVIGATION_OPTIONS,
        headerTintColor: pallete.gray2,
        headerStyle: {
            backgroundColor: pallete.gray9,
            height: 40,
            elevation: 2.5,
        },

        tabBarStyle: {
            backgroundColor: pallete.gray9,
        },
        //* 아이콘의 색을 변경한다
        tabBarActiveTintColor: pallete.teal6,
        tabBarInactiveTintColor: pallete.gray6,
        tabBarShowLabel: false,
    },
}

interface ScreenOptions {
    [screenName: string]: {
        light: BottomTabNavigationOptions
        dark: BottomTabNavigationOptions
    }
}

const ICON_ACTIVE_SCALE = 1.1

//* 각 스크린 스타일 개별 설정
const SCREEN_OPTIONS: ScreenOptions = {
    home: {
        light: {
            tabBarIcon: ({ color, size, focused }) => (
                <Ionicons
                    name={!focused ? "film-outline" : "film"}
                    size={!focused ? size : size * ICON_ACTIVE_SCALE}
                    color={color}
                />
            ),
        },
        dark: {
            tabBarIcon: ({ color, size, focused }) => (
                <Ionicons
                    name={!focused ? "film-outline" : "film"}
                    size={!focused ? size : size * ICON_ACTIVE_SCALE}
                    color={color}
                />
            ),
        },
    },
    movie: {
        light: {
            tabBarIcon: ({ color, size, focused }) => (
                <Ionicons
                    name={!focused ? "tv-outline" : "tv"}
                    size={!focused ? size : size * ICON_ACTIVE_SCALE}
                    color={color}
                />
            ),
        },
        dark: {
            tabBarIcon: ({ color, size, focused }) => (
                <Ionicons
                    name={!focused ? "tv-outline" : "tv"}
                    size={!focused ? size : size * ICON_ACTIVE_SCALE}
                    color={color}
                />
            ),
        },
    },
    trending: {
        light: {
            tabBarIcon: ({ color, size, focused }) => (
                <Ionicons
                    name="trending-up"
                    size={!focused ? size : size * ICON_ACTIVE_SCALE}
                    color={color}
                />
            ),
        },
        dark: {
            tabBarIcon: ({ color, size, focused }) => (
                <Ionicons
                    name="trending-up"
                    size={!focused ? size : size * ICON_ACTIVE_SCALE}
                    color={color}
                />
            ),
        },
    },
}

export { NAVIGATION_OPTIONS, SCREEN_OPTIONS }
