import { ThemeMode } from "@/utils/style/CustomeTheme"
import styled from "styled-components/native"

const ListContainer = styled.View`
    margin-top: 20px;
`
const ListScrollContainer = styled.FlatList`
    margin-top: 20px;

    width: 100%;
    height: 325px;

    background: transparent;
`
//* Flat list로는 엘리먼트 사이 간격을 스타일링 하지 않아도 된다
//*
const ListBox = styled.View<ThemeMode>`
    display: flex;
    align-items: baseline;
    justify-content: center;

    width: 200px;
    height: 220px;

    background: ${({ isLight, theme }) =>
        isLight ? theme.trueDeepDark : theme.gray8};
    border-radius: ${(props) => props.theme.bxlg};
`
const ListBoxDivider = styled.View`
    width: 30px;
    background-color: transparent;
`

const ListTitleContainer = styled.View<ThemeMode>`
    position: absolute;
    bottom: -50px;
    left: 0px;

    display: flex;
    align-items: flex-start;
    justify-content: center;

    width: 100%;
    height: 40px;
    padding: 10px;
    border-radius: ${(props) => props.theme.bxlg};
    background: ${({ isLight, theme }) =>
        isLight ? theme.gray1 : theme.gray8};
`

const ListVote = styled.View`
    position: absolute;
    top: 7.5px;
    right: 7.5px;

    display: flex;
    align-items: center;
    justify-content: center;
`

const ListNumebr = styled.Text`
    position: absolute;

    top: 80px;
    left: 125px;

    font-size: 115px;
    font-weight: 500;

    z-index: 100;
    color: ${(props) => props.theme.gray2};
    text-shadow: 2px 3px 20px ${(props) => props.theme.gray8};
`
const TitleContainer = styled.View`
    margin-left: 20px;
`

export {
    ListBox,
    ListContainer,
    ListBoxDivider,
    ListScrollContainer,
    ListTitleContainer,
    ListNumebr,
    ListVote,
    TitleContainer,
}
