import { LinearGradient } from "expo-linear-gradient"
import React, { ReactElement } from "react"
import { StyleProp, ViewStyle } from "react-native"

interface GradientPosition {
    x: number
    y: number
}

interface GrdientProps {
    startColor: string
    endColor: string
    children?: ReactElement
    customeStyle?: StyleProp<ViewStyle>
    startPos: GradientPosition
    endPos: GradientPosition
}

function Gradient({
    startColor,
    endColor,
    children,
    customeStyle,
    startPos,
    endPos,
}: GrdientProps) {
    return (
        <LinearGradient
            colors={[startColor, endColor]}
            style={customeStyle}
            start={startPos}
            end={endPos}
        >
            {children}
        </LinearGradient>
    )
}

export default Gradient
