import React, { useState } from "react";
import styled from "styled-components/native";
import pallete from "utils/style/pallete";

const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.gray9};
`;

interface BtnStyle {
    color: string;
}

const Btn = styled.TouchableOpacity<BtnStyle>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 125px;
    height: 50px;

    background: ${({ color }) => color};

    border: 3px solid;
    border-color: ${(props) => props.theme.borderColor};
    border-radius: ${(props) => props.theme.w4};
`;

const BtnText = styled.Text`
    font-size: 17.5px;
    color: ${(props) => props.theme.color};
    letter-spacing: 2px;
`;

function MovieScreen() {
    const [color, setColor] = useState<string>(pallete.red5);

    return (
        <Container>
            <Btn
                onPress={() => {
                    color === pallete.red5 && setColor(pallete.blue10);
                    color !== pallete.red5 && setColor(pallete.red5);
                }}
                color={color}
            >
                <BtnText>Clcik Me</BtnText>
            </Btn>
        </Container>
    );
}

export default MovieScreen;
