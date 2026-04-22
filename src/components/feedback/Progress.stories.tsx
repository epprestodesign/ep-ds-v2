import type { Meta, StoryObj } from '@storybook/react'
import CircularProgress from '@mui/material/CircularProgress'
import LinearProgress from '@mui/material/LinearProgress'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const meta: Meta = {
  title: 'Feedback/Progress',
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const CircularIndeterminate: Story = {
  render: () => (
    <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
      <CircularProgress />
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="error" />
    </Stack>
  ),
}

export const CircularDeterminate: Story = {
  render: () => (
    <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
      {[25, 50, 75, 100].map((v) => (
        <Box key={v} sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress variant="determinate" value={v} />
          <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="caption" color="text.secondary">{v}%</Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  ),
}

export const CircularSizes: Story = {
  render: () => (
    <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
      <CircularProgress size={24} />
      <CircularProgress size={32} />
      <CircularProgress size={44} />
      <CircularProgress size={56} />
    </Stack>
  ),
}

export const LinearIndeterminate: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 400 }}>
      <LinearProgress />
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="error" />
    </Stack>
  ),
}

export const LinearDeterminate: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 400 }}>
      {[10, 40, 70, 100].map((v) => (
        <Box key={v}>
          <Typography variant="caption" color="text.secondary">{v}%</Typography>
          <LinearProgress variant="determinate" value={v} />
        </Box>
      ))}
    </Stack>
  ),
}

export const LinearBuffer: Story = {
  render: () => (
    <Box sx={{ width: 400 }}>
      <LinearProgress variant="buffer" value={60} valueBuffer={80} />
    </Box>
  ),
}
