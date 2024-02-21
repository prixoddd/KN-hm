import * as React from 'react'
import { useState } from 'react'

import { deleteShipment, selectShipments, setArrForEdit } from '@/common/shipments-reducer'
import { RootObjectChild } from '@/common/types'
import { BasicModal } from '@/components/modal/modal'
import { NewShipmentModal } from '@/components/newShipmentModal/newShipmentModal'
import { SortButton } from '@/components/sortButton/sortButton'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

import s from './table.module.scss'

export const BasicTable = () => {
  const dispatch = useAppDispatch()
  const [open, setOpen] = React.useState(false)
  const [newOpen, setNewOpen] = useState(false)

  const shipments = useAppSelector(selectShipments)

  const onClickHandler = (arr: RootObjectChild, a: boolean) => {
    setOpen(a)
    dispatch(setArrForEdit(arr))
  }

  return (
    <>
      <NewShipmentModal onClose={() => setNewOpen(false)} open={newOpen} />
      <BasicModal onClose={() => setOpen(false)} open={open} />
      <div className={s.addButton}></div>

      <TableContainer component={Paper}>
        <Table aria-label={'simple table'}>
          <TableHead>
            <TableRow className={s.mainRow}>
              <TableCell align={'left'}>ORDER NO</TableCell>

              <TableCell align={'left'}>
                <div className={s.tableCellDiv}>
                  DELIVERY DATE <SortButton title={'date'} />
                </div>
              </TableCell>
              <TableCell align={'left'}>
                <div className={s.tableCellDiv}>
                  CUSTOMER <SortButton title={'customer'} />
                </div>
              </TableCell>
              <TableCell align={'left'}>
                <div className={s.tableCellDiv}>
                  TRACKING NO <SortButton title={'trackingNo'} />
                </div>
              </TableCell>
              <TableCell align={'left'}>
                <div className={s.tableCellDiv}>
                  STATUS <SortButton title={'status'} />
                </div>
              </TableCell>
              <TableCell align={'left'}>
                <div className={s.tableCellDiv}>
                  CONSIGNEE <SortButton title={'consignee'} />
                </div>
              </TableCell>
              <TableCell align={'left'}></TableCell>
              <TableCell align={'left'}>
                <Button
                  onClick={() => setNewOpen(true)}
                  size={'small'}
                  sx={{ position: 'absolute', right: '22px', top: '12px' }}
                  variant={'contained'}
                >
                  Add New Shipment
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shipments.shipments.map((arr, key) => (
              <>
                <TableRow key={key} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align={'left'}>{arr.orderNo}</TableCell>
                  <TableCell align={'left'}>{arr.date}</TableCell>
                  <TableCell align={'left'}>{arr.customer}</TableCell>
                  <TableCell align={'left'}>{arr.trackingNo}</TableCell>
                  <TableCell align={'left'}>{arr.status}</TableCell>
                  <TableCell align={'left'}>{arr.consignee}</TableCell>
                  <TableCell align={'left'}>
                    <Button
                      onClick={() => onClickHandler(arr, true)}
                      size={'small'}
                      variant={'outlined'}
                    >
                      Info
                    </Button>
                  </TableCell>
                  <TableCell align={'left'}>
                    <Button
                      color={'error'}
                      onClick={() => dispatch(deleteShipment(arr.orderNo))}
                      size={'small'}
                      variant={'outlined'}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
