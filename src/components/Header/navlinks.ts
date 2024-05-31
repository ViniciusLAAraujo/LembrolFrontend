
import { RoutesEnum } from "../../routes/RoutesEnum"
import { HeaderNavItem } from "./types"


export const headerNavLinks:HeaderNavItem = {
    'About': {label:'LEMBROL', to: RoutesEnum.TAGSOFDAY, end: true },
    'New': {label:'What do I want to remenber ?', to: RoutesEnum.NEW, end: true },
    'GPS': {label:'Where is it ?', to: RoutesEnum.GPS, end: true },
}
