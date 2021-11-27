import React, { useState } from "react";

import AppLoading from "expo-app-loading";

//! navigation을 설정하기 위해서는 NavigationContainer로 감싸줘야 함.
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./view/navigation/TabNavigation";

export default function App() {
	const [isLoading, setLoading] = useState(true);

	const onFinish = () => setLoading(false);
	const startAsyncLoading = async () => {};

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
			<TabNavigation />
		</NavigationContainer>
	);
}
