import { useDispatch, useSelector } from 'react-redux'

import { appSlice } from '@/common/app-reducer'
import { shipmentsSlice } from '@/common/shipments-reducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    shipments: shipmentsSlice.reducer,
  },
})

export type AppRootStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<AppRootStateType>()
