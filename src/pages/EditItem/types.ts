import { DaysOfWeekResponse, SpecificDatesResponse } from "../../modules/tag/types"

export type FormEditData = {
    name: string
    color: string
    active:number
    daysOfWeek: DaysOfWeekResponse[]
    specificDates: SpecificDatesResponse[]
}
  
export type FormEditErrors = {
    tagId?: string
    name?: string
    color?: string
    days?: string
}