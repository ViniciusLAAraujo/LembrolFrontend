
export type CreateTagResponse = {
}

export type DaysOfWeekResponse = {
    day: number
    active: number
}

export type SpecificDatesResponse = {
    date: string
    active: number
}

export type TagResponse = {
    tagId: string
    name: string
    active: number
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
    active: number
    color: string
    daysOfWeek: DaysOfWeekResponse[],
    specificDates: SpecificDatesResponse[],
}
