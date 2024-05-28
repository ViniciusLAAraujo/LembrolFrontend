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
import TagsMap from '../../components/TagsMap/TagsMap'

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
      <TagsMap mapPosition={position} selectedTag={selectedTag} tags={tagsMock}/>
    </div>
    )
}

export default Gps