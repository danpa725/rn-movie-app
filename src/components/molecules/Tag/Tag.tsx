import React from "react"
import { StyleProp, ViewStyle } from "react-native"

import Text from "@components/atoms/Text/Text"
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
            <Text fontSize={fontSize ? fontSize : "xsm"} fontWeight={700}>
                {innerText}
            </Text>
        </TagContainer>
    )
}

export default Tag
