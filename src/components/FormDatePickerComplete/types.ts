import { SpecificDatesResponse } from "../../modules/tag/types"

export type FormDatePickerCompleteProps  = {
    specificDates: SpecificDatesResponse[]
    onSpecificDatesChange: (dates: SpecificDatesResponse[]) => void
    handleClearDates: (e: React.MouseEvent<HTMLButtonElement>) => void
}
