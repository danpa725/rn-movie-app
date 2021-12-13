import { LinearGradient } from "expo-linear-gradient"
import styled from "styled-components/native"

const VerticalScrollContainer = styled.FlatList`
    background: ${(props) => props.theme.background};
    width: 100%;
`

const CardContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    width: 90%;
    height: 300px;

    border-radius: 10px;

    margin-left: 20px;
`

const CardContainerDivider = styled.View`
    height: 25px;
    background-color: transparent;
`

const SideContainer = styled.View`
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: space-between;

    width: 125px;
    height: 260px;

    padding-top: 5px;
    padding-bottom: 7.5px;

    margin-left: 15px;
`

const ContentContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-evenly;
`

const TagContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`

const FooterContainerDivider = styled.View`
    height: 35px;
    background-color: transparent;
`

export {
    VerticalScrollContainer,
    ContentContainer,
    SideContainer,
    TagContainer,
    CardContainer,
    CardContainerDivider,
    FooterContainerDivider,
}
