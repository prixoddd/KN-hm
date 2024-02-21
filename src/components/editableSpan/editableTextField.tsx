import React, { useState } from 'react'

import { editShipments } from '@/common/shipments-reducer'
import { RootObjectChild } from '@/common/types'
import { BasicDatePicker } from '@/components/datePicker/datePicker'
import { BasicSelect } from '@/components/select/select'
import TextFieldValidation from '@/components/textFieldValidation/textFieldValidation'
import { useAppDispatch } from '@/store'
import { Button, Typography } from '@mui/material'

import s from './editableTextField.module.scss'

type EditableSpanPropsType = {
  array: RootObjectChild
  heading: string
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
  heading,
  name,
  value,
}: EditableSpanPropsType) {
  const dispatch = useAppDispatch()

  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState(value)

  const activateEditMode = () => {
    if (name !== 'orderNo' && name !== 'trackingNo') {
      setEditMode(true)
    }
  }
  const activateViewMode = () => {
    setEditMode(false)
    dispatch(editShipments({ name: name, orderNo: array.orderNo, title: title }))
  }

  const activateViewMode2 = (data: string) => {
    setTitle(data)
    setEditMode(false)
    dispatch(editShipments({ name: name, orderNo: array.orderNo, title: data }))
  }

  const changeDateAndStatusTitle = (date: string) => {
    setTitle(date)
  }

  return (
    <div>
      <div>
        <div className={s.childDiv}>
          <Typography sx={{ marginBottom: '5px' }} variant={'subtitle1'}>
            {heading}
          </Typography>
        </div>
      </div>
      {editMode && name !== 'date' && name !== 'status' && (
        <TextFieldValidation activateViewMode={activateViewMode2} title={title} />
      )}
      {editMode && name === 'date' && (
        <BasicDatePicker
          label={title}
          onChange={changeDateAndStatusTitle}
          onClose={activateViewMode}
        />
      )}
      {editMode && name === 'status' && (
        <div className={s.childDiv}>
          <BasicSelect
            onBlur={activateViewMode}
            onChange={changeDateAndStatusTitle}
            value={title}
          />
          <Button sx={{ marginLeft: '16px' }} type={'submit'}>
            Submit
          </Button>
        </div>
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
