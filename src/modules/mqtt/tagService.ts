import axios from "axios"

const baseURL = 'https://localhost:7165/api/Mqtt/'
const topic = 'lembrol/sendesp'

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})


export const publishTagIds = async (tagsCSV:string) => {
  try {
    var send = {
      topic:topic,
      payload:tagsCSV
    }
    const response = await axiosInstance.post(`publish`,send)
    
    return response.data
  } catch (error) {
    throw error
  }
}

