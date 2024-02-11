import { selectArrFoeEdit } from '@/components/ShipmentsTable/shipments-reducer'
import { useAppSelector } from '@/store'
import { Box, Modal, TextField, Typography } from '@mui/material'

import s from './modal.module.scss'

type PropsType = {
  // data: RootObjectChild
  onClose: () => void
  open: boolean
}

export const BasicModal = (props: PropsType) => {
  const editArr = useAppSelector(selectArrFoeEdit)

  return (
    <Modal
      aria-describedby={'modal-modal-description'}
      aria-labelledby={'modal-modal-title'}
      onClose={props.onClose}
      open={props.open}
    >
      <Box className={s.modal}>
        <Typography component={'h2'} id={'modal-modal-title'} variant={'h6'}>
          SHIPMENT DETAILS
        </Typography>
        <div className={s.mainDiv}>
          <div className={s.childDiv}>
            <Typography variant={'subtitle1'}>orderNo</Typography>
            <TextField defaultValue={editArr.orderNo} disabled fullWidth />
          </div>

          <div className={s.childDiv}>
            <Typography variant={'subtitle1'}>date</Typography>
            <TextField defaultValue={editArr.date} disabled fullWidth />
          </div>
        </div>
        <div className={s.mainDiv}>
          <div className={s.childDiv}>
            <Typography variant={'subtitle1'}>customer</Typography>
            <TextField defaultValue={editArr.customer} disabled fullWidth />
          </div>

          <div className={s.childDiv}>
            <Typography variant={'subtitle1'}>trackingNo</Typography>
            <TextField defaultValue={editArr.trackingNo} disabled fullWidth />
          </div>
        </div>
        <div className={s.mainDiv}>
          <div className={s.childDiv}>
            <Typography variant={'subtitle1'}>consignee</Typography>
            <TextField defaultValue={editArr.consignee} disabled fullWidth />
          </div>

          <div className={s.childDiv}>
            <Typography variant={'subtitle1'}>status</Typography>
            <TextField defaultValue={editArr.status} disabled fullWidth />
          </div>
        </div>
      </Box>
    </Modal>
  )
}
