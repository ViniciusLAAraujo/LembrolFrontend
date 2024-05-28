import axios from 'axios'
import { FormData } from '../../pages/RegisterItem/types'
import { CreateTagResponse, TagResponse } from './types'

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
