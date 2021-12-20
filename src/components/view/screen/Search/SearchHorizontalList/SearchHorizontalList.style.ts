import { ThemeMode } from "@/utils/style/CustomeTheme"
import styled, { css } from "styled-components/native"

const HorizontalContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 100%;

    margin: 15px 0;
`

const HorizontalSeperator = styled.View`
    width: 20px;
    background-color: transparent;
`

const BoxContainer = styled.View<ThemeMode>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 125px;
    height: 250px;

    background-color: ${(props) => props.theme.background};
    border-radius: ${(props) => props.theme.bxxxlg};

    ${({ isLight, theme }) =>
        !isLight &&
        css`
            border-radius: ${theme.bsm};
            border-bottom-width: 2px;
            border-color: ${theme.teal8};
        `}
`

const InfoContainer = styled.View`
    flex: 1.5;
    align-items: center;
    justify-content: center;
`

const ResultNumber = styled.Text`
    position: absolute;
    top: 5px;
    left: 5px;

    width: 20px;
    height: 20px;

    padding: 2.5px;

    background: ${(props) => props.theme.background};

    text-align: center;
    font-size: 10px;
    font-weight: 700;
    color: ${(props) => props.theme.color};

    border-radius: ${(props) => props.theme.bxxlg};

    opacity: 0.65;
`

export {
    HorizontalContainer,
    HorizontalSeperator,
    BoxContainer,
    InfoContainer,
    ResultNumber,
}
