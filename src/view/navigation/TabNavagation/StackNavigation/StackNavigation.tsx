import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
    createNativeStackNavigator,
    NativeStackScreenProps,
} from "@react-navigation/native-stack";

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
        <Stack.Navigator
            //* screenOptions는 전체적으로 적용되는 값
            screenOptions={{
                animation: "fade",
                //* stack에 자연스럽게 조화를 이루기 위함
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="ScreenOne"
                component={ScreenOne}
                //*options는 해당 컴포넌트에서만 적용되는 값
                options={{}}
            />
            <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
            <Stack.Screen name="ScreenThree" component={ScreenThree} />
        </Stack.Navigator>
    );
}

export default StackNavigation;
