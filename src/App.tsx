import React, { useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import { Feather } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";

// import useFonts from "./hooks/useFonts";
// import useAssets from "./hooks/useAssets";
//! or expo의 useFonts 와 useAssets 훅을 사용하기

export default function App() {
	const [isLoading, setLoading] = useState(true);

	const onFinish = () => setLoading(false);

	//* const loadedFonts = useFonts([Feather.font]);
	//* const loadedAssets = useAssets(["https://youtube.kr.images"])

	const startAsyncLoading = async () => {
		//* 앱 시작 전, 폰트 로딩
		await Font.loadAsync(Feather.font);
		//* await Asset.loadAsync(require("./assets"));
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
			<Feather name="bookmark" size={35} color="#000000" />
			<Text>Loading Finished!</Text>
		</View>
	);
}
