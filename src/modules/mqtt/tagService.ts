import axios from "axios"

const baseURL = import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_API_MQTT_PUBLISH;
const topic = import.meta.env.VITE_MQTT_TOPIC;

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

