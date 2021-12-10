import TextCustome from "@/components/atoms/Text/Text"
import { ThemeMode } from "@/utils/style/CustomeTheme"
import React from "react"
import { StyleProp, ViewStyle } from "react-native"
import styled from "styled-components/native"

interface TagProps extends TagContainerStyle {
    children: any
    fontSize: string
    customeStyle?: StyleProp<ViewStyle>
}

interface TagContainerStyle extends ThemeMode {
    borderRadius?: string
}

const TagContainer = styled.View<TagContainerStyle>`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 5px;

    background-color: ${({ isLight, theme }) =>
        isLight ? theme.gray2 : theme.trueDeepDark};

    border: 1px solid
        ${({ isLight, theme }) => (isLight ? theme.yellow8 : theme.yellow6)};

    border-radius: ${({ borderRadius, theme }) =>
        borderRadius ? borderRadius : theme.blg};
`

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
            <TextCustome fontSize={fontSize} fontWeight={700}>
                {innerText}
            </TextCustome>
        </TagContainer>
    )
}

export default Tag
