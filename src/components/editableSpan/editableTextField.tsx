import React, { ChangeEvent, useState } from 'react'

import { editShipments } from '@/common/shipments-reducer'
import { RootObjectChild } from '@/common/types'
import { BasicDatePicker } from '@/components/datePicker/datePicker'
import { BasicSelect } from '@/components/select/select'
import { useAppDispatch } from '@/store'
import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField'

import s from './editableTextField.module.scss'

type EditableSpanPropsType = {
  array: RootObjectChild
  name: string
  value: string
}
export type ForEdit = {
  modifyArray: RootObjectChild
  orderNo: string
}

export const EditableTextField = React.memo(function (props: EditableSpanPropsType) {
  const dispatch = useAppDispatch()
  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState(props.value)
  const [modifyArray, setModifyArray] = useState(props.array)

  const activateEditMode = () => {
    if (props.name !== 'orderNo' && props.name !== 'trackingNo') {
      setEditMode(true)
    }
  }
  const activateViewMode = () => {
    setEditMode(false)
    dispatch(editShipments({ modifyArray: modifyArray, orderNo: props.array.orderNo }))
  }

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
    setModifyArray(prevState => ({
      ...prevState,
      [props.name]: title,
    }))
  }

  const changeDateAndStatusTitle = (date: string) => {
    setTitle(date)
    setModifyArray(prevState => ({
      ...prevState,
      [props.name]: date,
    }))
  }

  return (
    <div>
      <div>
        <div className={s.childDiv}>
          <Typography variant={'subtitle1'}>{props.name}</Typography>
        </div>
      </div>
      {editMode && props.name !== 'date' && props.name !== 'status' && (
        <TextField
          autoFocus
          fullWidth
          onBlur={activateViewMode}
          onChange={changeTitle}
          value={title}
        />
      )}
      {editMode && props.name === 'date' && (
        <BasicDatePicker
          label={title}
          onChange={changeDateAndStatusTitle}
          onClose={activateViewMode}
        />
      )}
      {editMode && props.name === 'status' && (
        <BasicSelect onBlur={activateViewMode} onChange={changeDateAndStatusTitle} value={title} />
      )}
      {!editMode && (
        <span className={s.span} onDoubleClick={activateEditMode}>
          <Typography sx={{ color: '#969595', lineHeight: '23px' }} variant={'body1'}>
            {title}
          </Typography>
        </span>
      )}
    </div>
  )
})
