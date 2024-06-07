import axios from 'axios'
import { FormData } from '../../pages/RegisterItem/types'
import { CreateTagResponse, TagOfDay, TagResponse } from './types'
import { FormEditData } from '../../pages/EditItem/types'
import { publishTagIds } from '../mqtt/tagService'

const baseURL = import.meta.env.VITE_API_BASE_URL as string

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const createTag = async (formData: FormData): Promise<CreateTagResponse> => {
  try {
    const response = await axiosInstance.post(import.meta.env.VITE_API_TAG_CREATE, formData)
    publishTagIds(formData.tagId)
    return response.data
  } catch (error) {
    throw error
  }
}

export const listTags = async (): Promise<TagResponse[]> => {
  try {
    const response = await axiosInstance.get(import.meta.env.VITE_API_TAG_LIST)
    
    return response.data
  } catch (error) {
    throw error
  }
}

export const getTagById = async (id:string | undefined): Promise<TagResponse> => {
  try {
    if (!id) { throw new Error('ID is required') }
    const response = await axiosInstance.get(`${import.meta.env.VITE_API_TAG_GET_ID}${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateTag = async (id:string | undefined,formData: FormEditData): Promise<TagResponse> => {
  try {
    if (!id) { throw new Error('ID is required') }
    const response = await axiosInstance.put(`${import.meta.env.VITE_API_TAG_EDIT_ID}${id}`, formData)
    publishTagIds(id)
    return response.data
  } catch (error) {
    throw error
  }
}

export const tagsOfDay = async (): Promise<TagOfDay[]> => {
  try {
    const response = await axiosInstance.get(import.meta.env.VITE_API_TAG_CURRENT)
    
    return response.data
  } catch (error) {
    throw error
  }
}
