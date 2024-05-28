
export type CreateTagResponse = {
}

export type DaysOfWeekResponse = {
    day: number
    active: boolean
}

export type SpecificDatesResponse = {
    date: string
    active: boolean
}

export type TagResponse = {
    tagId: string
    name: string
    lat: number | null | undefined
    lng: number | null | undefined
    color: string
    daysOfWeek: DaysOfWeekResponse[],
    specificDates: SpecificDatesResponse[],
}

export type Tag = {
    tagId: string
    name: string
    lat: number 
    lng: number
    color: string
    daysOfWeek: DaysOfWeekResponse[],
    specificDates: SpecificDatesResponse[],
}
