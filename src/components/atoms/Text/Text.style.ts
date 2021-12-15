import styled from "styled-components/native"
import { FontSizeType } from "@utils/style/font"

export interface TextStyle {
    fontSize?: FontSizeType
    fontColor?: string
    fontWeight?: number
}

const TextStyled = styled.Text<TextStyle>`
    font-size: ${({ fontSize, theme }) =>
        fontSize && theme[fontSize] ? theme[fontSize] : theme.md};
    color: ${({ fontColor, theme }) => (fontColor ? fontColor : theme.color)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 300)};
`

export { TextStyled }
