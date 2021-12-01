import React from "react";
import styled from "styled-components/native";

import { Text } from "react-native";
import { RootNavigateProps } from "../../navigation/RootNavigation/RootNavigation";
import { TEST } from "constants/constants";

const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.background};
`;

const TouchBtn = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 145px;
    height: 50px;

    background: ${(props) => props.theme.blue4};
    border: 2px solid;
    border-color: ${(props) => props.theme.borderColor};
    border-radius: ${(props) => props.theme.w4};
`;

function HomeScreen({ navigation: { navigate } }: RootNavigateProps) {
    return (
        <Container>
            <TouchBtn
                onPress={() => navigate("STACK", { screen: "ScreenTwo" })}
            >
                <Text>{String(TEST)} stack으로 이동</Text>
            </TouchBtn>
        </Container>
    );
}

export default HomeScreen;
