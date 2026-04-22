import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

const meta: Meta<typeof Snackbar> = {
  title: 'Feedback/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Show snackbar</Button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          message="Changes saved successfully"
          action={
            <IconButton size="small" color="inherit" onClick={() => setOpen(false)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </>
    )
  },
}

export const WithAction: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="outlined" color="error" onClick={() => setOpen(true)}>Delete item</Button>
        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={() => setOpen(false)}
          message="Item deleted"
          action={
            <Button color="warning" size="small" onClick={() => setOpen(false)}>UNDO</Button>
          }
        />
      </>
    )
  },
}

export const WithSeverity: Story = {
  render: () => {
    const [open, setOpen] = useState<string | null>(null)
    const severities = ['success', 'error', 'warning', 'info'] as const
    return (
      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
        {severities.map((s) => (
          <Button key={s} variant="outlined" color={s} onClick={() => setOpen(s)}>
            {s}
          </Button>
        ))}
        <Snackbar open={!!open} autoHideDuration={3000} onClose={() => setOpen(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert severity={open as typeof severities[number] ?? 'info'} onClose={() => setOpen(null)} variant="filled">
            This is a {open} message!
          </Alert>
        </Snackbar>
      </Stack>
    )
  },
}

export const Positions: Story = {
  render: () => {
    const [pos, setPos] = useState<{ vertical: 'top' | 'bottom'; horizontal: 'left' | 'center' | 'right' } | null>(null)
    const positions = [
      { vertical: 'top', horizontal: 'left' },
      { vertical: 'top', horizontal: 'center' },
      { vertical: 'top', horizontal: 'right' },
      { vertical: 'bottom', horizontal: 'left' },
      { vertical: 'bottom', horizontal: 'center' },
      { vertical: 'bottom', horizontal: 'right' },
    ] as const
    return (
      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
        {positions.map((p) => (
          <Button key={`${p.vertical}-${p.horizontal}`} size="small" variant="outlined" onClick={() => setPos(p)}>
            {p.vertical}-{p.horizontal}
          </Button>
        ))}
        <Snackbar
          open={!!pos}
          autoHideDuration={2000}
          onClose={() => setPos(null)}
          anchorOrigin={pos ?? { vertical: 'bottom', horizontal: 'center' }}
          message={pos ? `${pos.vertical} ${pos.horizontal}` : ''}
        />
      </Stack>
    )
  },
}
