import React from 'react'

import { resetAlert } from '@/common/app-reducer'
import { useAppDispatch, useAppSelector } from '@/store'
import { AlertProps, Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant={'filled'} {...props} />
})

export function ErrorSnackbar() {
  const alert = useAppSelector(state => state.app.alert)
  const dispatch = useAppDispatch()
  // const error = useSelector(selectAppError)
  // const { setAppError } = useActions(appActions)

  const handleClose = () => {
    dispatch(resetAlert())
    debugger
  }

  const isOpen = alert !== null

  return (
    <Snackbar autoHideDuration={6000} onClose={handleClose} open={isOpen}>
      <Alert severity={'error'}>{alert && alert.text.message}</Alert>
    </Snackbar>
  )
}
