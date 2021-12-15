import styled from "styled-components/native"

import { BorderRadiusSize } from "@utils/style/borderRadius"

export interface ImageStyle {
    width: string
    height: string
    borderRadius?: BorderRadiusSize
}

const ImageStyled = styled.Image<ImageStyle>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};

    border-radius: ${({ borderRadius, theme }) =>
        borderRadius && theme[borderRadius] ? theme[borderRadius] : theme.bmd};
`

export { ImageStyled }
