import { BorderRadiusSize } from "@utils/style/borderRadius"
import { ThemeMode } from "@utils/style/CustomeTheme"
import styled from "styled-components/native"

export interface TagContainerStyle extends ThemeMode {
    borderRadius?: BorderRadiusSize
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
        borderRadius && theme[borderRadius] ? theme[borderRadius] : theme.blg};
`

export { TagContainer }
