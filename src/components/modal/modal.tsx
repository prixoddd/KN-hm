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
              <EditableTextField
                array={editArr}
                heading={'Order No'}
                name={'orderNo'}
                value={editArr['orderNo']}
              />
              <EditableTextField
                array={editArr}
                heading={'Delivery Date'}
                name={'date'}
                value={editArr['date']}
              />
              <EditableTextField
                array={editArr}
                heading={'Customer'}
                name={'customer'}
                value={editArr['customer']}
              />
              <EditableTextField
                array={editArr}
                heading={'Tracking No'}
                name={'trackingNo'}
                value={editArr['trackingNo']}
              />
              <EditableTextField
                array={editArr}
                heading={'Status'}
                name={'status'}
                value={editArr['status']}
              />
              <EditableTextField
                array={editArr}
                heading={'Consignee'}
                name={'consignee'}
                value={editArr['consignee']}
              />
            </>
          }
        </div>
      </Box>
    </Modal>
  )
}
