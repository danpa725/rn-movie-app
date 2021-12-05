import React from "react";

import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import pallete from "utils/style/pallete";

//* 전체 navigation tap 스타일 설정
interface NavigationOptions {
    dark: BottomTabNavigationOptions;
    light: BottomTabNavigationOptions;
}

const COMMON_NAVIGATION_OPTIONS: BottomTabNavigationOptions = {
    headerTitleAlign: "center",
};

const NAVIGATION_OPTIONS: NavigationOptions = {
    light: {
        ...COMMON_NAVIGATION_OPTIONS,
        headerTintColor: pallete.gray9,
        headerStyle: {
            borderBottomWidth: 1.5,
            borderBottomColor: pallete.yellow8,
            backgroundColor: pallete.gray2,
        },
        tabBarStyle: {
            borderRadius: 6.5,
            marginBottom: 5,
            marginLeft: 5,
            marginRight: 5,
            padding: 1.5,
            shadowColor: pallete.gray6,
            backgroundColor: pallete.gray2,
            borderWidth: 1.25,
            borderTopWidth: 1.25,
            borderColor: pallete.gray3,
            borderTopColor: pallete.gray3,
        },
        //* 아이콘의 색을 변경한다
        tabBarActiveTintColor: pallete.blue10,
        tabBarInactiveTintColor: pallete.gray9,
    },
    dark: {
        ...COMMON_NAVIGATION_OPTIONS,
        headerTintColor: pallete.gray2,
        headerStyle: {
            borderBottomWidth: 1.5,
            borderBottomColor: pallete.gray3,
            backgroundColor: pallete.gray9,
        },

        tabBarStyle: {
            borderRadius: 6.5,
            marginBottom: 5,
            marginLeft: 5,
            marginRight: 5,
            padding: 1.5,
            shadowColor: pallete.gray6,
            backgroundColor: pallete.gray9,
        },
        //* 아이콘의 색을 변경한다
        tabBarActiveTintColor: pallete.blue5,
        tabBarInactiveTintColor: pallete.gray6,
    },
};

interface ScreenOptions {
    [screenName: string]: {
        light: BottomTabNavigationOptions;
        dark: BottomTabNavigationOptions;
    };
}

const ICON_ACTIVE_SCALE = 1.15;

//* 각 스크린 스타일 개별 설정
const SCREEN_OPTIONS: ScreenOptions = {
    home: {
        light: {
            tabBarIcon: ({ color, size, focused }) => (
                <Feather
                    name="home"
                    size={!focused ? size : size * ICON_ACTIVE_SCALE}
                    color={color}
                />
            ),
        },
        dark: {
            tabBarIcon: ({ color, size, focused }) => (
                <Feather
                    name="home"
                    size={!focused ? size : size * ICON_ACTIVE_SCALE}
                    color={color}
                />
            ),
        },
    },
    movie: {
        light: {
            tabBarIcon: ({ color, size, focused }) => (
                <Feather
                    name="monitor"
                    size={!focused ? size : size * ICON_ACTIVE_SCALE}
                    color={color}
                />
            ),
        },
        dark: {
            tabBarIcon: ({ color, size, focused }) => (
                <Feather
                    name="monitor"
                    size={!focused ? size : size * ICON_ACTIVE_SCALE}
                    color={color}
                />
            ),
        },
    },
    settings: {
        light: {
            tabBarIcon: ({ color, size, focused }) => (
                <Feather
                    name="trending-up"
                    size={!focused ? size : size * ICON_ACTIVE_SCALE}
                    color={color}
                />
            ),
        },
        dark: {
            tabBarIcon: ({ color, size, focused }) => (
                <Feather
                    name="trending-up"
                    size={!focused ? size : size * ICON_ACTIVE_SCALE}
                    color={color}
                />
            ),
        },
    },
};

export { NAVIGATION_OPTIONS, SCREEN_OPTIONS };
