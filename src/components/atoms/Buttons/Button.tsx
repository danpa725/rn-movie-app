import React, { ReactElement } from "react";
import {
    ButtonContainer,
    ButtonContainerStyle,
    ButtonInnerText,
    ButtonInnerTextStyle,
} from "./Button.style";

interface ButtonProps extends ButtonContainerStyle, ButtonInnerTextStyle {
    onPress?: () => void;
    buttonText?: string;
    activeOpacity?: number;
    Icon?: ReactElement;
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
        >
            {buttonText && (
                <ButtonInnerText fontSize={fontSize} fontWeight={fontWeight}>
                    {buttonText}
                </ButtonInnerText>
            )}
            {Icon && Icon}
        </ButtonContainer>
    );
}

export default ButtonCustome;
