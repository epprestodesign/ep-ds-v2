import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Stack from '@mui/material/Stack'

const meta: Meta<typeof Checkbox> = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />}
        label="Check me"
      />
    )
  },
}

export const States: Story = {
  render: () => (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Checked" />
      <FormControlLabel control={<Checkbox />} label="Unchecked" />
      <FormControlLabel
        control={<Checkbox checked indeterminate />}
        label="Indeterminate"
      />
      <FormControlLabel control={<Checkbox disabled />} label="Disabled unchecked" />
      <FormControlLabel control={<Checkbox disabled checked />} label="Disabled checked" />
    </FormGroup>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Checkbox defaultChecked color="primary" />
      <Checkbox defaultChecked color="secondary" />
      <Checkbox defaultChecked color="error" />
      <Checkbox defaultChecked color="warning" />
      <Checkbox defaultChecked color="info" />
      <Checkbox defaultChecked color="success" />
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
      <Checkbox defaultChecked size="small" />
      <Checkbox defaultChecked size="medium" />
    </Stack>
  ),
}
