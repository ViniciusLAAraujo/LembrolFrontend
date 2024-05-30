import React, { useEffect, useState } from 'react'
import  { LatLngTuple } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { handleGeolocation } from '../../utils/locationsUtils'
import TagsList from '../../components/TagsList/TagsList'
import TagsMap from '../../components/TagsMap/TagsMap'
import { listTags } from '../../modules/tag/tagService'
import { Tag } from '../../modules/tag/types'
import { useNavigate } from 'react-router-dom'
import { RoutesEnum } from '../../routes/RoutesEnum'


const Gps : React.FC = () => {
  const [tags, setTags] = useState<Tag[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [selectedTag, setSelectedTag] = useState<Tag | null>(null)
  const [position, setPosition] = useState<LatLngTuple | undefined>(undefined)
  const navigate = useNavigate()

  const handleEditClick = (id : string) => {
    const editPath = RoutesEnum.EDIT.replace(':id', id);
    navigate(editPath)
  }

  const handleTagClick = (tag:Tag) => {
    setSelectedTag(tag)
  }

  useEffect(() => {
    handleGeolocation().then(setPosition)
    const fetchTags = async () => {
      try {
        const tagList = await listTags()
        var filteredtags= tagList.map(tag => {
          return {
            ...tag,
            lat: tag.lat ?? (Math.random() * ((-(19.5 - 19.9)) + 19.9)*-1).toFixed(2),
            lng: tag.lng ?? (Math.random() * ((-(43.8 - 43.9)) + 43.9)*-1).toFixed(2) ,
          }
        })
        setTags(filteredtags as Tag[])
      } catch (err) {
        console.error('Failed to fetch tags', err)
      } finally {
        setLoading(false)
      } 
    }
    fetchTags() 
  }, [])
  return (
    <div style={{display: 'flex', flex: 1}}>
      {!loading && tags &&
        <TagsList tags={tags} handleTagClick={handleTagClick}/>
      }
      {!loading && tags &&
        <TagsMap mapPosition={position} selectedTag={selectedTag} tags={tags} handleEditClick={handleEditClick}/>
      }
    </div>
    )
}

export default Gps