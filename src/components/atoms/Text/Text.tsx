import React, { ReactElement } from "react"
import { StyleProp, TextStyle as RNTextStyle } from "react-native"
import { TextStyled, TextStyle } from "./Text.style"

interface TextCustimeProps extends TextStyle {
    children: ReactElement | string
    customeStyle?: StyleProp<RNTextStyle>
}

function TextCustome({
    fontSize,
    fontColor,
    fontWeight,
    children: innerText,
    customeStyle,
}: TextCustimeProps) {
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

export default TextCustome
