import React from "react"
import { TextStyled, TextStyle } from "./Text.style"

interface TextCustimeProps extends TextStyle {
    children: any
}

function TextCustome({
    fontSize,
    fontColor,
    fontWeight,
    children: innerText,
}: TextCustimeProps) {
    return (
        <TextStyled
            fontSize={fontSize}
            fontColor={fontColor}
            fontWeight={fontWeight}
        >
            {innerText}
        </TextStyled>
    )
}

export default TextCustome
