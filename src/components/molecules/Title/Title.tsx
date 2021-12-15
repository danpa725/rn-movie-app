import React, { ReactElement } from "react"

import TextCustome from "@components/atoms/Text/Text"
import { FontSizeType } from "@utils/style/font"

interface TitleProps {
    title: string
    titleSize?: FontSizeType
    titleWeight?: number
    Icon: ReactElement
}

function Title({ title, Icon, titleSize, titleWeight }: TitleProps) {
    return (
        <TextCustome
            fontSize={titleSize}
            fontWeight={titleWeight ? titleWeight : 700}
        >
            <>
                {title} {Icon}
            </>
        </TextCustome>
    )
}

export default Title
