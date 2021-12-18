import React, { ReactElement } from "react"
import { StyleProp, TextStyle as RNTextStyle } from "react-native"
import { TextStyled, TextStyle } from "./Text.style"

export interface TextProps extends TextStyle {
    children: ReactElement | string
    customeStyle?: StyleProp<RNTextStyle>
}

function Text({
    fontSize,
    fontColor,
    fontWeight,
    children: innerText,
    customeStyle,
}: TextProps) {
    return (
        <TextStyled
            fontSize={fontSize}
            fontColor={fontColor}
            fontWeight={fontWeight}
            style={customeStyle}
        >
            {innerText}
        </TextStyled>
    )
}

export default Text
