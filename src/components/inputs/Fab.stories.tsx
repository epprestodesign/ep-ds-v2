import type { Meta, StoryObj } from '@storybook/react'
import Fab from '@mui/material/Fab'
import Stack from '@mui/material/Stack'

const meta: Meta<typeof Fab> = {
  title: 'Inputs/FloatingActionButton',
  component: Fab,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['circular', 'extended'] },
    color: { control: 'select', options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { color: 'primary', children: '+' },
}

export const Extended: Story = {
  render: () => (
    <Fab variant="extended" color="primary">
      + Add Item
    </Fab>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Fab color="primary">+</Fab>
      <Fab color="secondary">+</Fab>
      <Fab color="error">+</Fab>
      <Fab color="success">+</Fab>
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Fab color="primary" size="small">+</Fab>
      <Fab color="primary" size="medium">+</Fab>
      <Fab color="primary" size="large">+</Fab>
    </Stack>
  ),
}

export const Disabled: Story = {
  args: { disabled: true, children: '+' },
}
