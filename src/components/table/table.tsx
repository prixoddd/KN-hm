import * as React from 'react'

import { deleteShipment, selectShipments, setArrForEdit } from '@/common/shipments-reducer'
import { RootObjectChild } from '@/common/types'
import { BasicModal } from '@/components/modal/modal'
import SortButton from '@/components/sortButton/sortButton'
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

  const shipments = useAppSelector(selectShipments)

  const onClickHandler = (arr: RootObjectChild, a: boolean) => {
    setOpen(a)
    dispatch(setArrForEdit(arr))
  }

  return (
    <>
      <BasicModal onClose={() => setOpen(false)} open={open} />
      <TableContainer component={Paper}>
        <Table aria-label={'simple table'} sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow className={s.mainRow}>
              <TableCell align={'left'}>ORDERNO</TableCell>

              <TableCell align={'left'}>
                DELIVERYDATE <SortButton title={'date'} />
              </TableCell>
              <TableCell align={'left'}>
                CUSTOMER <SortButton title={'customer'} />
              </TableCell>
              <TableCell align={'left'}>
                TRANCKINGNO <SortButton title={'trackingNo'} />
              </TableCell>
              <TableCell align={'left'}>
                STATUS <SortButton title={'status'} />
              </TableCell>
              <TableCell align={'left'}>
                CONSIGNEE <SortButton title={'consignee'} />
              </TableCell>
              <TableCell align={'left'}></TableCell>
              <TableCell align={'left'}></TableCell>
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
                    <Button onClick={() => onClickHandler(arr, true)} size={'small'}>
                      Info
                    </Button>
                  </TableCell>
                  <TableCell align={'left'}>
                    <Button
                      color={'error'}
                      onClick={() => dispatch(deleteShipment(arr.orderNo))}
                      size={'small'}
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
