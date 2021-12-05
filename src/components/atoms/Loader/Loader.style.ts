import styled from "styled-components/native"

const LoaderContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.background};
`

export { LoaderContainer }
