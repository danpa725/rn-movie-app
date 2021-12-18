import React, { ReactElement } from "react"

import Text from "@components/atoms/Text/Text"
import { FontSizeType } from "@utils/style/font"

interface TitleProps {
    title: string
    titleSize?: FontSizeType
    titleWeight?: number
    Icon: ReactElement
}

function Title({ title, Icon, titleSize, titleWeight }: TitleProps) {
    return (
        <Text fontSize={titleSize} fontWeight={titleWeight ? titleWeight : 700}>
            <>
                {title} {Icon}
            </>
        </Text>
    )
}

export default Title
