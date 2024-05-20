import { CSSProperties, ReactNode } from "react"

export type ButtonProps = {
    label: ReactNode 
    onClick?:(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void 
    style?: CSSProperties
    type?: "button" | "submit" | "reset"
}