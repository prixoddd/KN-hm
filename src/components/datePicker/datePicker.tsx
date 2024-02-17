import { Button } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import dayjs from 'dayjs'

// import 'dayjs/locale/en'

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
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          format={'M/D/YYYY'}
          onChange={dateHandler}
          slotProps={{ field: { shouldRespectLeadingZeros: true } }}
          value={value}
        />
        <Button onClick={onClick} size={'small'} variant={'outlined'}>
          Submit
        </Button>
      </DemoContainer>
    </LocalizationProvider>
  )
}
