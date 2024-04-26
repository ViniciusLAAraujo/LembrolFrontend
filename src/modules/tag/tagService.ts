import axios from 'axios'
import { FormData } from '../../pages/RegisterItem/types'

const baseURL = 'https://localhost:7165/api'

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export type CreateTagResponse = {
}

export const createTag = async (formData: FormData): Promise<CreateTagResponse> => {
  try {
    const response = await axiosInstance.post('/Tag/create_tag', formData)
    
    return response.data
  } catch (error) {
    throw error
  }
}
