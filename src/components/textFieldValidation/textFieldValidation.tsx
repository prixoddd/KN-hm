import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import { z } from 'zod'

import s from './textFieldValidation.module.scss'

type FormValues = {
  data: string
}

type Props = {
  activateViewMode: (data: string) => void
  title: string
}

const loginSchema = z.object({
  data: z.string().min(3).max(50),
})

const TextFieldValidation = ({ activateViewMode, title }: Props) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })
  const onSubmit = (data: FormValues) => {
    activateViewMode(data.data)
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        autoFocus
        defaultValue={title}
        fullWidth
        {...register('data')}
        error={errors.data?.message !== undefined}
        label={errors.data?.message}
      />
      <Button
        disabled={errors.data?.message !== undefined}
        sx={{ marginLeft: '16px' }}
        type={'submit'}
      >
        Submit
      </Button>
    </form>
  )
}

export default TextFieldValidation
