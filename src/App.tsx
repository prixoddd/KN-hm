import { useEffect } from 'react'

import { fetchData } from '@/common/api'
import { selectLoader } from '@/common/shipments-reducer'
import IntegrationNotistack from '@/components/snackbar/snackbar'
import { BasicTable } from '@/components/table/table'
import { useAppDispatch, useAppSelector } from '@/store'
import { LinearProgress } from '@mui/material'

import s from '@/components/table/table.module.scss'

export function App() {
  const dispatch = useAppDispatch()
  const loader = useAppSelector(selectLoader)

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <div className={s.app}>
      <IntegrationNotistack />
      <BasicTable />
      {loader && <LinearProgress />}
    </div>
  )
}
