import type { Meta, StoryObj } from '@storybook/react'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Stack from '@mui/material/Stack'

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Letter: Story = {
  args: { children: 'JD' },
}

export const Image: Story = {
  args: { src: 'https://i.pravatar.cc/100?u=ep1', alt: 'User avatar' },
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Avatar sx={{ width: 24, height: 24, fontSize: '0.7rem' }}>XS</Avatar>
      <Avatar sx={{ width: 32, height: 32, fontSize: '0.8rem' }}>SM</Avatar>
      <Avatar>MD</Avatar>
      <Avatar sx={{ width: 56, height: 56 }}>LG</Avatar>
      <Avatar sx={{ width: 72, height: 72, fontSize: '1.5rem' }}>XL</Avatar>
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Avatar sx={{ bgcolor: 'primary.main' }}>P</Avatar>
      <Avatar sx={{ bgcolor: 'secondary.main' }}>S</Avatar>
      <Avatar sx={{ bgcolor: 'error.main' }}>E</Avatar>
      <Avatar sx={{ bgcolor: 'warning.main' }}>W</Avatar>
      <Avatar sx={{ bgcolor: 'info.main' }}>I</Avatar>
      <Avatar sx={{ bgcolor: 'success.main' }}>✓</Avatar>
    </Stack>
  ),
}

export const Group: Story = {
  render: () => (
    <Stack spacing={3}>
      <AvatarGroup max={4}>
        <Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>
        <Avatar sx={{ bgcolor: 'secondary.main' }}>B</Avatar>
        <Avatar sx={{ bgcolor: 'error.main' }}>C</Avatar>
        <Avatar sx={{ bgcolor: 'warning.main' }}>D</Avatar>
        <Avatar sx={{ bgcolor: 'success.main' }}>E</Avatar>
        <Avatar sx={{ bgcolor: 'info.main' }}>F</Avatar>
      </AvatarGroup>
      <AvatarGroup max={4} total={24}>
        <Avatar src="https://i.pravatar.cc/100?u=ep1" />
        <Avatar src="https://i.pravatar.cc/100?u=ep2" />
        <Avatar src="https://i.pravatar.cc/100?u=ep3" />
      </AvatarGroup>
    </Stack>
  ),
}
