import lembrolEmpty from '/lembrolempty.png'
import lembrolFull from '/lembrolfull.png'
import slytherin from './Icons/slytherin.svg'
import ravenclaw from './Icons/ravenclaw.svg'
import hufflepuff from './Icons/hufflepuff.svg'
import gryffindor from './Icons/gryffindor.svg'

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
        default:
            return ""
    }
}
    
export default getAsset