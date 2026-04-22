import type { Meta, StoryObj } from '@storybook/react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

const meta: Meta<typeof TextField> = {
  title: 'Inputs/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['outlined', 'filled', 'standard'] },
    size: { control: 'select', options: ['small', 'medium'] },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    multiline: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  args: { label: 'Label' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: 'outlined', placeholder: 'Placeholder' },
}

export const Variants: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 280 }}>
      <TextField variant="outlined" label="Outlined" />
      <TextField variant="filled" label="Filled" />
      <TextField variant="standard" label="Standard" />
    </Stack>
  ),
}

export const WithHelperText: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 280 }}>
      <TextField label="Username" helperText="Must be 3–20 characters" />
      <TextField label="Email" type="email" helperText="We'll never share your email" />
    </Stack>
  ),
}

export const States: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 280 }}>
      <TextField label="Default" />
      <TextField label="Disabled" disabled defaultValue="Can't touch this" />
      <TextField label="Error" error helperText="This field is required" />
      <TextField label="Read only" slotProps={{ input: { readOnly: true } }} defaultValue="Read only value" />
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 280 }}>
      <TextField label="Small" size="small" />
      <TextField label="Medium" size="medium" />
    </Stack>
  ),
}

export const Multiline: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 360 }}>
      <TextField label="Notes" multiline rows={4} />
      <TextField label="Auto-resize" multiline minRows={2} maxRows={6} placeholder="Grows as you type..." />
    </Stack>
  ),
}

export const Types: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 280 }}>
      <TextField label="Text" type="text" />
      <TextField label="Email" type="email" />
      <TextField label="Password" type="password" />
      <TextField label="Number" type="number" />
    </Stack>
  ),
}
