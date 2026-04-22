import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import HomeIcon from '@mui/icons-material/Home'
import DashboardIcon from '@mui/icons-material/Dashboard'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PersonIcon from '@mui/icons-material/Person'

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

const TabPanel = ({ value, index, children }: { value: number; index: number; children: React.ReactNode }) =>
  value === index ? <Box sx={{ p: 3 }}><Typography variant="body2" color="text.secondary">{children}</Typography></Box> : null

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <Paper variant="outlined">
        <Tabs value={value} onChange={(_, v) => setValue(v)}>
          <Tab label="Overview" />
          <Tab label="Events" />
          <Tab label="Team" />
          <Tab label="Settings" />
        </Tabs>
        <TabPanel value={value} index={0}>Overview content — summary stats, recent activity.</TabPanel>
        <TabPanel value={value} index={1}>Events content — upcoming and past events list.</TabPanel>
        <TabPanel value={value} index={2}>Team content — members and roles.</TabPanel>
        <TabPanel value={value} index={3}>Settings content — account and preferences.</TabPanel>
      </Paper>
    )
  },
}

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <Paper variant="outlined">
        <Tabs value={value} onChange={(_, v) => setValue(v)}>
          <Tab icon={<HomeIcon />} label="Home" iconPosition="start" />
          <Tab icon={<DashboardIcon />} label="Dashboard" iconPosition="start" />
          <Tab icon={<CalendarTodayIcon />} label="Events" iconPosition="start" />
          <Tab icon={<PersonIcon />} label="Profile" iconPosition="start" />
        </Tabs>
      </Paper>
    )
  },
}

export const Scrollable: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <Paper variant="outlined" sx={{ maxWidth: 400 }}>
        <Tabs value={value} onChange={(_, v) => setValue(v)} variant="scrollable" scrollButtons="auto">
          {['Design', 'Engineering', 'Product', 'Marketing', 'Sales', 'Support', 'Legal', 'Finance'].map((t, i) => (
            <Tab key={t} label={t} value={i} />
          ))}
        </Tabs>
      </Paper>
    )
  },
}

export const Vertical: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    const tabs = ['Overview', 'Events', 'Team', 'Reports', 'Settings']
    return (
      <Paper variant="outlined" sx={{ display: 'flex', minHeight: 240 }}>
        <Tabs orientation="vertical" value={value} onChange={(_, v) => setValue(v)} sx={{ borderRight: 1, borderColor: 'divider', minWidth: 120 }}>
          {tabs.map((t) => <Tab key={t} label={t} />)}
        </Tabs>
        <Box sx={{ p: 3, flex: 1 }}>
          <Typography variant="body2" color="text.secondary">{tabs[value]} panel content</Typography>
        </Box>
      </Paper>
    )
  },
}

export const Colors: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {(['primary', 'secondary'] as const).map((color) => (
          <Paper key={color} variant="outlined">
            <Tabs value={value} onChange={(_, v) => setValue(v)} textColor={color} indicatorColor={color}>
              <Tab label="Tab one" /><Tab label="Tab two" /><Tab label="Tab three" />
            </Tabs>
          </Paper>
        ))}
      </Box>
    )
  },
}
