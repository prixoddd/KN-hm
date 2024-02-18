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
  name: string
  orderNo: string
  title: string
}

export const EditableTextField = React.memo(function ({
  array,
  name,
  value,
}: EditableSpanPropsType) {
  const dispatch = useAppDispatch()

  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState(value)

  const activateEditMode = () => {
    console.log(name)
    if (name !== 'Order No' && name !== 'Tracking No') {
      setEditMode(true)
    }
  }
  const activateViewMode = () => {
    setEditMode(false)
    dispatch(editShipments({ name: name, orderNo: array.orderNo, title: title }))
  }

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const changeDateAndStatusTitle = (date: string) => {
    setTitle(date)
  }

  return (
    <div>
      <div>
        <div className={s.childDiv}>
          <Typography variant={'subtitle1'}>{name}</Typography>
        </div>
      </div>
      {editMode && name !== 'Delivery Date' && name !== 'Status' && (
        <TextField
          autoFocus
          fullWidth
          onBlur={activateViewMode}
          onChange={changeTitle}
          value={title}
        />
      )}
      {editMode && name === 'Delivery Date' && (
        <BasicDatePicker
          label={title}
          onChange={changeDateAndStatusTitle}
          onClose={activateViewMode}
        />
      )}
      {editMode && name === 'Status' && (
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
