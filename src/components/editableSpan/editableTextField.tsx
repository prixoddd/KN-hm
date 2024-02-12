import React, { ChangeEvent, useState } from 'react'

import { editShipments } from '@/common/shipments-reducer'
import { RootObjectChild } from '@/common/types'
import { useAppDispatch } from '@/store'
import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField'

import s from './editableTextField.module.scss'

type EditableSpanPropsType = {
  array: RootObjectChild
  index: number
  name: string
  value: string
}
export type ForEdit = {
  modifyArray: RootObjectChild
  orderNo: string
}

export const EditableTextField = React.memo(function (props: EditableSpanPropsType) {
  console.log('EditableTextField called')
  const dispatch = useAppDispatch()
  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState(props.value)
  // const [disabled, setDisabled] = useState(true)
  const [modifyArray, setModifyArray] = useState(props.array)

  const activateEditMode = () => {
    setEditMode(true)
  }
  const activateViewMode = () => {
    setEditMode(false)
    // props.onChange(title)
    dispatch(editShipments({ modifyArray: modifyArray, orderNo: props.array.orderNo }))
  }
  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
    setModifyArray(prevState => ({
      ...prevState,
      [props.name]: title,
    }))
  }

  return (
    <div>
      <div key={props.index}>
        <div className={s.childDiv}>
          <Typography variant={'subtitle1'}>{props.name}</Typography>
        </div>
      </div>
      {editMode ? (
        <TextField
          autoFocus
          fullWidth
          onBlur={activateViewMode}
          onChange={changeTitle}
          value={title}
        />
      ) : (
        <span className={s.span} onDoubleClick={activateEditMode}>
          <Typography sx={{ color: '#969595', lineHeight: '23px' }} variant={'body1'}>
            {title}
          </Typography>
        </span>
      )}
    </div>
  )
})
