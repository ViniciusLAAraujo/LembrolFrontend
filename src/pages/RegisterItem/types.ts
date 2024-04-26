
export type FormData = {
    tagId: string
    name: string
    color: string
    daysOfWeek: number[]
    specificDates: string[]
}
  
export type FormErrors = {
    tagId?: string
    name?: string
    color?: string
    days?: string
}