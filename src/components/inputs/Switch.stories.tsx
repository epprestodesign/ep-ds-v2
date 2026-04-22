import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Stack from '@mui/material/Stack'

const meta: Meta<typeof Switch> = {
  title: 'Inputs/Switch',
  component: Switch,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <FormControlLabel
        control={<Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} />}
        label={checked ? 'On' : 'Off'}
      />
    )
  },
}

export const States: Story = {
  render: () => (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Checked" />
      <FormControlLabel control={<Switch />} label="Unchecked" />
      <FormControlLabel control={<Switch disabled />} label="Disabled unchecked" />
      <FormControlLabel control={<Switch disabled checked />} label="Disabled checked" />
    </FormGroup>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Switch defaultChecked color="primary" />
      <Switch defaultChecked color="secondary" />
      <Switch defaultChecked color="error" />
      <Switch defaultChecked color="warning" />
      <Switch defaultChecked color="info" />
      <Switch defaultChecked color="success" />
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Switch defaultChecked size="small" />
      <Switch defaultChecked size="medium" />
    </Stack>
  ),
}
