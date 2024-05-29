import { DaysOfWeekResponse } from "../../modules/tag/types"

export type DaysOfWeekSimpListCompleteProps = {
    days: DaysOfWeekResponse[]
    handleDayState: (index:number) => void
}
