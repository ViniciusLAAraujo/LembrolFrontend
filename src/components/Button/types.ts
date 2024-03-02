import { CSSProperties } from "react"

export type ButtonProps = {
    label: string
    onClick?:()=> void
    style?: CSSProperties
    type?: "button" | "submit" | "reset"
}