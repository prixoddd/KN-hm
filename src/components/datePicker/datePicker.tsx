import { Button } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'

type Props = {
  label: string
  onChange: (date: string) => void
  onClose: () => void
}

export function BasicDatePicker({ label, onChange, onClose }: Props) {
  const dateHandler = (data: any) => {
    onChange(data.format('M/D/YYYY'))
  }

  const onClick = () => {
    onClose()
  }

  const value = dayjs(dayjs(label).format('M/D/YYYY'))

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{ display: 'flex' }}>
        <DatePicker
          disableFuture
          format={'M/D/YYYY'}
          onChange={dateHandler}
          slotProps={{ field: { shouldRespectLeadingZeros: true } }}
          sx={{ width: '100%' }}
          value={value}
        />
        <Button onClick={onClick} sx={{ marginLeft: '16px' }}>
          Submit
        </Button>
      </div>
    </LocalizationProvider>
  )
}
