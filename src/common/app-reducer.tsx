import { alert } from '@/common/types'
import { AppRootStateType } from '@/store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type initialStateType = {
  alert: alert | null
  loader: boolean
  toggle: boolean
}

const initialState: initialStateType = {
  alert: null,
  loader: false,
  toggle: false,
}

export const appSlice = createSlice({
  initialState,
  name: 'app',
  reducers: {
    resetAlert: state => {
      state.alert = null
    },
    setAlert: (state, action: PayloadAction<alert>) => {
      state.alert = { ...action.payload }
    },
    setEntranceToggle: (state, action) => {
      state.toggle = action.payload
    },
    setLoader: (state, action) => {
      state.loader = action.payload
    },
  },
})

export const { resetAlert, setAlert, setEntranceToggle, setLoader } = appSlice.actions

export const selectLoader = (state: AppRootStateType) => state.app.loader
export const selectToggle = (state: AppRootStateType) => state.app.toggle
