import { ChangeEvent } from "react"

export type FormColorInputProps = {
    label: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    error?: string
}
