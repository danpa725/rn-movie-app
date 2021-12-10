import React, { ReactElement } from "react"
import { StyleProp, ViewStyle } from "react-native"
import TextCustome from "../../atoms/Text/Text"
import { TextStyle } from "../../atoms/Text/Text.style"
import { ButtonContainer, ButtonContainerStyle } from "./Button.style"

interface ButtonProps extends ButtonContainerStyle, TextStyle {
    onPress?: () => void
    buttonText?: string
    activeOpacity?: number
    Icon?: ReactElement
    customeStyle?: StyleProp<ViewStyle>
}

function ButtonCustome({
    onPress,
    buttonText,
    background,
    width,
    height,
    borderColor,
    borderRadius,
    borderWidth,
    fontSize,
    fontWeight,
    activeOpacity,
    Icon,
    customeStyle,
}: ButtonProps) {
    return (
        <ButtonContainer
            onPress={onPress && onPress}
            //* container style
            width={width}
            height={height}
            background={background}
            //* border style
            borderColor={borderColor}
            borderRadius={borderRadius}
            borderWidth={borderWidth}
            //* touchableOpacity property
            activeOpacity={activeOpacity ? activeOpacity : 0.5}
            style={customeStyle && customeStyle}
        >
            {buttonText && (
                <TextCustome fontSize={fontSize} fontWeight={fontWeight}>
                    {buttonText}
                </TextCustome>
            )}
            {Icon && Icon}
        </ButtonContainer>
    )
}

export default ButtonCustome
