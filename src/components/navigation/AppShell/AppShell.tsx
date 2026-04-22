import Box from '@mui/material/Box'
import SideNav from './SideNav'
import TopBar from './TopBar'

export interface NavItem {
  id: string
  label: string
  icon?: string
  href?: string
}

export interface UserProfile {
  name: string
  role?: string
  avatarUrl?: string
}

export interface AppShellProps {
  navItems: NavItem[]
  activeItemId?: string
  onNavChange?: (item: NavItem) => void
  pageTitle?: string
  user?: UserProfile
  children?: React.ReactNode
  drawerWidth?: number
}

export default function AppShell({
  navItems,
  activeItemId,
  onNavChange,
  pageTitle = 'Dashboard',
  user,
  children,
  drawerWidth = 240,
}: AppShellProps) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <SideNav
        navItems={navItems}
        activeItemId={activeItemId}
        onNavChange={onNavChange}
        user={user}
        drawerWidth={drawerWidth}
      />
      <TopBar pageTitle={pageTitle} drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          flex: 1,
          mt: '64px',
          p: 3,
          bgcolor: 'background.default',
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
