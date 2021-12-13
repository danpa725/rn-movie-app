import styled from "styled-components/native"

const MovieScreenContainer = styled.View`
    flex: 1;
    background: ${(props) => props.theme.background};
    align-items: center;
    justify-content: center;
`

const TitleContainer = styled.View`
    margin-left: 20px;
    margin-bottom: 20px;
`

export { MovieScreenContainer, TitleContainer }
