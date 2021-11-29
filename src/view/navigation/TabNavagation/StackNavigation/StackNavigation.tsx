import {
    createNativeStackNavigator,
    NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

type NavigateProps = NativeStackScreenProps<StackParamList, "ScreenOne">;

type StackParamList = {
    ScreenOne: undefined;
    ScreenTwo: undefined;
    ScreenThree: undefined;
};

const ScreenOne = ({ navigation: { navigate } }: NavigateProps) => (
    <TouchableOpacity onPress={() => navigate("ScreenTwo")}>
        <Text>Screen Two</Text>
    </TouchableOpacity>
);

const ScreenTwo = ({ navigation: { navigate, goBack } }: NavigateProps) => (
    <>
        <TouchableOpacity onPress={() => navigate("ScreenThree")}>
            <Text>Screen Three</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goBack()}>
            <Text>뒤로가기</Text>
        </TouchableOpacity>
    </>
);

const ScreenThree = ({
    navigation: { navigate, setOptions },
}: NavigateProps) => (
    <>
        <TouchableOpacity onPress={() => navigate("ScreenOne")}>
            <Text>Screen One</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() =>
                setOptions({ title: "타이틀을 변경 할 수 있는 setOptions" })
            }
        >
            <Text>타이틀을 변경합니다</Text>
        </TouchableOpacity>
    </>
);

function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ScreenOne" component={ScreenOne} />
            <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
            <Stack.Screen name="ScreenThree" component={ScreenThree} />
        </Stack.Navigator>
    );
}

export default StackNavigation;
