import { RoutesEnum } from "../../routes/RoutesEnum"


export type HeaderNavItem = {
    [key:string]: {
        label: string
        to: RoutesEnum
        end?: boolean
    }
}