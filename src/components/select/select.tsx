import { StyledEngineProvider } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

type Props = {
  onBlur: () => void
  onChange: (data: string) => void
  value: string
}

export const BasicSelect = ({ onBlur, onChange, value }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string)
  }

  return (
    <StyledEngineProvider injectFirst>
      <Select fullWidth onBlur={onBlur} onChange={handleChange} value={value}>
        <MenuItem value={"'Shipped'"}>&quot;Shipped&quot;</MenuItem>
        <MenuItem value={"'In Transit'"}>&quot;In Transit&quot;</MenuItem>
        <MenuItem value={"'Delivered'"}>&quot;Delivered&quot;</MenuItem>
      </Select>
    </StyledEngineProvider>
  )
}
