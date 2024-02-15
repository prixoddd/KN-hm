import { Button } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import * as dayjs from 'dayjs'

import 'dayjs/locale/en'

type Props = {
  label: string
  onChange: (date: string) => void
  onClose: () => void
}

export function BasicDatePicker({ label, onChange, onClose }: Props) {
  const dateHandler = (data: any) => {
    onChange(data.format('MM/DD/YYYY'))
  }

  const onClick = () => {
    onClose()
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker onChange={dateHandler} value={dayjs(label)} />
        <Button onClick={onClick} size={'small'} variant={'outlined'}>
          Submit
        </Button>
      </DemoContainer>
    </LocalizationProvider>
  )
}