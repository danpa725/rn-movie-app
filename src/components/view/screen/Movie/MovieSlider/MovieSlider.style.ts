import pallete from "@/utils/style/pallete"
import styled from "styled-components/native"

const MovieCard = styled.View`
    flex: 1;
    background: ${pallete.blue3};
`

const MovieWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 100%;
`

const MovieCardPoster = styled.Image`
    width: 100px;
    height: 160px;

    border-radius: ${(props) => props.theme.w3};
`

const MovieDescriptionWrapper = styled.View`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;

    height: 75%;
    width: 50%;

    margin-left: 20px;
`

export { MovieCard, MovieCardPoster, MovieDescriptionWrapper, MovieWrapper }
