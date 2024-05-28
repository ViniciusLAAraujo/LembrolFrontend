import { LatLngTuple } from "leaflet"
import { Tag } from "../../pages/Gps/types"

export type TagsMapProps = {
    selectedTag : Tag
    mapPosition : LatLngTuple | undefined
    tags : Tag[]
}