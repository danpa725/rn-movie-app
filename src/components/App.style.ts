import styled from "styled-components/native";

const AppContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const WelcomeText = styled.Text`
    margin: 25px;

    font-size: ${(props) => props.theme.xlg};
    font-style: italic;
`;

const ButtonContainer = styled.View`
    display: flex;

    height: 200px;

    align-items: center;
    justify-content: space-around;
`;

export { AppContainer, ButtonContainer, WelcomeText };
