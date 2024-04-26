
export type FormDatePickerProps  = {
    specificDates: string[]
    onSpecificDatesChange: (dates: string[]) => void
    handleClearDates: (e: React.MouseEvent<HTMLButtonElement>) => void
}
