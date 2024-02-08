import { RootObject } from '@/ShipmentsTable/shipments-reducer'
import axios from 'axios'

const API_URL = 'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0'

export const shipmentsApi = {
  getShipments() {
    return axios.get<RootObject>(API_URL)
  },
}
