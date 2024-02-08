import { useEffect } from 'react'

import { fetchData } from '@/ShipmentsTable/shipments-reducer'
import { BasicTable } from '@/ShipmentsTable/table'
import { useAppDispatch } from '@/store'

import s from '@/ShipmentsTable/table.module.scss'

export function App() {
  const dispatch = useAppDispatch()

  // const shipments = useAppSelector(state => state.shipments)

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <div className={s.app}>
      <BasicTable />
    </div>
  )
}
