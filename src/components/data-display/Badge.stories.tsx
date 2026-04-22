import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Badge badgeContent={4} color="primary">
      <MailIcon />
    </Badge>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <Badge badgeContent={4} color="primary"><NotificationsIcon /></Badge>
      <Badge badgeContent={4} color="secondary"><NotificationsIcon /></Badge>
      <Badge badgeContent={4} color="error"><NotificationsIcon /></Badge>
      <Badge badgeContent={4} color="warning"><NotificationsIcon /></Badge>
      <Badge badgeContent={4} color="info"><NotificationsIcon /></Badge>
      <Badge badgeContent={4} color="success"><NotificationsIcon /></Badge>
    </Stack>
  ),
}

export const Dot: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <Badge variant="dot" color="primary"><MailIcon /></Badge>
      <Badge variant="dot" color="error"><MailIcon /></Badge>
      <Badge variant="dot" color="success"><MailIcon /></Badge>
    </Stack>
  ),
}

export const Max: Story = {
  render: () => (
    <Stack direction="row" spacing={4}>
      <Badge badgeContent={99} color="primary"><NotificationsIcon /></Badge>
      <Badge badgeContent={100} color="primary"><NotificationsIcon /></Badge>
      <Badge badgeContent={1000} max={999} color="error"><NotificationsIcon /></Badge>
    </Stack>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [count, setCount] = useState(0)
    return (
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
        <Badge badgeContent={count} color="primary" showZero>
          <NotificationsIcon />
        </Badge>
        <Button size="small" variant="outlined" onClick={() => setCount((c) => c + 1)}>+1</Button>
        <Button size="small" variant="outlined" onClick={() => setCount(0)}>Clear</Button>
      </Stack>
    )
  },
}
