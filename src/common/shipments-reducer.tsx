import { RootObjectChild, SortDirectionT, SortType } from '@/common/types'
import { ForEdit } from '@/components/editableSpan/editableTextField'
import { FormValues } from '@/components/newShipmentModal/newShipmentModal'
import { AppRootStateType } from '@/store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type ShipmentsState = {
  editObj: RootObjectChild

  shipments: RootObjectChild[]
  sortDirection: {
    consignee: SortDirectionT
    customer: SortDirectionT
    date: SortDirectionT
    orderNo: SortDirectionT
    sortBy: '' | SortType
    status: SortDirectionT
    trackingNo: SortDirectionT
  }
}

const initialState: ShipmentsState = {
  editObj: {
    consignee: '',
    customer: '',
    date: '',
    orderNo: '',
    status: '',
    trackingNo: '',
  },

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
    addShipment: (state, action: PayloadAction<FormValues>) => {
      const newObj = { ...action.payload, date: action.payload.date.format('M/D/YYYY') }

      state.shipments.unshift(newObj)
    },
    deleteShipment: (state, action) => {
      const index = state.shipments.findIndex(todo => todo.orderNo === action.payload)

      if (index !== -1) {
        state.shipments.splice(index, 1)
      }
    },
    editShipments: (state, action: PayloadAction<ForEdit>) => {
      const findArrayIndex = state.shipments.findIndex(e => e.orderNo === action.payload.orderNo)

      state.shipments[findArrayIndex][action.payload.name as SortType] = action.payload.title
    },
    resetShipments: state => {
      state.shipments = []
    },
    setArrForEdit: (state, action) => {
      state.editObj = { ...action.payload }
    },

    setShipments: (state, action) => {
      state.shipments.push(...action.payload)
    },
    sortShipments: (state, action: PayloadAction<'' | SortType>) => {
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
          state.sortDirection.sortBy = ''
      }
    },
  },
})

export const {
  addShipment,
  deleteShipment,
  editShipments,
  resetShipments,
  setArrForEdit,
  setShipments,
  sortShipments,
} = shipmentsSlice.actions

export const selectShipments = (state: AppRootStateType) => state.shipments
export const selectArrFoeEdit = (state: AppRootStateType) => state.shipments.editObj
export const selectSortDirection = (state: AppRootStateType) => state.shipments.sortDirection
export const selectorSortBy = (state: AppRootStateType) => state.shipments.sortDirection.sortBy
