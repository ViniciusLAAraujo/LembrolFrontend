import { LatLngTuple } from "leaflet"
import toast from "react-hot-toast"

type GeolocationCoords = {
    latitude: number
    longitude: number
  }
  
  type Position = {
    coords: GeolocationCoords
    timestamp: number
  }
  
  const positionMock: LatLngTuple = [0, 0]
  
  export const handleGeolocation = async (): Promise<LatLngTuple | undefined> => {
    if (navigator.geolocation) {
      try {
        const response = await new Promise<Position>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject)
        })
        return [response.coords.latitude, response.coords.longitude]
      } catch (error: any) {
        toast.error(`Error getting location: 
                    ${error.message}`)
        return positionMock
      }
    } else {
      toast.error('Geolocation is not supported by this browser.')
      return positionMock
    }
  }
  