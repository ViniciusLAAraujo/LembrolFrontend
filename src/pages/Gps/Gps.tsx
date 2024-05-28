import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Popup, CircleMarker} from 'react-leaflet'
import  { LatLngTuple } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Button from '../../components/Button'
import DefaultIcon from '../../components/DefaultIcon'
import styles from './styles'
import { daysStringSlash } from '../../utils/dateUtils'
import { Tag } from './types'
import { handleGeolocation } from '../../utils/locationsUtils'
import TagsList from '../../components/TagsList/TagsList'

const tagsMock : Tag[] = [
    {
        id : 1,
        name: 'Tag 1',
        lat: -19.92,
        lng: -43.95,
        color: '#ff5',
        daysOfWeek: [
          0,1,2,3,4,5,6
        ],
        specificDates: [
          "2024-05-01"
        ]
    },
    {
        id : 2,
        name: 'Tag 2',
        lat: -19.92,
        lng: -43.90,
        color: '#000',
        daysOfWeek: [

        ],
        specificDates: [
          "2024-05-01"
        ]
    },
]


const Gps : React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<Tag | null>(null)
  const [position, setPosition] = useState<LatLngTuple | undefined>(undefined)

  const handleTagClick = (tag:Tag) => {
    setSelectedTag(tag)
  }

  useEffect(() => {
    handleGeolocation().then(setPosition)
  }, [])

  return (
    <div style={{display: 'flex', flex: 1}}>
      <TagsList tags={tagsMock} handleTagClick={handleTagClick}/>
      <div style={{display: 'flex', flex: 5 , padding: 16, borderRadius:8}}>
        {position !== undefined  && <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{display:"flex",flex:1}}>
          <TileLayer   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {tagsMock.map((tag) => (
            <CircleMarker  key={tag.id} center={[tag.lat, tag.lng]} radius={20} pathOptions={{color:tag.color}}>
              <Popup><span>{tag.name} Id: {tag.id}</span></Popup>
            </CircleMarker>
          ))}
          {selectedTag && (
            <Popup
            position={[selectedTag.lat, selectedTag.lng]}
            closeButton={false}
            >
            <div style={{display: 'flex', flexDirection: 'row', gap: 8}}>
                <div style={{background: selectedTag.color, borderRadius:'50%', width:'4rem', height:'4rem', alignSelf:'center'}}></div>
                <div style={{display: 'flex',flexDirection: 'column', gap: 4}}>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent:'space-around', gap: 4}}>
                    <div>
                      <span>
                        {selectedTag.name}
                      </span>
                    </div>
                    <div style={{display: 'flex', flex: 1, justifyContent:'flex-end'}}>
                      <Button 
                        style={{ padding: 0, background: 'inherit'}}
                        onClick={()=>{}} 
                        type='button' 
                        label={  
                        <DefaultIcon  imgStyle={{width:"60%"}} imagePath='edit'  />
                        }
                      /> 
                    </div> 
                  </div>
                  <div style={{ textAlign: 'center'}}>
                    {`id: ${selectedTag.id}`}
                  </div>
                  {selectedTag.daysOfWeek.length > 0 && 
                    <div style={{borderStyle:'solid',borderWidth:2, borderColor:'green', borderRadius: 16, textAlign: 'center', padding: 4}}>
                      {daysStringSlash(selectedTag.daysOfWeek)}
                    </div>
                  }
                  {selectedTag.specificDates.length > 0 && 
                    <div style={{borderStyle:'solid',borderWidth:2, borderColor:'green', borderRadius: 16, textAlign: 'center', padding: 4}}>
                      {selectedTag.specificDates[0]}
                    </div>
                  }
                </div>
            </div>
            </Popup>
            
          )}
        </MapContainer>}
      </div>
    </div>
    )
}

export default Gps