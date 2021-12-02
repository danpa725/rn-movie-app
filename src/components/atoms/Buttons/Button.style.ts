import styled from "styled-components/native";
import pallete from "utils/style/pallete";

//!Important: styled-components 내부에 주석을 절대로 달지 말라.
const DefaultButtonStyle = {
    width: "100px",
    height: "35px",

    borderWidth: "1.5px",
    borderColor: pallete.gray3,
    borderRadius: "1.5px",

    fontSize: "10px",
    fontWeight: "300",
};

export interface ButtonContainerStyle {
    background?: string;

    width?: string;
    height?: string;

    borderWidth?: string;
    borderColor?: string;
    borderRadius?: string;
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
`;

export interface ButtonInnerTextStyle {
    fontSize?: string;
    fontWeight?: string;
}

const ButtonInnerText = styled.Text<ButtonInnerTextStyle>`
    color: ${({ theme }) => theme.color};
    font-size: ${({ fontSize, theme }) =>
        fontSize ? fontSize : DefaultButtonStyle.fontSize};
    font-weight: ${({ fontWeight, theme }) =>
        fontWeight ? fontWeight : DefaultButtonStyle.fontWeight};
`;

export { ButtonContainer, ButtonInnerText };
