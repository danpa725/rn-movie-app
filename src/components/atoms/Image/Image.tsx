// @ts-nocheck
import borderRadius from "@/utils/style/borderRadius"
import React from "react"
import styled from "styled-components/native"

const Images = styled.Image<ImageStyleProps>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};

    border-radius: ${({ borderRadius }) => borderRadius};
`

interface ImageStyleProps {
    width: string
    height: string
    borderRadius: string
}

interface ImageProps extends ImageStyleProps {
    uri: string
}

const DEFAULT_PROPS: ImageStyleProps = {
    width: "100px",
    height: "150px",
    borderRadius: borderRadius.bsm,
}

function Image({
    width = DEFAULT_PROPS.width,
    height = DEFAULT_PROPS.height,
    borderRadius = DEFAULT_PROPS.borderRadius,
    uri,
}: ImageProps) {
    return (
        <Images
            source={{ uri }}
            width={width}
            height={height}
            borderRadius={borderRadius}
        />
    )
}

export default Image
