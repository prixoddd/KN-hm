import { useEffect } from 'react'

import { resetAlert } from '@/common/app-reducer'
import { useAppDispatch, useAppSelector } from '@/store'
import { SnackbarProvider, useSnackbar } from 'notistack'

const MyApp = () => {
  // const alert = { severity: 'info', text: { message: '' } }

  const alert = useAppSelector(state => state.app.alert)
  //
  const { enqueueSnackbar } = useSnackbar()
  // const [lastAllert, setLastAllert] = useState({ severity: 'info', text: { message: '' } })

  // const handleClickVariant = useCallback(() => {
  //   alertMessage !== '' && enqueueSnackbar(alertMessage, { variant: alertVariant })
  // }, [alertMessage])

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
    debugger
  }

  return (
    <SnackbarProvider maxSnack={3} onClose={handleClose}>
      <MyApp />
    </SnackbarProvider>
  )
}
