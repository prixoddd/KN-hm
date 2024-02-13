import { alert } from '@/common/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type initialStateType = {
  alert: alert | null
}

const initialState: initialStateType = {
  alert: null,
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
  },
})

export const { resetAlert, setAlert } = appSlice.actions
