import axios from 'axios'
import { FormData } from '../../pages/RegisterItem/types'
import { CreateTagResponse, TagOfDay, TagResponse } from './types'
import { FormEditData } from '../../pages/EditItem/types'
import { publishTagIds } from '../mqtt/tagService'

const baseURL = 'https://localhost:7165/api'

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const createTag = async (formData: FormData): Promise<CreateTagResponse> => {
  try {
    const response = await axiosInstance.post('/Tag/create_tag', formData)
    publishTagIds(formData.tagId)
    return response.data
  } catch (error) {
    throw error
  }
}

export const listTags = async (): Promise<TagResponse[]> => {
  try {
    const response = await axiosInstance.get('/Tag/list_tags')
    
    return response.data
  } catch (error) {
    throw error
  }
}

export const getTagById = async (id:string | undefined): Promise<TagResponse> => {
  try {
    if (!id) { throw new Error('ID is required') }
    if (!/^[a-zA-Z0-9-]+$/.test(id)) { throw new Error('Invalid ID format') }
    const response = await axiosInstance.get(`/Tag/get_tag/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateTag = async (id:string | undefined,formData: FormEditData): Promise<TagResponse> => {
  try {
    if (!id) { throw new Error('ID is required') }
    if (!/^[a-zA-Z0-9-]+$/.test(id)) { throw new Error('Invalid ID format') }
    const response = await axiosInstance.put(`/Tag/edit_tag/${id}`, formData)
    publishTagIds(id)
    return response.data
  } catch (error) {
    throw error
  }
}

export const tagsOfDay = async (): Promise<TagOfDay[]> => {
  try {
    const response = await axiosInstance.get('/Tag/tags_of_the_day')
    
    return response.data
  } catch (error) {
    throw error
  }
}
