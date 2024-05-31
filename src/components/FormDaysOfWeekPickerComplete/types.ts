import { DaysOfWeekResponse } from "../../modules/tag/types"

export type FormDaysOfWeekPickerCompleteProps  = {
    daysOfWeek: DaysOfWeekResponse[]
    onSpecificDayChange: (days: DaysOfWeekResponse[]) => void
    //handleClearDays: (e: React.MouseEvent<HTMLButtonElement>) => void
}
