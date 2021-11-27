import * as Font from "expo-font";

async function useFonts(fontArray: any[]) {
	return Promise.all(
		fontArray.map((objectFont) => Font.loadAsync(objectFont))
	);
}

export default useFonts;
