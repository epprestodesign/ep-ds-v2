import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import HomeIcon from '@mui/icons-material/Home'
import DashboardIcon from '@mui/icons-material/Dashboard'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'

const meta: Meta<typeof Drawer> = {
  title: 'Navigation/Drawer',
  component: Drawer,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

const NavList = () => (
  <Box sx={{ width: 240 }}>
    <Box sx={{ p: 2, pb: 1 }}>
      <Typography variant="h6" color="primary">EVENTPIPE</Typography>
    </Box>
    <Divider />
    <List>
      {[
        { label: 'Home', Icon: HomeIcon },
        { label: 'Dashboard', Icon: DashboardIcon },
        { label: 'Events', Icon: CalendarTodayIcon },
        { label: 'Profile', Icon: PersonIcon },
      ].map(({ label, Icon }) => (
        <ListItemButton key={label}>
          <ListItemIcon><Icon /></ListItemIcon>
          <ListItemText primary={label} />
        </ListItemButton>
      ))}
    </List>
    <Divider />
    <List>
      <ListItemButton>
        <ListItemIcon><SettingsIcon /></ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
    </List>
  </Box>
)

export const Temporary: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Open drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <NavList />
        </Drawer>
      </>
    )
  },
}

export const Right: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="outlined" onClick={() => setOpen(true)}>Open right drawer</Button>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <NavList />
        </Drawer>
      </>
    )
  },
}

export const Persistent: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <Box sx={{ display: 'flex', height: 320, border: '1px dashed', borderColor: 'divider', borderRadius: 2, overflow: 'hidden' }}>
        <Drawer variant="persistent" open={open} sx={{ '& .MuiDrawer-paper': { position: 'relative' } }}>
          <NavList />
        </Drawer>
        <Box sx={{ flex: 1, p: 3 }}>
          <Button size="small" variant="outlined" onClick={() => setOpen(!open)} sx={{ mb: 2 }}>
            {open ? 'Close' : 'Open'} drawer
          </Button>
          <Typography variant="body2" color="text.secondary">
            Persistent drawers push the main content when open. Toggle with the button above.
          </Typography>
        </Box>
      </Box>
    )
  },
}
