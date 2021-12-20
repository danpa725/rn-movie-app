import styled from "styled-components/native"

const Container = styled.ScrollView`
    flex: 1;
    background-color: ${(props) => props.theme.background};
`
const SearchBar = styled.TextInput`
    align-self: center;

    width: 90%;
    height: 50px;

    padding: 15px;
    margin: 20px 0;

    font-size: ${(props) => props.theme.lg};
    color: ${(props) => props.theme.color};

    background-color: ${(props) => props.theme.background};

    border: 2.25px;
    border-color: ${(props) => props.theme.teal7};
    border-radius: ${(props) => props.theme.bxxxlg};
`

export { Container, SearchBar }
