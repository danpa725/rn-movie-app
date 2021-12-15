import React from "react"
import { StyleProp, ViewStyle } from "react-native"

import TextCustome from "@components/atoms/Text/Text"
import { FontSizeType } from "@utils/style/font"

import { TagContainerStyle, TagContainer } from "./Tag.style"

interface TagProps extends TagContainerStyle {
    children: any
    fontSize?: FontSizeType
    customeStyle?: StyleProp<ViewStyle>
}

function Tag({
    children: innerText,
    borderRadius,
    isLight,
    fontSize,
    customeStyle,
}: TagProps) {
    return (
        <TagContainer
            isLight={isLight}
            borderRadius={borderRadius}
            style={customeStyle}
        >
            <TextCustome
                fontSize={fontSize ? fontSize : "xsm"}
                fontWeight={700}
            >
                {innerText}
            </TextCustome>
        </TagContainer>
    )
}

export default Tag
