import styled from "styled-components/native"

export interface ImageStyle {
    width: string
    height: string
    borderRadius?: string
}

const ImageStyled = styled.Image<ImageStyle>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};

    border-radius: ${({ borderRadius }) => borderRadius};
`

export { ImageStyled }
