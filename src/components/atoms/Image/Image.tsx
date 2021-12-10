//@ts-nocheck
import borderRadius from "@/utils/style/borderRadius"
import React from "react"
import { StyleProp, ImageStyle as RNImageStyle } from "react-native"
import { ImageStyle, ImageStyled } from "./Image.style"
interface ImageProps extends ImageStyle {
    uri: string
    customeStyle?: StyleProp<RNImageStyle>
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
    customeStyle,
}: ImageProps) {
    return (
        <ImageStyled
            source={{ uri }}
            width={width}
            height={height}
            borderRadius={borderRadius}
            style={customeStyle}
        />
    )
}

export default Image
