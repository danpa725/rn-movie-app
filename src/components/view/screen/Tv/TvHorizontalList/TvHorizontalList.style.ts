import { ThemeMode } from "@/utils/style/CustomeTheme"
import styled from "styled-components/native"

const SectionContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    padding: 15px 0;
`
const HorizontalSeperator = styled.View`
    width: 20px;
    background-color: transparent;
`

//* render element
const BoxContainer = styled.View<ThemeMode>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 190px;
    height: 300px;

    margin-top: 50px;
    margin-bottom: 80px;

    background: ${({ isLight, theme }) =>
        isLight ? theme.white : theme.gray9};
    border: 1px;
    border-color: ${({ isLight, theme }) =>
        isLight ? theme.gray3 : theme.gray7};

    border-radius: ${(props) => props.theme.bRound};
`

const InfoContainer = styled.View<ThemeMode>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${({ isLight, theme }) =>
        isLight ? theme.white : theme.gray10};

    width: 160px;

    margin-top: 12.5px;
    padding: 7.5px 0;

    border: 1px;
    border-color: ${({ isLight, theme }) =>
        isLight ? theme.gray3 : theme.gray9};

    border-radius: ${(props) => props.theme.bxlg};
    border-bottom-left-radius: ${(props) => props.theme.bRound};
    border-bottom-right-radius: ${(props) => props.theme.bRound};
`

const TagContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export {
    BoxContainer,
    HorizontalSeperator,
    InfoContainer,
    SectionContainer,
    TagContainer,
}
