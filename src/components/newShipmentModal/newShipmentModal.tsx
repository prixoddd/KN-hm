import { Controller, useForm } from 'react-hook-form'

import { setAlert } from '@/common/app-reducer'
import { addShipment } from '@/common/shipments-reducer'
import { useAppDispatch } from '@/store'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, InputLabel, Modal, Typography } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs, { type Dayjs } from 'dayjs'
import { z } from 'zod'

import s from './newShipmentsModal.module.scss'

type Props = {
  onClose: () => void
  open: boolean
}

export type FormValues = {
  consignee: string
  customer: string
  date: dayjs.Dayjs
  orderNo: string
  status: string
  trackingNo: string
}

function generateRandomString(beg: string) {
  const getRandomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min

  const randomNumbers = [
    getRandomNumber(100000, 999999),
    getRandomNumber(10000000, 99999999),
    getRandomNumber(1000000, 9999999),
  ]

  return `${beg}-${randomNumbers.join('-')}`
}

const loginSchema = z.object({
  consignee: z.string().min(3).max(50),
  customer: z.string().min(3).max(50),
  date: z.instanceof(dayjs as unknown as typeof Dayjs),
  orderNo: z.string(),
  status: z.string().min(1),
  trackingNo: z.string(),
})

export const NewShipmentModal = ({ onClose, open }: Props) => {
  // const [open, setOpen] = useState(true)
  const dispatch = useAppDispatch()

  const defaultFormValues = {
    consignee: '',
    customer: '',
    date: dayjs(),
    orderNo: generateRandomString('wb'),

    trackingNo: generateRandomString('NC'),
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormValues>({
    defaultValues: defaultFormValues,
    resolver: zodResolver(loginSchema),
  })
  const onSubmit = (data: FormValues) => {
    dispatch(addShipment(data))
    reset()
    onClose()
    dispatch(
      setAlert({
        severity: 'success',
        text: { message: 'New shipment successfully added' },
      })
    )
  }

  return (
    <Modal
      aria-describedby={'modal-modal-description'}
      aria-labelledby={'modal-modal-title'}
      onClose={onClose}
      open={open}
    >
      <Box className={s.modal}>
        <div className={s.title}>
          <Typography component={'h2'} id={'modal-modal-title'} variant={'h6'}>
            ADD NEW SHIPMENT
          </Typography>
          <Typography variant={'subtitle1'}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Please fill every text field with data, except for the "Order No" and "Tracking No"{' '}
            <br /> as they are generated automatically.
          </Typography>
        </div>
        <div className={s.mainDiv}>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <Typography sx={{ marginBottom: '5px' }} variant={'subtitle1'}>
              Customer
            </Typography>
            <Controller
              control={control}
              {...register('customer')}
              render={({ field }) => (
                <TextField
                  {...field}
                  autoFocus
                  error={errors.customer?.message !== undefined}
                  fullWidth
                  label={errors.customer?.message}
                />
              )}
            />
            <Typography sx={{ marginBottom: '5px' }} variant={'subtitle1'}>
              Consignee
            </Typography>
            <Controller
              control={control}
              {...register('consignee')}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={errors.consignee?.message !== undefined}
                  fullWidth
                  label={errors.consignee?.message}
                />
              )}
            />
            <Typography sx={{ marginBottom: '5px' }} variant={'subtitle1'}>
              Order No
            </Typography>
            <TextField
              disabled
              fullWidth
              {...register('orderNo')}
              error={errors.orderNo?.message !== undefined}
              label={errors.orderNo?.message}
            />
            <Typography sx={{ marginBottom: '5px' }} variant={'subtitle1'}>
              Tracking No
            </Typography>
            <TextField
              disabled
              fullWidth
              {...register('trackingNo')}
              error={errors.trackingNo?.message !== undefined}
              label={errors.trackingNo?.message}
            />
            <Typography sx={{ marginBottom: '5px' }} variant={'subtitle1'}>
              Status
            </Typography>

            <Select
              fullWidth
              {...register('status')}
              defaultValue={''}
              error={errors.status?.message !== undefined}
            >
              <MenuItem value={"'Shipped'"}>&quot;Shipped&quot;</MenuItem>
              <MenuItem value={"'In Transit'"}>&quot;In Transit&quot;</MenuItem>
              <MenuItem value={"'Delivered'"}>&quot;Delivered&quot;</MenuItem>
            </Select>
            {errors.status && <InputLabel error>Please select a status</InputLabel>}
            <Typography sx={{ marginBottom: '5px' }} variant={'subtitle1'}>
              Date
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Controller
                control={control}
                name={'date'}
                render={({ field: { onChange, value } }) => (
                  <DatePicker onChange={onChange} value={value} />
                )}
              />
            </LocalizationProvider>
            <Button size={'large'} sx={{ marginTop: '20px' }} type={'submit'} variant={'outlined'}>
              Submit
            </Button>
          </form>
        </div>
      </Box>
    </Modal>
  )
}
