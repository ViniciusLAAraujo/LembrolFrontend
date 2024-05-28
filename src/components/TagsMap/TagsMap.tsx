import React from "react"
import { TagsMapProps } from "./types"
import styles from "./styles"
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet"
import EditTagModal from "../EditTagModal/EditTagModal"

const TagsMap: React.FC<TagsMapProps> = ({selectedTag, mapPosition, tags}) => {
    return (
        <div style={styles.mapDiv}>
            {mapPosition !== undefined  && <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={false} style={styles.defaultFlex}>
            <TileLayer   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {tags.map((tag) => (
                <CircleMarker  key={tag.tagId} center={[tag.lat, tag.lng]} radius={20} pathOptions={{color:tag.color}}>
                <Popup>
                    <span>
                        {tag.name} Id: {tag.tagId}
                    </span>
                </Popup>
                </CircleMarker>
            ))}
            {selectedTag && (
                <Popup
                position={[selectedTag.lat, selectedTag.lng]}
                closeButton={false}
                >
                    <EditTagModal selectedTag={selectedTag}/>
                </Popup>
                
            )}
            </MapContainer>}
        </div>
    )
}

export default TagsMap
