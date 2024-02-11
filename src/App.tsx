import { useEffect } from 'react'

import { fetchData, selectLoader } from '@/components/ShipmentsTable/shipments-reducer'
import { BasicTable } from '@/components/ShipmentsTable/table'
import IntegrationNotistack from '@/components/snackbar/snackbar'
import { useAppDispatch, useAppSelector } from '@/store'
import { LinearProgress } from '@mui/material'

import s from '@/components/ShipmentsTable/table.module.scss'

export function App() {
  const dispatch = useAppDispatch()
  const loader = useAppSelector(selectLoader)
  // const shipments = useAppSelector(state => state.shipments)

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <div className={s.app}>
      <IntegrationNotistack />
      <BasicTable />
      {loader && <LinearProgress />}
      {/*{alert.text.message !== '' && <Alert severity={alert.severity}>{alert.text.message}</Alert>}*/}
    </div>
  )
}
