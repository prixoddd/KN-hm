import { useState } from 'react'

import { alert } from '@/common/types'
import { SnackbarProvider, useSnackbar } from 'notistack'

type Props = {
  alert: alert
}
function MyApp({ alert }: Props) {
  // const alertVariant = useAppSelector(state => state.shipments.alert.severity)
  const { enqueueSnackbar } = useSnackbar()
  const [lastAllert, setLastAllert] = useState({ severity: 'info', text: { message: '' } })

  // const handleClickVariant = useCallback(() => {
  //   alertMessage !== '' && enqueueSnackbar(alertMessage, { variant: alertVariant })
  // }, [alertMessage])

  // useEffect(() => {
  //   // debugger
  //   // handleClickVariant()
  //
  // }, [alert])
  debugger

  alert.text.message !== '' && enqueueSnackbar(alert.text.message, { variant: alert.severity })
  setLastAllert(alert)

  return <></>
}

export const IntegrationNotistack = ({ alert }: Props) => {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp alert={alert} />
    </SnackbarProvider>
  )
}
