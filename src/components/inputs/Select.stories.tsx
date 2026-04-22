import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Select from '@mui/material/Select'
import type { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import Stack from '@mui/material/Stack'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const meta: Meta<any> = {
  title: 'Inputs/Select',
  component: Select,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

const options = ['Design', 'Engineering', 'Marketing', 'Product', 'Sales']

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Team</InputLabel>
        <Select value={value} label="Team" onChange={(e: SelectChangeEvent) => setValue(e.target.value)}>
          {options.map((o) => <MenuItem key={o} value={o}>{o}</MenuItem>)}
        </Select>
      </FormControl>
    )
  },
}

export const WithHelperText: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Team</InputLabel>
        <Select value={value} label="Team" onChange={(e: SelectChangeEvent) => setValue(e.target.value)}>
          {options.map((o) => <MenuItem key={o} value={o}>{o}</MenuItem>)}
        </Select>
        <FormHelperText>Select your team</FormHelperText>
      </FormControl>
    )
  },
}

export const Multiple: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>([])
    return (
      <FormControl sx={{ minWidth: 240 }}>
        <InputLabel>Teams</InputLabel>
        <Select
          multiple
          value={values}
          label="Teams"
          onChange={(e) => {
            const v = (e as SelectChangeEvent<string[]>).target.value
            setValues(typeof v === 'string' ? v.split(',') : v)
          }}
        >
          {options.map((o) => <MenuItem key={o} value={o}>{o}</MenuItem>)}
        </Select>
      </FormControl>
    )
  },
}

export const Variants: Story = {
  render: () => (
    <Stack spacing={3} sx={{ minWidth: 200 }}>
      <FormControl>
        <InputLabel>Outlined</InputLabel>
        <Select defaultValue="" label="Outlined">
          {options.map((o) => <MenuItem key={o} value={o}>{o}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl variant="filled">
        <InputLabel>Filled</InputLabel>
        <Select defaultValue="" label="Filled">
          {options.map((o) => <MenuItem key={o} value={o}>{o}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel>Standard</InputLabel>
        <Select defaultValue="" label="Standard">
          {options.map((o) => <MenuItem key={o} value={o}>{o}</MenuItem>)}
        </Select>
      </FormControl>
    </Stack>
  ),
}

export const Error: Story = {
  render: () => (
    <FormControl error sx={{ minWidth: 200 }}>
      <InputLabel>Team</InputLabel>
      <Select defaultValue="" label="Team">
        {options.map((o) => <MenuItem key={o} value={o}>{o}</MenuItem>)}
      </Select>
      <FormHelperText>This field is required</FormHelperText>
    </FormControl>
  ),
}

export const Disabled: Story = {
  render: () => (
    <FormControl disabled sx={{ minWidth: 200 }}>
      <InputLabel>Team</InputLabel>
      <Select defaultValue="Design" label="Team">
        {options.map((o) => <MenuItem key={o} value={o}>{o}</MenuItem>)}
      </Select>
    </FormControl>
  ),
}
