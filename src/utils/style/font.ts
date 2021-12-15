export interface FontSize {
    xsm: string
    sm: string
    md: string
    lg: string
    xlg: string
    xxlg: string
    info: string
}

export type FontSizeType = "xsm" | "sm" | "md" | "lg" | "xlg" | "xxlg" | "info"

const fontSize: FontSize = {
    xsm: "8px",
    sm: "10px",
    md: "12px",
    lg: "14px",
    xlg: "16px",
    xxlg: "18px",
    info: "20px",
}

export default fontSize
