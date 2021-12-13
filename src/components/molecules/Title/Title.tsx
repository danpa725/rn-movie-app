import TextCustome from "@components/atoms/Text/Text"
import fontSize from "@utils/style/font"
import React, { ReactElement } from "react"

interface TitleProps {
    title: string
    titleSize?: string
    titleWeight?: number
    Icon: ReactElement
}

function Title({ title, Icon, titleSize, titleWeight }: TitleProps) {
    return (
        <TextCustome
            fontSize={titleSize ? titleSize : fontSize.xlg}
            fontWeight={titleWeight ? titleWeight : 700}
        >
            {title} {Icon}
        </TextCustome>
    )
}

export default Title
