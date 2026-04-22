import type { Meta, StoryObj } from '@storybook/react'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

const Item = ({ label, color = 'primary.main' }: { label: string; color?: string }) => (
  <Box sx={{ bgcolor: color, color: 'white', borderRadius: 1, px: 2, py: 1.5, textAlign: 'center', minWidth: 80 }}>
    <Typography variant="caption">{label}</Typography>
  </Box>
)

export const Vertical: Story = {
  render: () => (
    <Stack spacing={2}>
      <Item label="Item 1" />
      <Item label="Item 2" color="secondary.main" />
      <Item label="Item 3" color="success.main" />
    </Stack>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Item label="Item 1" />
      <Item label="Item 2" color="secondary.main" />
      <Item label="Item 3" color="success.main" />
    </Stack>
  ),
}

export const WithDivider: Story = {
  render: () => (
    <Stack spacing={2} divider={<Divider flexItem />} sx={{ maxWidth: 240 }}>
      <Typography variant="body2">First section</Typography>
      <Typography variant="body2">Second section</Typography>
      <Typography variant="body2">Third section</Typography>
    </Stack>
  ),
}

export const HorizontalWithDivider: Story = {
  render: () => (
    <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
      <Chip label="Home" />
      <Chip label="Events" />
      <Chip label="Profile" />
    </Stack>
  ),
}

export const Spacing: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {[1, 2, 4, 6].map((s) => (
        <Box key={s}>
          <Typography variant="caption" color="text.secondary">spacing={s} ({s * 8}px)</Typography>
          <Stack direction="row" spacing={s} sx={{ mt: 0.5 }}>
            <Item label="A" /><Item label="B" color="secondary.main" /><Item label="C" color="success.main" />
          </Stack>
        </Box>
      ))}
    </Box>
  ),
}
