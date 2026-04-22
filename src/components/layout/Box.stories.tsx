import type { Meta, StoryObj } from '@storybook/react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const meta: Meta<typeof Box> = {
  title: 'Layout/Box',
  component: Box,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const SxProp: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      {[
        { sx: { bgcolor: 'primary.main', color: 'white' }, label: 'primary.main' },
        { sx: { bgcolor: 'secondary.main', color: 'white' }, label: 'secondary.main' },
        { sx: { bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }, label: 'paper' },
        { sx: { bgcolor: 'action.hover' }, label: 'action.hover' },
        { sx: { bgcolor: 'success.light' }, label: 'success.light' },
        { sx: { bgcolor: 'error.light' }, label: 'error.light' },
      ].map(({ sx, label }) => (
        <Box key={label} sx={{ ...sx, p: 2, borderRadius: 2, minWidth: 120, textAlign: 'center' }}>
          <Typography variant="caption">{label}</Typography>
        </Box>
      ))}
    </Box>
  ),
}

export const Spacing: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {[1, 2, 3, 4, 6, 8].map((n) => (
        <Box key={n} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="caption" sx={{ width: 40, color: 'text.secondary' }}>p={n}</Typography>
          <Box sx={{ bgcolor: 'primary.light', p: n, borderRadius: 1, flex: 1 }} />
        </Box>
      ))}
    </Box>
  ),
}

export const Polymorphic: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Box component="section" sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
        <Typography variant="caption" color="text.secondary">As &lt;section&gt;</Typography>
      </Box>
      <Box component="article" sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
        <Typography variant="caption" color="text.secondary">As &lt;article&gt;</Typography>
      </Box>
      <Box component="span" sx={{ display: 'inline-block', px: 1, bgcolor: 'primary.main', color: 'white', borderRadius: 1 }}>
        <Typography variant="caption">As &lt;span&gt; (inline)</Typography>
      </Box>
    </Box>
  ),
}
