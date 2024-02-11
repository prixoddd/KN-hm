import { useCallback, useEffect } from 'react'

import { useAppSelector } from '@/store'
import { SnackbarProvider, useSnackbar } from 'notistack'

function MyApp() {
  const alertMessage = useAppSelector(state => state.shipments.alert.text.message)
  const alertVariant = useAppSelector(state => state.shipments.alert.severity)
  const { enqueueSnackbar } = useSnackbar()

  const handleClickVariant = useCallback(() => {
    alertMessage !== '' && enqueueSnackbar(alertMessage, { variant: alertVariant })
  }, [enqueueSnackbar, alertMessage, alertVariant])

  useEffect(() => {
    handleClickVariant()
  }, [alertMessage, alertVariant])

  return <>{/*<Button onClick={handleClickVariant}>Show success snackbar</Button>*/}</>
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  )
}
