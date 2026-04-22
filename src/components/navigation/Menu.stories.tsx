import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ContentCutIcon from '@mui/icons-material/ContentCut'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const meta: Meta<typeof Menu> = {
  title: 'Navigation/Menu',
  component: Menu,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [anchor, setAnchor] = useState<null | HTMLElement>(null)
    return (
      <>
        <Button variant="outlined" onClick={(e) => setAnchor(e.currentTarget)}>Open menu</Button>
        <Menu open={!!anchor} anchorEl={anchor} onClose={() => setAnchor(null)}>
          <MenuItem onClick={() => setAnchor(null)}>Profile</MenuItem>
          <MenuItem onClick={() => setAnchor(null)}>My account</MenuItem>
          <MenuItem onClick={() => setAnchor(null)}>Settings</MenuItem>
          <Divider />
          <MenuItem onClick={() => setAnchor(null)}>Logout</MenuItem>
        </Menu>
      </>
    )
  },
}

export const WithIcons: Story = {
  render: () => {
    const [anchor, setAnchor] = useState<null | HTMLElement>(null)
    return (
      <>
        <IconButton onClick={(e) => setAnchor(e.currentTarget)}><MoreVertIcon /></IconButton>
        <Menu open={!!anchor} anchorEl={anchor} onClose={() => setAnchor(null)}>
          <MenuItem onClick={() => setAnchor(null)}>
            <ListItemIcon><EditIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Edit</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => setAnchor(null)}>
            <ListItemIcon><ContentCopyIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Duplicate</ListItemText>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>⌘D</Typography>
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => setAnchor(null)}>
            <ListItemIcon><ContentCutIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Cut</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => setAnchor(null)}>
            <ListItemIcon><ContentPasteIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Paste</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => setAnchor(null)} sx={{ color: 'error.main' }}>
            <ListItemIcon><DeleteIcon fontSize="small" color="error" /></ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
        </Menu>
      </>
    )
  },
}

export const Dense: Story = {
  render: () => {
    const [anchor, setAnchor] = useState<null | HTMLElement>(null)
    return (
      <>
        <Button size="small" variant="outlined" onClick={(e) => setAnchor(e.currentTarget)}>Dense menu</Button>
        <Menu open={!!anchor} anchorEl={anchor} onClose={() => setAnchor(null)}>
          <MenuList dense>
            <MenuItem onClick={() => setAnchor(null)}>Option one</MenuItem>
            <MenuItem onClick={() => setAnchor(null)}>Option two</MenuItem>
            <MenuItem onClick={() => setAnchor(null)}>Option three</MenuItem>
            <Divider />
            <MenuItem onClick={() => setAnchor(null)}>Option four</MenuItem>
          </MenuList>
        </Menu>
      </>
    )
  },
}
