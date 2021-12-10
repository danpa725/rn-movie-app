import { ThemeMode } from "@/utils/style/CustomeTheme"
import pallete from "@/utils/style/pallete"
import styled from "styled-components/native"

const MovieCard = styled.View`
    flex: 1;
    background: ${pallete.blue3};
`
const MovieCardBackground = styled.Image``

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
const MovieTitle = styled.Text`
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.gray1};

    margin-top: -2.5px;
`
const MovieDescirption = styled.Text<ThemeMode>`
    font-size: 12px;
    color: ${({ isLight }) => (isLight ? pallete.gray1 : pallete.gray5)};

    margin-top: 10px;
`

const MovieRate = styled.Text<ThemeMode>`
    width: 37px;
    padding: 2.5px;
    border-radius: ${(props) => props.theme.w3};
    background: ${({ isLight }) =>
        isLight ? pallete.deepDark : pallete.gray10};

    border: ${(props) => props.theme.borderWidth};
    border-width: 0.75px;
    border-color: ${({ isLight }) =>
        isLight ? pallete.yellow8 : pallete.yellow3};

    color: ${({ isLight }) => (isLight ? pallete.gray1 : pallete.gray4)};
    font-size: 10px;
    font-weight: 600;
`

export {
    MovieCard,
    MovieCardBackground,
    MovieCardPoster,
    MovieDescirption,
    MovieDescriptionWrapper,
    MovieRate,
    MovieTitle,
    MovieWrapper,
}
