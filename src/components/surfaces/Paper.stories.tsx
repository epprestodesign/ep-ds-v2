import type { Meta, StoryObj } from '@storybook/react'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const meta: Meta<typeof Paper> = {
  title: 'Surfaces/Paper',
  component: Paper,
  tags: ['autodocs'],
  argTypes: {
    elevation: { control: { type: 'range', min: 0, max: 24 } },
    variant: { control: 'select', options: ['elevation', 'outlined'] },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Elevations: Story = {
  render: () => (
    <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap', p: 2, bgcolor: 'background.default' }}>
      {[0, 1, 2, 4, 8, 12, 16, 24].map((e) => (
        <Paper key={e} elevation={e} sx={{ p: 3, width: 80, textAlign: 'center' }}>
          <Typography variant="caption">dp={e}</Typography>
        </Paper>
      ))}
    </Stack>
  ),
}

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={3} sx={{ p: 2 }}>
      <Paper elevation={3} sx={{ p: 3, width: 180 }}>
        <Typography variant="subtitle2" gutterBottom>Elevation</Typography>
        <Typography variant="body2" color="text.secondary">Uses box shadow for depth.</Typography>
      </Paper>
      <Paper variant="outlined" sx={{ p: 3, width: 180 }}>
        <Typography variant="subtitle2" gutterBottom>Outlined</Typography>
        <Typography variant="body2" color="text.secondary">Uses a border instead of shadow.</Typography>
      </Paper>
    </Stack>
  ),
}

export const Interactive: Story = {
  args: { elevation: 3, children: <Box sx={{ p: 3 }}><Typography>Adjust elevation with the control panel.</Typography></Box> },
}
