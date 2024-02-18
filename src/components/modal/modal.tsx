import { selectArrFoeEdit } from '@/common/shipments-reducer'
import { EditableTextField } from '@/components/editableSpan/editableTextField'
import { useAppSelector } from '@/store'
import { Box, Modal, Typography } from '@mui/material'

import s from './modal.module.scss'

type PropsType = {
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
        <div className={s.title}>
          <Typography component={'h2'} id={'modal-modal-title'} variant={'h6'}>
            SHIPMENT DETAILS
          </Typography>
          <Typography variant={'subtitle1'}>
            You can edit each text field by double-clicking on it, <br /> except for the "Order No"
            and "Tracking No".
          </Typography>
        </div>
        <div className={s.mainDiv}>
          {
            <>
              <EditableTextField array={editArr} name={'Order No'} value={editArr['orderNo']} />
              <EditableTextField array={editArr} name={'Delivery Date'} value={editArr['date']} />
              <EditableTextField array={editArr} name={'Customer'} value={editArr['customer']} />
              <EditableTextField
                array={editArr}
                name={'Tracking No'}
                value={editArr['trackingNo']}
              />
              <EditableTextField array={editArr} name={'Status'} value={editArr['status']} />
              <EditableTextField array={editArr} name={'Consignee'} value={editArr['consignee']} />
            </>
          }
        </div>
      </Box>
    </Modal>
  )
}
