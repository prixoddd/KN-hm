import { selectShipments } from '@/ShipmentsTable/shipments-reducer'
import { useAppSelector } from '@/store'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import s from './table.module.scss'

// function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
//   return { calories, carbs, fat, name, protein }
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ]

export const BasicTable = () => {
  const shipments = useAppSelector(selectShipments)

  return (
    <TableContainer component={Paper}>
      <Table aria-label={'simple table'} sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow className={s.mainRow}>
            <TableCell align={'left'}>ORDERNO</TableCell>
            <TableCell align={'left'}>DELIVERYDATE</TableCell>
            <TableCell align={'left'}>CUSTOMER</TableCell>
            <TableCell align={'left'}>TRANCKINGNO</TableCell>
            <TableCell align={'left'}>STATUS</TableCell>
            <TableCell align={'left'}>CONSIGNEE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shipments.shipments.map(arr => (
            <TableRow key={arr.orderNo} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align={'left'}>{arr.orderNo}</TableCell>
              <TableCell align={'left'}>{arr.date}</TableCell>
              <TableCell align={'left'}>{arr.customer}</TableCell>
              <TableCell align={'left'}>{arr.trackingNo}</TableCell>
              <TableCell align={'left'}>{arr.status}</TableCell>
              <TableCell align={'left'}>{arr.consignee}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
