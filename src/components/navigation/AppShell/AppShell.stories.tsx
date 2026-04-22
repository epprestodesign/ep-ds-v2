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
      options: ['users', 'events', 'reports', 'hotels', 'hotel-brands', 'amenities', 'room-types', 'venues', 'event-companies', 'companies', 'requests', 'inventory', 'admin-tools', 'api'],
    },
    drawerWidth: { control: { type: 'range', min: 240, max: 320, step: 10 } },
  },
}
export default meta
type Story = StoryObj<typeof meta>

// Nav items from Figma design
const navItems: NavItem[] = [
  { id: 'users', label: 'Users', icon: 'people' },
  { id: 'events', label: 'Events', icon: 'event' },
  { id: 'reports', label: 'Reports', icon: 'bar_chart' },
  { id: 'hotels', label: 'Hotels', icon: 'hotel' },
  { id: 'hotel-brands', label: 'Hotel Brands', icon: 'business' },
  { id: 'amenities', label: 'Amenities', icon: 'star' },
  { id: 'room-types', label: 'Room Types', icon: 'meeting_room' },
  { id: 'venues', label: 'Venues', icon: 'location_on' },
  { id: 'event-companies', label: 'Event Companies', icon: 'domain' },
  { id: 'companies', label: 'Companies', icon: 'corporate_fare' },
  { id: 'requests', label: 'Requests', icon: 'inbox' },
  { id: 'inventory', label: 'Inventory Requests', icon: 'inventory' },
  { id: 'admin-tools', label: 'Admin Tools', icon: 'admin_panel_settings' },
  { id: 'api', label: 'API', icon: 'code' },
]

const defaultUser = {
  name: 'Mike Addesa',
  role: 'Admin',
}

const ContentPlaceholder = ({ title }: { title: string }) => (
  <Box>
    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: '#2A2D33' }}>
      {title}
    </Typography>
    <Box
      sx={{
        height: 400,
        borderRadius: 2,
        bgcolor: '#FFFFFF',
        border: '1.5px dashed #D5D7DF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography color="text.secondary" variant="body2">Page content goes here</Typography>
    </Box>
  </Box>
)

export const Default: Story = {
  args: {
    navItems,
    pageTitle: 'Housing Company',
    user: defaultUser,
    children: <ContentPlaceholder title="Dashboard" />,
  },
}

export const WithActiveItem: Story = {
  args: {
    navItems,
    activeItemId: 'events',
    pageTitle: 'Events (37)',
    user: defaultUser,
    children: <ContentPlaceholder title="Events" />,
  },
}

export const HotelsActive: Story = {
  args: {
    navItems,
    activeItemId: 'hotels',
    pageTitle: 'Hotels',
    user: defaultUser,
    children: <ContentPlaceholder title="Hotels" />,
  },
}

export const NoUser: Story = {
  args: {
    navItems,
    activeItemId: 'users',
    pageTitle: 'Users',
    children: <ContentPlaceholder title="Users" />,
  },
}

export const Playground: Story = {
  args: {
    navItems,
    activeItemId: 'events',
    pageTitle: 'Housing Company',
    user: defaultUser,
    drawerWidth: 240,
    children: <ContentPlaceholder title="Playground" />,
  },
}
