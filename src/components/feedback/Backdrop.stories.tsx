import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const meta: Meta<typeof Backdrop> = {
  title: 'Feedback/Backdrop',
  component: Backdrop,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <Box sx={{ height: 240, position: 'relative', border: '1px dashed', borderColor: 'divider', borderRadius: 2, p: 3 }}>
        <Typography variant="body2" color="text.secondary">Click the button to show a loading backdrop.</Typography>
        <Button variant="contained" onClick={() => { setOpen(true); setTimeout(() => setOpen(false), 2500) }} sx={{ mt: 2 }}>
          Show loading
        </Button>
        <Backdrop open={open} sx={{ position: 'absolute', borderRadius: 2, color: '#fff', zIndex: 1 }}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    )
  },
}

export const WithMessage: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <Box sx={{ height: 240, position: 'relative', border: '1px dashed', borderColor: 'divider', borderRadius: 2, p: 3 }}>
        <Button variant="outlined" onClick={() => { setOpen(true); setTimeout(() => setOpen(false), 3000) }}>
          Start upload
        </Button>
        <Backdrop open={open} sx={{ position: 'absolute', borderRadius: 2, color: '#fff', zIndex: 1, flexDirection: 'column', gap: 2 }}>
          <CircularProgress color="inherit" />
          <Typography color="inherit" variant="body2">Uploading… please wait</Typography>
        </Backdrop>
      </Box>
    )
  },
}
