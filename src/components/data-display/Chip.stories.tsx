import type { Meta, StoryObj } from '@storybook/react'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import FaceIcon from '@mui/icons-material/Face'

const meta: Meta<typeof Chip> = {
  title: 'Data Display/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['filled', 'outlined'] },
    color: { control: 'select', options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'] },
    size: { control: 'select', options: ['small', 'medium'] },
    disabled: { control: 'boolean' },
  },
  args: { label: 'Chip' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: 'filled' },
}

export const Outlined: Story = {
  args: { variant: 'outlined' },
}

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Filled" variant="filled" color="primary" />
      <Chip label="Outlined" variant="outlined" color="primary" />
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
      <Chip label="Default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Error" color="error" />
      <Chip label="Warning" color="warning" />
      <Chip label="Info" color="info" />
      <Chip label="Success" color="success" />
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
      <Chip label="Small" size="small" color="primary" />
      <Chip label="Medium" size="medium" color="primary" />
    </Stack>
  ),
}

export const Deletable: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Deletable" onDelete={() => {}} />
      <Chip label="Primary" color="primary" onDelete={() => {}} />
      <Chip label="Outlined" variant="outlined" onDelete={() => {}} />
    </Stack>
  ),
}

export const Clickable: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Clickable" onClick={() => {}} />
      <Chip label="With delete" onClick={() => {}} onDelete={() => {}} color="primary" />
    </Stack>
  ),
}

export const WithAvatar: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip avatar={<Avatar>M</Avatar>} label="With letter" />
      <Chip avatar={<Avatar src="https://i.pravatar.cc/100?u=ep1" />} label="With image" />
      <Chip icon={<FaceIcon />} label="With icon" color="primary" />
    </Stack>
  ),
}
