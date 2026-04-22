import type { Meta, StoryObj } from '@storybook/react'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import DeleteIcon from '@mui/icons-material/Delete'

const meta: Meta<typeof Tooltip> = {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: { title: 'Tooltip text', children: <Button variant="outlined">Hover me</Button> },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Arrow: Story = {
  args: { arrow: true },
}

export const Placements: Story = {
  render: () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', pt: 4 }}>
      <Grid container spacing={2} sx={{ width: 360 }}>
        {(['top-start', 'top', 'top-end', 'left-start', 'left', 'left-end', 'right-start', 'right', 'right-end', 'bottom-start', 'bottom', 'bottom-end'] as const).map((placement) => (
          <Grid key={placement} size={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Tooltip title={placement} placement={placement} arrow>
              <Button variant="outlined" size="small" sx={{ fontSize: '0.65rem', px: 0.5 }}>
                {placement}
              </Button>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  ),
}

export const WithIconButton: Story = {
  render: () => (
    <Tooltip title="Delete item" arrow>
      <IconButton color="error">
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  ),
}

export const Disabled: Story = {
  args: { title: 'Cannot hover disabled elements directly' },
  render: () => (
    <Tooltip title="Wrap in span to tooltip disabled buttons">
      <span>
        <Button variant="contained" disabled>Disabled</Button>
      </span>
    </Tooltip>
  ),
}
