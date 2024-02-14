import { useNavigate } from 'react-router-dom'

import { AxiosSvg } from '@/assets/icons/axiosSvg'
import { MaterialUiSvg } from '@/assets/icons/materialUiSvg'
import { ReactSvg } from '@/assets/icons/reactSvg'
import { ReduxSvg } from '@/assets/icons/reduxSvg'
import { SassSvg } from '@/assets/icons/sassSvg'
import { TypescriptSvg } from '@/assets/icons/typescriptSvg'
import { selectToggle, setEntranceToggle } from '@/common/app-reducer'
import { useAppDispatch, useAppSelector } from '@/store'
import { Button, Paper, Switch, Typography } from '@mui/material'

import s from './entrancePage.module.scss'

export const EntrancePage = () => {
  const checked = useAppSelector(selectToggle)
  const dispatch = useAppDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEntranceToggle(event.target.checked))
  }

  const navigate = useNavigate()

  const handleClick = () => {
    checked ? navigate('/appWithError') : navigate('/app')
  }

  return (
    <div className={s.container}>
      <Paper className={s.greetings} elevation={3}>
        <Typography className={s.text} sx={{ marginTop: '20px' }} variant={'h4'}>
          Welcome to my <br /> "Shipments CRUD page"
        </Typography>
        <div className={s.icons}>
          <TypescriptSvg />
          <ReactSvg />
          <ReduxSvg />
          <MaterialUiSvg />
          <AxiosSvg />
          <SassSvg />
        </div>
        <div className={s.switchAndText}>
          <Typography sx={{ color: '#444;', marginRight: '10px' }} variant={'body1'}>
            Simulate the error in data request
          </Typography>
          <Switch
            checked={checked}
            inputProps={{ 'aria-label': 'controlled' }}
            onChange={handleChange}
          />
        </div>
        <div className={s.button}>
          <Button onClick={handleClick} variant={'outlined'}>
            Proceed to the app
          </Button>
        </div>
      </Paper>

      {/*<div className={s.greetings}></div>*/}
    </div>
  )
}
