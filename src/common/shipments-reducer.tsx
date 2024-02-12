import { RootObjectChild, SortDirectionT, alert, sortType } from '@/common/types'
import { ForEdit } from '@/components/editableSpan/editableTextField'
import { AppRootStateType } from '@/store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type ShipmentsState = {
  alert: alert
  editObj: RootObjectChild
  loader: boolean
  shipments: RootObjectChild[]
  sortDirection: {
    consignee: SortDirectionT
    customer: SortDirectionT
    date: SortDirectionT
    orderNo: SortDirectionT
    sortBy: '' | sortType
    status: SortDirectionT
    trackingNo: SortDirectionT
  }
}

const initialState: ShipmentsState = {
  alert: { severity: 'info', text: { message: '' } },
  editObj: {
    consignee: '',
    customer: '',
    date: '',
    orderNo: '',
    status: '',
    trackingNo: '',
  },
  loader: false,
  shipments: [],
  sortDirection: {
    consignee: '',
    customer: '',
    date: '',
    orderNo: '',
    sortBy: '',
    status: '',
    trackingNo: '',
  },
}

export const shipmentsSlice = createSlice({
  initialState,
  name: 'shipments',
  reducers: {
    deleteShipment: (state, action) => {
      const index = state.shipments.findIndex(todo => todo.orderNo === action.payload)

      if (index !== -1) {
        state.shipments.splice(index, 1)
      }
    },
    editShipments: (state, action: PayloadAction<ForEdit>) => {
      const findArrayIndex = state.shipments.findIndex(e => e.orderNo === action.payload.orderNo)

      state.shipments[findArrayIndex] = action.payload.modifyArray
    },
    setAlert: (state, action: PayloadAction<alert>) => {
      state.alert = { ...action.payload }
    },
    setArrForEdit: (state, action) => {
      state.editObj = { ...action.payload }
    },
    setLoader: (state, action) => {
      state.loader = action.payload
    },
    setShipments: (state, action) => {
      state.shipments.push(...action.payload)
    },
    sortShipments: (state, action: PayloadAction<sortType>) => {
      switch (action.payload) {
        case 'consignee':
          state.sortDirection.sortBy = action.payload
          if (state.sortDirection.consignee != 'down') {
            state.shipments.sort((a, b) =>
              a.consignee.toLowerCase() > b.consignee.toLowerCase() ? 1 : -1
            )
            state.sortDirection.consignee = 'down'
          } else {
            state.shipments.sort((a, b) =>
              a.consignee.toLowerCase() > b.consignee.toLowerCase() ? -1 : 1
            )
            state.sortDirection.consignee = 'up'
          }

          break
        case 'customer':
          state.sortDirection.sortBy = action.payload
          if (state.sortDirection.customer != 'down') {
            state.shipments.sort((a, b) =>
              a.customer.toLowerCase() > b.customer.toLowerCase() ? 1 : -1
            )
            state.sortDirection.customer = 'down'
          } else {
            state.shipments.sort((a, b) =>
              a.customer.toLowerCase() > b.customer.toLowerCase() ? -1 : 1
            )
            state.sortDirection.customer = 'up'
          }
          break
        case 'date':
          state.sortDirection.sortBy = action.payload
          if (state.sortDirection.date !== 'down') {
            state.shipments.sort((a, b) => {
              const dateA = new Date(a.date)
              const dateB = new Date(b.date)

              return dateA.getTime() - dateB.getTime()
            })
            state.sortDirection.date = 'down'
          } else {
            state.shipments.sort((a, b) => {
              const dateA = new Date(a.date)
              const dateB = new Date(b.date)

              return dateB.getTime() - dateA.getTime()
            })
            state.sortDirection.date = 'up'
          }
          break
        case 'status':
          state.sortDirection.sortBy = action.payload
          if (state.sortDirection.status != 'down') {
            state.shipments.sort((a, b) =>
              a.status.toLowerCase() > b.status.toLowerCase() ? 1 : -1
            )
            state.sortDirection.status = 'down'
          } else {
            state.shipments.sort((a, b) =>
              a.status.toLowerCase() > b.status.toLowerCase() ? -1 : 1
            )
            state.sortDirection.status = 'up'
          }
          break
        case 'trackingNo':
          state.sortDirection.sortBy = action.payload
          if (state.sortDirection.trackingNo != 'down') {
            state.shipments.sort((a, b) =>
              a.trackingNo.toLowerCase() > b.trackingNo.toLowerCase() ? 1 : -1
            )
            state.sortDirection.trackingNo = 'down'
          } else {
            state.shipments.sort((a, b) => (a.trackingNo > b.trackingNo ? -1 : 1))
            state.sortDirection.trackingNo = 'up'
          }
          break
        default:
          break
      }
    },
  },
})

export const {
  deleteShipment,
  editShipments,
  setAlert,
  setArrForEdit,
  setLoader,
  setShipments,
  sortShipments,
} = shipmentsSlice.actions

export const selectShipments = (state: AppRootStateType) => state.shipments
export const selectArrFoeEdit = (state: AppRootStateType) => state.shipments.editObj
export const selectLoader = (state: AppRootStateType) => state.shipments.loader
export const selectSortDirection = (state: AppRootStateType) => state.shipments.sortDirection
export const selectorSortBy = (state: AppRootStateType) => state.shipments.sortDirection.sortBy

export default shipmentsSlice.reducer
