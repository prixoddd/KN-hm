import { useEffect } from 'react'

import { fetchData } from '@/common/api'
import { selectLoader } from '@/common/app-reducer'
import { resetShipments, sortShipments } from '@/common/shipments-reducer'
import { IntegrationNotistack } from '@/components/snackbar/snackbar'
import { BasicTable } from '@/components/table/table'
import { useAppDispatch, useAppSelector } from '@/store'
import { LinearProgress } from '@mui/material'

import s from '@/components/table/table.module.scss'

type Props = { url: string }

export function App({ url }: Props) {
  const dispatch = useAppDispatch()

  const loader = useAppSelector(selectLoader)

  useEffect(() => {
    dispatch(resetShipments())

    dispatch(fetchData(url))
    dispatch(sortShipments(''))
  }, [])

  return (
    <div className={s.app}>
      <IntegrationNotistack />
      <BasicTable />
      {loader && <LinearProgress />}
    </div>
  )
}
