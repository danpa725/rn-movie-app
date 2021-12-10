import styled from "styled-components/native"

//!Important: styled-componentsr 내부에 주석을 절대로 달지 말라.
const DefaultButtonStyle = {
    width: "100px",
    height: "35px",

    borderWidth: "1.5px",
    borderRadius: "1.5px",
}

export interface ButtonContainerStyle {
    background?: string

    width?: string
    height?: string

    borderWidth?: string
    borderColor?: string
    borderRadius?: string
}

const ButtonContainer = styled.TouchableOpacity<ButtonContainerStyle>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${({ width }) => (width ? width : DefaultButtonStyle.width)};
    height: ${({ height }) => (height ? height : DefaultButtonStyle.width)};

    background: ${({ background, theme }) =>
        background ? background : theme.background};

    border-style: solid;
    border-width: ${({ borderWidth, theme }) =>
        borderWidth ? borderWidth : theme.borderWidth};
    border-color: ${({ borderColor, theme }) =>
        borderColor ? borderColor : theme.borderColor};
    border-radius: ${({ borderRadius, theme }) =>
        borderRadius ? borderRadius : theme.borderRadius};
`

export { ButtonContainer }
