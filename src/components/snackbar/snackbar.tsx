import { useEffect } from 'react'

import { resetAlert } from '@/common/app-reducer'
import { useAppDispatch, useAppSelector } from '@/store'
import { SnackbarProvider, useSnackbar } from 'notistack'

const MyApp = () => {
  const alert = useAppSelector(state => state.app.alert)

  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    // handleClickVariant()
    alert && enqueueSnackbar(alert.text.message, { variant: alert.severity })
  }, [alert])

  return <></>
}

export const IntegrationNotistack = () => {
  const dispatch = useAppDispatch()
  const handleClose = () => {
    dispatch(resetAlert())
  }

  return (
    <SnackbarProvider disableWindowBlurListener maxSnack={3} onClose={handleClose}>
      <MyApp />
    </SnackbarProvider>
  )
}
