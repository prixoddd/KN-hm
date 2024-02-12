import { useEffect } from 'react'

import { fetchData } from '@/common/api'
import { resetShipments, selectLoader, setAlert } from '@/common/shipments-reducer'
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
  }, [])

  return (
    <div className={s.app}>
      <BasicTable />
      {loader && <LinearProgress />}
    </div>
  )
}
