import { DefaultTheme } from "styled-components";

import pallete, { Pallete } from "./pallete";
import width, { Width } from "./width";

export interface CommonThemeProperty extends Pallete, Width {}

const commonThemeProperty: CommonThemeProperty = {
    //* width
    ...width,
    //* color pallete
    ...pallete,
};

const lightTheme: DefaultTheme = {
    //* common
    ...commonThemeProperty,

    borderRadius: "1.5",
    background: pallete.gray1,
    color: pallete.deepDark,

    borderWidth: commonThemeProperty.w1,
    borderColor: pallete.gray7,
};

const darkTheme: DefaultTheme = {
    //* common
    ...commonThemeProperty,

    borderRadius: "1.75",
    background: pallete.gray10,
    color: pallete.gray2,

    borderWidth: commonThemeProperty.w2,
    borderColor: pallete.gray2,
};

export { darkTheme, lightTheme };
