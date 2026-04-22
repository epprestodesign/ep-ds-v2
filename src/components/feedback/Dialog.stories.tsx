import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

const meta: Meta<typeof Dialog> = {
  title: 'Feedback/Dialog',
  component: Dialog,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Open dialog</Button>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This is a basic dialog with a title, content, and action buttons. Use dialogs to interrupt the user for important decisions or information.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={() => setOpen(false)}>Confirm</Button>
          </DialogActions>
        </Dialog>
      </>
    )
  },
}

export const Confirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="outlined" color="error" onClick={() => setOpen(true)}>Delete item</Button>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs" fullWidth>
          <DialogTitle>Delete this item?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This action cannot be undone. The item will be permanently removed.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained" color="error" onClick={() => setOpen(false)}>Delete</Button>
          </DialogActions>
        </Dialog>
      </>
    )
  },
}

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Edit profile</Button>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogContent>
            <Stack spacing={2} sx={{ mt: 1 }}>
              <TextField label="Full name" fullWidth size="small" defaultValue="Alice Johnson" />
              <TextField label="Email" type="email" fullWidth size="small" defaultValue="alice@example.com" />
              <TextField label="Role" fullWidth size="small" defaultValue="Designer" />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={() => setOpen(false)}>Save changes</Button>
          </DialogActions>
        </Dialog>
      </>
    )
  },
}

export const FullScreen: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="outlined" onClick={() => setOpen(true)}>Open fullscreen</Button>
        <Dialog open={open} onClose={() => setOpen(false)} fullScreen>
          <DialogTitle>Fullscreen dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Fullscreen dialogs are useful on mobile or for complex workflows that need maximum space.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </>
    )
  },
}
