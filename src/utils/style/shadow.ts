import { Platform, StyleSheet } from "react-native"
import pallete from "./pallete"

// interface IosShadow {
//     shadowColor?: string
//     shadowOffset?: {
//         width: number
//         height: number
//     }
//     shadowOpacity?: number
//     shadowRadius?: number
// }

// interface AndroidShadow {
//     elevation?: number
// }

const IOS_SHADOW = StyleSheet.create({
    sm: {
        shadowColor: pallete.dark,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    md: {
        shadowColor: pallete.deepDark,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3,
    },
    lg: {
        shadowColor: pallete.trueDeepDark,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.45,
        shadowRadius: 3,
    },
    xLg: {
        shadowColor: pallete.trueDeepDark,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
})

const ANDROID_SHADOW = StyleSheet.create({
    sm: {
        elevation: 5,
    },
    md: {
        elevation: 10,
    },
    lg: {
        elevation: 15,
    },
    xLg: {
        elevation: 20,
    },
})

const shadow = Platform.select({
    ios: {
        ...IOS_SHADOW,
    },
    android: {
        ...ANDROID_SHADOW,
    },
})

export default shadow
