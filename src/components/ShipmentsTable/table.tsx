import * as React from 'react'

import { BasicModal } from '@/components/Modal/Modal'
import {
  RootObjectChild,
  SortDirectionT,
  deleteShipment,
  selectShipments,
  setArrForEdit,
  sortShipments,
  sortType,
} from '@/components/ShipmentsTable/shipments-reducer'
import { useAppDispatch, useAppSelector } from '@/store'
import { Button } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import s from './table.module.scss'

export const BasicTable = () => {
  const dispatch = useAppDispatch()
  const [open, setOpen] = React.useState(false)

  const shipments = useAppSelector(selectShipments)
  const sortDirection = useAppSelector(state => state.shipments.sortDirection)

  const onClickHandler = (arr: RootObjectChild, a: boolean) => {
    setOpen(a)
    dispatch(setArrForEdit(arr))
  }

  const filterHandler = (sortBy: sortType) => {
    dispatch(sortShipments(sortBy))
  }

  const renderSortDirection = (direction: SortDirectionT) => {
    switch (direction) {
      case 'down':
        return (
          <>
            <span className={s.arrowRed}>↓</span> <span className={s.arrowRed}>↓</span>
          </>
        )
      case 'up':
        return (
          <>
            <span className={s.arrowGreen}>↑</span> <span className={s.arrowGreen}>↑</span>
          </>
        )
      default:
        return (
          <>
            <span className={s.arrowRed}>↑</span> <span className={s.arrowGreen}>↓</span>
          </>
        )
    }
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
                DELIVERYDATE{' '}
                <button onClick={() => filterHandler('date')}>
                  {renderSortDirection(sortDirection.date)}
                </button>
              </TableCell>
              <TableCell align={'left'}>
                CUSTOMER{' '}
                <button onClick={() => filterHandler('customer')}>
                  {renderSortDirection(sortDirection.customer)}
                </button>
              </TableCell>
              <TableCell align={'left'}>
                TRANCKINGNO{' '}
                <button onClick={() => filterHandler('trackingNo')}>
                  {renderSortDirection(sortDirection.trackingNo)}
                </button>
              </TableCell>
              <TableCell align={'left'}>
                STATUS{' '}
                <button onClick={() => filterHandler('status')}>
                  {renderSortDirection(sortDirection.status)}
                </button>
              </TableCell>
              <TableCell align={'left'}>
                CONSIGNEE{' '}
                <button onClick={() => filterHandler('consignee')}>
                  {renderSortDirection(sortDirection.consignee)}
                </button>
              </TableCell>
              <TableCell align={'left'}></TableCell>
              <TableCell align={'left'}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shipments.shipments.map(arr => (
              <>
                <TableRow
                  key={arr.orderNo}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
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
