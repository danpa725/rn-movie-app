//@ts-nocheck
import borderRadius from "@/utils/style/borderRadius"
import React from "react"
import { ImageStyle, ImageStyled } from "./Image.style"
interface ImageProps extends ImageStyle {
    uri: string
}

const DEFAULT_PROPS: ImageStyle = {
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
        <ImageStyled
            source={{ uri }}
            width={width}
            height={height}
            borderRadius={borderRadius}
        />
    )
}

export default Image
