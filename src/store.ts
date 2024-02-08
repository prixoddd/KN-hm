import { useDispatch, useSelector } from 'react-redux'

import shipmentsReducer from '@/ShipmentsTable/shipments-reducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    shipments: shipmentsReducer,
  },
})

export type AppRootStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<AppRootStateType>()
