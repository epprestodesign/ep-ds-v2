import type { Meta, StoryObj } from '@storybook/react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import AppShell from './AppShell'
import type { NavItem } from './AppShell'

const meta: Meta<typeof AppShell> = {
  title: 'Navigation/AppShell',
  component: AppShell,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    activeItemId: {
      control: 'select',
      options: ['dashboard', 'events', 'analytics', 'contacts', 'settings'],
    },
    drawerWidth: { control: { type: 'range', min: 180, max: 320, step: 10 } },
  },
}
export default meta
type Story = StoryObj<typeof meta>

const defaultNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  { id: 'events', label: 'Events', icon: 'event' },
  { id: 'analytics', label: 'Analytics', icon: 'bar_chart' },
  { id: 'contacts', label: 'Contacts', icon: 'people' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
]

const defaultUser = {
  name: 'Alex Rivera',
  role: 'Admin',
}

const ContentPlaceholder = ({ title }: { title: string }) => (
  <Box>
    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
      {title}
    </Typography>
    <Box
      sx={{
        height: 400,
        borderRadius: 3,
        bgcolor: 'background.paper',
        border: '2px dashed',
        borderColor: 'divider',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography color="text.secondary">Page content goes here</Typography>
    </Box>
  </Box>
)

export const Default: Story = {
  args: {
    navItems: defaultNavItems,
    pageTitle: 'Dashboard',
    user: defaultUser,
    children: <ContentPlaceholder title="Dashboard" />,
  },
}

export const WithActiveItem: Story = {
  args: {
    navItems: defaultNavItems,
    activeItemId: 'events',
    pageTitle: 'Events',
    user: defaultUser,
    children: <ContentPlaceholder title="Events" />,
  },
}

export const DifferentUser: Story = {
  args: {
    navItems: defaultNavItems,
    activeItemId: 'analytics',
    pageTitle: 'Analytics',
    user: {
      name: 'Jordan Kim',
      role: 'Viewer',
      avatarUrl: 'https://i.pravatar.cc/150?img=12',
    },
    children: <ContentPlaceholder title="Analytics" />,
  },
}

export const NoUser: Story = {
  args: {
    navItems: defaultNavItems,
    activeItemId: 'dashboard',
    pageTitle: 'Dashboard',
    children: <ContentPlaceholder title="Dashboard" />,
  },
}

export const Playground: Story = {
  args: {
    navItems: defaultNavItems,
    activeItemId: 'dashboard',
    pageTitle: 'Playground',
    user: defaultUser,
    drawerWidth: 240,
    children: <ContentPlaceholder title="Playground" />,
  },
}
