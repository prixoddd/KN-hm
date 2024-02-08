import { BaseResponseType } from '@/common/types/common.types'
import { AppDispatch, AppRootStateType } from '@/store'
import { createAsyncThunk } from '@reduxjs/toolkit'

/**
Эта функция предназначена для того, чтобы избавиться от дублирования кода по созданию типов в санке
 */
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  dispatch: AppDispatch
  rejectValue: BaseResponseType | null
  state: AppRootStateType
}>()
