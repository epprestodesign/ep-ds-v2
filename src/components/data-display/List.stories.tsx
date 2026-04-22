import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListSubheader from '@mui/material/ListSubheader'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Collapse from '@mui/material/Collapse'
import Paper from '@mui/material/Paper'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import StarIcon from '@mui/icons-material/Star'
import SendIcon from '@mui/icons-material/Send'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import WorkIcon from '@mui/icons-material/Work'
import PersonIcon from '@mui/icons-material/Person'

const meta: Meta<typeof List> = {
  title: 'Data Display/List',
  component: List,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Simple: Story = {
  render: () => (
    <Paper variant="outlined" sx={{ width: 320 }}>
      <List>
        <ListItem><ListItemText primary="Inbox" secondary="3 new messages" /></ListItem>
        <Divider />
        <ListItem><ListItemText primary="Drafts" secondary="1 draft" /></ListItem>
        <Divider />
        <ListItem><ListItemText primary="Sent" /></ListItem>
      </List>
    </Paper>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Paper variant="outlined" sx={{ width: 320 }}>
      <List>
        <ListItemButton>
          <ListItemIcon><InboxIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Inbox" secondary="3 new messages" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon><DraftsIcon /></ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon><StarIcon color="warning" /></ListItemIcon>
          <ListItemText primary="Starred" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon><SendIcon /></ListItemIcon>
          <ListItemText primary="Sent" />
        </ListItemButton>
      </List>
    </Paper>
  ),
}

export const WithAvatars: Story = {
  render: () => (
    <Paper variant="outlined" sx={{ width: 360 }}>
      <List>
        {[
          { name: 'Alice Johnson', role: 'Designer', color: 'primary.main' },
          { name: 'Bob Smith', role: 'Engineer', color: 'secondary.main' },
          { name: 'Carol Williams', role: 'Product Manager', color: 'error.main' },
        ].map(({ name, role, color }) => (
          <ListItem key={name}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: color }}>{name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} secondary={role} />
          </ListItem>
        ))}
      </List>
    </Paper>
  ),
}

export const Nested: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <Paper variant="outlined" sx={{ width: 320 }}>
        <List subheader={<ListSubheader>Mailbox</ListSubheader>}>
          <ListItemButton onClick={() => setOpen(!open)}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} unmountOnExit>
            <List disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon><StarIcon fontSize="small" /></ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon><SendIcon fontSize="small" /></ListItemIcon>
                <ListItemText primary="Sent" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton>
            <ListItemIcon><DraftsIcon /></ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </List>
      </Paper>
    )
  },
}

export const Selectable: Story = {
  render: () => {
    const [selected, setSelected] = useState<string | null>('Inbox')
    const items = [
      { label: 'Inbox', Icon: InboxIcon },
      { label: 'Drafts', Icon: DraftsIcon },
      { label: 'Work', Icon: WorkIcon },
      { label: 'Personal', Icon: PersonIcon },
    ]
    return (
      <Paper variant="outlined" sx={{ width: 280 }}>
        <List>
          {items.map(({ label, Icon }) => (
            <ListItemButton
              key={label}
              selected={selected === label}
              onClick={() => setSelected(label)}
            >
              <ListItemIcon><Icon /></ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          ))}
        </List>
      </Paper>
    )
  },
}

export const Dense: Story = {
  render: () => (
    <Paper variant="outlined" sx={{ width: 320 }}>
      <List dense>
        <ListItemButton><ListItemIcon><InboxIcon /></ListItemIcon><ListItemText primary="Inbox" /></ListItemButton>
        <ListItemButton><ListItemIcon><DraftsIcon /></ListItemIcon><ListItemText primary="Drafts" /></ListItemButton>
        <ListItemButton><ListItemIcon><SendIcon /></ListItemIcon><ListItemText primary="Sent" /></ListItemButton>
        <ListItemButton><ListItemIcon><StarIcon /></ListItemIcon><ListItemText primary="Starred" /></ListItemButton>
      </List>
    </Paper>
  ),
}
