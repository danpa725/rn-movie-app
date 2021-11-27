import React from "react";
import {
	BottomTabNavigationOptions,
	createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import HomeScreen from "../screen/HomeScreen";
import SettingScreen from "../screen/SettingScreen";
import MovieScreen from "../screen/MovieScreen";

const Tab = createBottomTabNavigator();

const ROUTE_NAME = {
	HOME: "Home",
	SETTINGS: "Settings",
	MOVIE: "Movie",
};

//* 전체 navigation tap 스타일 설정
const NAVIGATION_OPTIONS: BottomTabNavigationOptions = {
	tabBarLabelStyle: {
		backgroundColor: "skyblue",
	},
	tabBarStyle: {
		backgroundColor: "skyblue",
	},
};

interface ScreenOptions {
	[screenName: string]: BottomTabNavigationOptions;
}

//* 각 스크린 스타일 개별 설정
const SCREEN_OPTIONS: ScreenOptions = {
	home: {
		headerPressColor: "black",
		headerStyle: {
			borderColor: "black",
			borderWidth: 3,
		},
		tabBarBadge: 2,
		tabBarBadgeStyle: {
			backgroundColor: "blue",
		},
		tabBarActiveBackgroundColor: "green",
		tabBarActiveTintColor: "yellow",
		tabBarInactiveTintColor: "red",
	},
	movie: {
		headerTitleStyle: {
			color: "gray",
		},
	},
	settings: {},
};

function TabNavigation() {
	return (
		<Tab.Navigator
			initialRouteName={ROUTE_NAME.HOME}
			screenOptions={NAVIGATION_OPTIONS}
		>
			<Tab.Screen
				name={ROUTE_NAME.HOME}
				component={HomeScreen}
				options={SCREEN_OPTIONS.home}
			/>
			<Tab.Screen name={ROUTE_NAME.MOVIE} component={MovieScreen} />
			<Tab.Screen name={ROUTE_NAME.SETTINGS} component={SettingScreen} />
		</Tab.Navigator>
	);
}

export default TabNavigation;
