export type alert = { severity: AlertType; text: { message: string } }
export type SortDirectionT = '' | 'down' | 'up'

export type RootObject = RootObjectChild[]
export type RootObjectChild = {
  consignee: string
  customer: string
  date: string
  orderNo: string
  status: string
  trackingNo: string
}

export type SortType = 'consignee' | 'customer' | 'date' | 'orderNo' | 'status' | 'trackingNo'
export type AlertType = 'error' | 'info' | 'success' | 'warning'
