import styled from "styled-components/native"

export interface TextStyle {
    fontSize: string
    fontColor?: string
    fontWeight?: number
}

const TextStyled = styled.Text<TextStyle>`
    font-size: ${({ fontSize, theme }) => (fontSize ? fontSize : theme.md)};
    color: ${({ fontColor, theme }) => (fontColor ? fontColor : theme.color)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 300)};
`

export { TextStyled }
