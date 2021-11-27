import { Asset } from "expo-asset";
import { Image } from "react-native";

async function useAssets(assetArray: any[]) {
	return Promise.all(
		assetArray.map((asset) => {
			if (typeof asset === "string") Image.prefetch(asset);

			return Asset.loadAsync(asset);
		})
	);
}

export default useAssets;
