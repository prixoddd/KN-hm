import { selectArrFoeEdit } from '@/common/shipments-reducer'
import { sortType } from '@/common/types'
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
          <Typography sx={{ marginLeft: '50px' }} variant={'subtitle1'}>
            You can edit every text field
          </Typography>
        </div>
        <div className={s.mainDiv}>
          {Object.keys(editArr).map((key, index) => (
            <EditableTextField
              array={editArr}
              index={index}
              key={key}
              name={key}
              value={editArr[key as sortType]}
            />
          ))}
        </div>
      </Box>
    </Modal>
  )
}
