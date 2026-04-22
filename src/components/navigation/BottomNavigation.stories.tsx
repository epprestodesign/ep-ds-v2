import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Paper from '@mui/material/Paper'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import NotificationsIcon from '@mui/icons-material/Notifications'

const meta: Meta<typeof BottomNavigation> = {
  title: 'Navigation/BottomNavigation',
  component: BottomNavigation,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <Paper elevation={3} sx={{ width: 400 }}>
        <BottomNavigation value={value} onChange={(_, v) => setValue(v)}>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </Paper>
    )
  },
}

export const WithNotification: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <Paper elevation={3} sx={{ width: 400 }}>
        <BottomNavigation value={value} onChange={(_, v) => setValue(v)}>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
          <BottomNavigationAction label="Alerts" icon={<NotificationsIcon />} />
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </Paper>
    )
  },
}
