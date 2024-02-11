import { getObjectAfterDelay, shipmentsApi } from '@/common/api'
import { AppRootStateType } from '@/store'
import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'

export const fetchData = () => (dispatch: Dispatch) => {
  dispatch(setLoader(true))
  shipmentsApi
    .getShipments()
    .then(result => {
      if (result) {
        dispatch(setLoader(false))
        dispatch(setShipments(result.data))
        dispatch(
          setAlert({
            severity: 'success',
            text: { message: 'Data successfully fetched' },
          })
        )
      }
    })
    .catch(e => {
      dispatch(setAlert({ severity: 'error', text: e as { message: string } }))
      dispatch(setLoader(true))
    })
    .then(() => {
      setTimeout(async () => {
        dispatch(
          setAlert({ severity: 'info', text: { message: 'Fetching data from a backup resource' } })
        )
      }, 1000)

      getObjectAfterDelay()
        .then(result => {
          if (result) {
            dispatch(setLoader(false))
            dispatch(setShipments(result))
            dispatch(
              setAlert({
                severity: 'success',
                text: { message: 'Data successfully fetched' },
              })
            )
          }
        })
        .catch(error => {
          // handle error from backup resource fetch
          console.error('Error fetching data from backup resource:', error)
        })
    })
}

// export const fetchData = () => async (dispatch: Dispatch) => {
//   dispatch(setLoader(true))
//   try {
//     const result = await shipmentsApi.getShipments()
//
//     if (result) {
//       dispatch(setLoader(false))
//       dispatch(setShipments(result.data))
//     }
//   } catch (e) {
//
//     dispatch(setAlert({ severity: 'error', text: e as { message: string } }))
//     dispatch(setLoader(true))
//
//
//     dispatch(
//       setAlert({ severity: 'info', text: { message: 'fetching data from a backup resource' } })
//     )
//     const result = await getObjectAfterDelay()
//
//     if (result) {
//       dispatch(setLoader(false))
//       dispatch(setShipments(result))
//     }
//
//     // throw error
//   }
// }

// Define a type for the slice state

type alert = { severity: AlertType; text: { message: string } }
export type SortDirectionT = '' | 'down' | 'up'

interface ShipmentsState {
  alert: alert
  editObj: RootObjectChild
  loader: boolean
  shipments: RootObjectChild[]
  sortDirection: {
    consignee: SortDirectionT
    customer: SortDirectionT
    date: SortDirectionT
    orderNo: SortDirectionT
    status: SortDirectionT
    trackingNo: SortDirectionT
  }
  value: number
}

// Define the initial state using that type
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
    status: '',
    trackingNo: '',
  },
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
    deleteShipment: (state, action) => {
      const index = state.shipments.findIndex(todo => todo.orderNo === action.payload)

      if (index !== -1) {
        state.shipments.splice(index, 1)
      }
    },
    increment: state => {
      state.value += 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
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
  decrement,
  deleteShipment,
  increment,
  incrementByAmount,
  setAlert,
  setArrForEdit,
  setLoader,
  setShipments,
  sortShipments,
} = shipmentsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectShipments = (state: AppRootStateType) => state.shipments
export const selectArrFoeEdit = (state: AppRootStateType) => state.shipments.editObj
export const selectLoader = (state: AppRootStateType) => state.shipments.loader
export const selectAlert = (state: AppRootStateType) => state.shipments.alert
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

export type sortType = 'consignee' | 'customer' | 'date' | 'orderNo' | 'status' | 'trackingNo'
type AlertType = 'error' | 'info' | 'success' | 'warning'
