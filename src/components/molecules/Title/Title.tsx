import React, { ReactElement } from "react"

import Text, { TextProps } from "@components/atoms/Text/Text"
interface TitleProps extends Omit<TextProps, "children"> {
    title: string
    Icon: ReactElement
}

function Title({
    title,
    Icon,
    fontSize,
    fontWeight,
    fontColor,
    customeStyle,
}: TitleProps) {
    return (
        <Text
            fontSize={fontSize}
            fontWeight={fontWeight ? fontWeight : 700}
            fontColor={fontColor}
            customeStyle={customeStyle}
        >
            <>
                {title} {Icon}
            </>
        </Text>
    )
}

export default Title
