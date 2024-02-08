import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { calories, carbs, fat, name, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

export const BasicTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label={'simple table'} sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>ORDERNO</TableCell>
            <TableCell align={'right'}>DELIVERYDATE</TableCell>
            <TableCell align={'right'}>CUSTOMER</TableCell>
            <TableCell align={'right'}>TRANCKINGNO</TableCell>
            <TableCell align={'right'}>STATUS</TableCell>
            <TableCell align={'right'}>CONSIGNEE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component={'th'} scope={'row'}>
                {row.name}
              </TableCell>
              <TableCell align={'right'}>{row.calories}</TableCell>
              <TableCell align={'right'}>{row.fat}</TableCell>
              <TableCell align={'right'}>{row.carbs}</TableCell>
              <TableCell align={'right'}>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
