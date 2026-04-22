import type { Meta, StoryObj } from '@storybook/react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import InputBase from '@mui/material/InputBase'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import NotificationsIcon from '@mui/icons-material/Notifications'

const meta: Meta<typeof AppBar> = {
  title: 'Surfaces/AppBar',
  component: AppBar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>EVENTPIPE</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  ),
}

export const WithActions: Story = {
  render: () => (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Dashboard</Typography>
        <IconButton color="inherit"><NotificationsIcon /></IconButton>
        <IconButton color="inherit" edge="end"><AccountCircleIcon /></IconButton>
      </Toolbar>
    </AppBar>
  ),
}

export const WithSearch: Story = {
  render: () => (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ mr: 4 }}>EP</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'rgba(255,255,255,0.15)', borderRadius: 1, px: 1.5, py: 0.5, flexGrow: 1, maxWidth: 400 }}>
          <SearchIcon sx={{ mr: 1, opacity: 0.8 }} fontSize="small" />
          <InputBase placeholder="Search…" sx={{ color: 'inherit', fontSize: '0.875rem' }} fullWidth />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit"><AccountCircleIcon /></IconButton>
      </Toolbar>
    </AppBar>
  ),
}

export const Dense: Story = {
  render: () => (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" size="small" sx={{ mr: 2 }}>
          <MenuIcon fontSize="small" />
        </IconButton>
        <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>Dense AppBar</Typography>
        <Button color="inherit" size="small">Action</Button>
      </Toolbar>
    </AppBar>
  ),
}

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {(['primary', 'secondary', 'error', 'transparent'] as const).map((color) => (
        <AppBar key={color} position="static" color={color}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>color="{color}"</Typography>
            <Button color="inherit">Action</Button>
          </Toolbar>
        </AppBar>
      ))}
    </Box>
  ),
}
