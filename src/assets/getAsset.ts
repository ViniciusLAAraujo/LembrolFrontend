import lembrolEmpty from '/lembrolempty.png'
import lembrolFull from '/lembrolfull.png'
import slytherin from './Icons/slytherin.svg'
import ravenclaw from './Icons/ravenclaw.svg'
import hufflepuff from './Icons/hufflepuff.svg'
import gryffindor from './Icons/gryffindor.svg'
import defaultItemImage from './Icons/defaultItemImage.png'
import calendar from './Icons/calendar.png'
import cycle from './Icons/cycle.png'
import broom from './Icons/broom.png'
import edit from './Icons/edit.png'

const getAsset = ({asset}:{asset : string})=> {
    switch (asset) {
        case 'lembrolFull':
            return lembrolFull
        case 'lembrolEmpty':
            return lembrolEmpty
        case 'slytherin':
            return slytherin
        case 'ravenclaw':
            return ravenclaw
        case 'hufflepuff':
            return hufflepuff
        case 'gryffindor':
            return gryffindor
        case 'defaultItemImage':
            return defaultItemImage
        case 'calendar':
            return calendar
        case 'cycle':
            return cycle
        case 'broom':
            return broom
        case 'edit':
            return edit
        default:
            return ""
    }
}
    
export default getAsset