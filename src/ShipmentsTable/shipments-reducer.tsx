import { shipmentsApi } from '@/common/api'
import { AppRootStateType } from '@/store'
import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Simulate } from 'react-dom/test-utils'

import error = Simulate.error

export const fetchData = () => async (dispatch: Dispatch) => {
  try {
    const result = await shipmentsApi.getShipments()

    if (result) {
      dispatch(setShipments(result.data))
    }
  } catch (e) {
    console.log(e)
    throw error
  }
}

// Define a type for the slice state

interface ShipmentsState {
  shipments: RootObjectChild[]
  value: number
}

// Define the initial state using that type
const initialState: ShipmentsState = {
  shipments: [
    {
      consignee: 'Nikita psina',
      customer: 'Nuveen Diversified Dividend and Income Fund',
      date: '4/6/2019',
      orderNo: 'of-397185-03612067-7955475',
      status: "'Delivered'",
      trackingNo: 'TP-596673-16019232-9631414',
    },
  ],
  value: 0,
}

export const shipmentsSlice = createSlice({
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  name: 'shipments',
  reducers: {
    decrement: state => {
      state.value -= 1
    },
    increment: state => {
      state.value += 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    setShipments: (state, action) => {
      state.shipments.push(...action.payload)
    },
  },
})

export const { decrement, increment, incrementByAmount, setShipments } = shipmentsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: AppRootStateType) => state.shipments.value
export default shipmentsSlice.reducer

export type RootObject = RootObjectChild[]
export type RootObjectChild = {
  consignee: string
  customer: string
  date: string
  orderNo: string
  status: string
  trackingNo: string
}
