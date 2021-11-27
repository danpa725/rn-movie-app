import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { Text, View } from "react-native";

export default function App() {
	const [isLoading, setLoading] = useState(true);

	const onFinish = () => setLoading(false);

	const startAsyncLoading = async () => {
		//* 앱 시작 전, 미리 할 작업 실행
		await new Promise((resolve) => setTimeout(resolve, 10000));
	};

	if (isLoading)
		//* 로딩 화면
		return (
			<AppLoading
				onFinish={onFinish}
				startAsync={startAsyncLoading}
				onError={console.warn}
			/>
		);

	return (
		//* 로딩 종료 시 컴포넌트
		<View>
			<Text>Loading Finished!</Text>
		</View>
	);
}
