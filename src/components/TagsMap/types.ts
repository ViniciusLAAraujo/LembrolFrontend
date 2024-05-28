import { LatLngTuple } from "leaflet"
import { Tag } from "../../modules/tag/types"

export type TagsMapProps = {
    selectedTag : Tag | null
    mapPosition : LatLngTuple | undefined
    tags : Tag[]
}