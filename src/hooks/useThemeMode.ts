import { useColorScheme } from "react-native";

function useThemeMode() {
    const isLight = useColorScheme() === "light";
    return isLight;
}

export default useThemeMode;
