import React, { useEffect, useState } from 'react'
import  { LatLngTuple } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { handleGeolocation } from '../../utils/locationsUtils'
import TagsList from '../../components/TagsList/TagsList'
import TagsMap from '../../components/TagsMap/TagsMap'
import { listTags } from '../../modules/tag/tagService'
import { Tag } from '../../modules/tag/types'
import Loading from '../../components/LoadingIcon/Loading'
import { useNavigate } from 'react-router-dom'
import { RoutesEnum } from '../../routes/RoutesEnum'
import toast from 'react-hot-toast'


const Gps : React.FC = () => {
  const [tags, setTags] = useState<Tag[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [selectedTag, setSelectedTag] = useState<Tag | null>(null)
  const [position, setPosition] = useState<LatLngTuple | undefined>(undefined)
  const navigate = useNavigate()

  const handleEditClick = (id : string) => {
    const encodedId = encodeURIComponent(id)
    const editPath = RoutesEnum.EDIT.replace(':id', encodedId);
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
        setLoading(false)
      } catch (err) {
        toast.error('Failed to fetch tags')
      } 
    }
    fetchTags() 
  }, [])
  if (loading) {
    return <Loading />;
  }

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