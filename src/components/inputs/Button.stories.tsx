import type { Meta, StoryObj } from '@storybook/react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const meta: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['contained', 'outlined', 'text'] },
    color: { control: 'select', options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
  },
  args: { children: 'Button' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Contained: Story = {
  args: { variant: 'contained' },
}

export const Outlined: Story = {
  args: { variant: 'outlined' },
}

export const Text: Story = {
  args: { variant: 'text' },
}

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
      <Button variant="contained" color="primary">Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button variant="contained" color="error">Error</Button>
      <Button variant="contained" color="warning">Warning</Button>
      <Button variant="contained" color="info">Info</Button>
      <Button variant="contained" color="success">Success</Button>
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Button variant="contained" size="small">Small</Button>
      <Button variant="contained" size="medium">Medium</Button>
      <Button variant="contained" size="large">Large</Button>
    </Stack>
  ),
}

export const Disabled: Story = {
  args: { variant: 'contained', disabled: true },
}
