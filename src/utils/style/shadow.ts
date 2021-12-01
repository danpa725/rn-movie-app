import { Platform } from "react-native";

interface IosShadow {
    shadowColor?: string;
    shadowOffset?: {
        width: number;
        height: number;
    };
    shadowOpacity?: number;
    shadowRadius?: number;
}

interface AndroidShadow {
    elevation?: number;
}

interface ShadowStyle {
    ios: {
        sm: IosShadow;
        md: IosShadow;
        lg: IosShadow;
        xLg: IosShadow;
    };
    android: {
        sm: AndroidShadow;
        md: AndroidShadow;
        lg: AndroidShadow;
        xLg: AndroidShadow;
    };
}

const shadowStyle: ShadowStyle = {
    ios: {
        sm: {},
        md: {
            shadowColor: "black",
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3,
        },
        lg: {},
        xLg: {},
    },
    android: {
        sm: {},
        md: {
            elevation: 10,
        },
        lg: {},
        xLg: {},
    },
};

const shadow = Platform.select({
    ios: {
        ...shadowStyle.ios,
    },
    android: {
        ...shadowStyle.android,
    },
});

export default shadow;
