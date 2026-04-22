import type { Meta, StoryObj } from '@storybook/react'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const meta: Meta<typeof Skeleton> = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Variants: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 360 }}>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width="100%" height={80} />
      <Skeleton variant="rounded" width="100%" height={80} />
    </Stack>
  ),
}

export const Animations: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 360 }}>
      <Typography variant="caption" color="text.secondary">Pulse (default)</Typography>
      <Skeleton animation="pulse" variant="rectangular" height={60} />
      <Typography variant="caption" color="text.secondary">Wave</Typography>
      <Skeleton animation="wave" variant="rectangular" height={60} />
      <Typography variant="caption" color="text.secondary">No animation</Typography>
      <Skeleton animation={false} variant="rectangular" height={60} />
    </Stack>
  ),
}

export const CardLoading: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <Card sx={{ width: 240 }}>
        <Skeleton variant="rectangular" height={140} />
        <CardContent>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
            <Skeleton variant="circular" width={32} height={32} />
            <Skeleton variant="text" width={120} />
          </Stack>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="60%" />
        </CardContent>
      </Card>
      <Card sx={{ width: 240 }}>
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Avatar>A</Avatar>
            <Box>
              <Typography variant="body2">Alice Johnson</Typography>
              <Typography variant="caption" color="text.secondary">Designer</Typography>
            </Box>
          </Stack>
          <Typography variant="body2">
            This card shows real content for comparison.
          </Typography>
        </Box>
      </Card>
    </Stack>
  ),
}

export const ListLoading: Story = {
  render: () => (
    <Stack spacing={1.5} sx={{ width: 360 }}>
      {[1, 2, 3].map((i) => (
        <Stack key={i} direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
          <Skeleton variant="circular" width={40} height={40} />
          <Box sx={{ flex: 1 }}>
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="80%" sx={{ fontSize: '0.75rem' }} />
          </Box>
        </Stack>
      ))}
    </Stack>
  ),
}
