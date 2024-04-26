import { ChangeEvent } from "react"

export type FormTextInputProps = {
    label: string
    name: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    error?: string
}