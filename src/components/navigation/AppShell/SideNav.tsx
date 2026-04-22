import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import Icon from '@mui/material/Icon'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import type { NavItem, UserProfile } from './AppShell'

interface SideNavProps {
  navItems: NavItem[]
  activeItemId?: string
  onNavChange?: (item: NavItem) => void
  user?: UserProfile
  drawerWidth: number
}

export default function SideNav({
  navItems,
  activeItemId,
  onNavChange,
  user,
  drawerWidth,
}: SideNavProps) {
  const theme = useTheme()

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      {/* Logo strip */}
      <Box
        sx={{
          background: theme.brand.gradient,
          px: 2,
          py: 2.5,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          minHeight: 64,
        }}
      >
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: 1,
            bgcolor: 'rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon sx={{ color: '#fff', fontSize: 20 }}>bolt</Icon>
        </Box>
        <Typography
          variant="subtitle1"
          sx={{ color: '#fff', fontWeight: 700, letterSpacing: 0.5 }}
        >
          EventPipe
        </Typography>
      </Box>

      {/* Nav items */}
      <List sx={{ flex: 1, px: 1, py: 1 }}>
        {navItems.map((item) => {
          const isActive = item.id === activeItemId
          return (
            <ListItemButton
              key={item.id}
              selected={isActive}
              onClick={() => onNavChange?.(item)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                '&.Mui-selected': {
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  '&:hover': { bgcolor: 'primary.dark' },
                  '& .MuiListItemIcon-root': { color: 'primary.contrastText' },
                },
              }}
            >
              {item.icon && (
                <ListItemIcon sx={{ minWidth: 36, color: isActive ? 'primary.contrastText' : 'text.secondary' }}>
                  <Icon fontSize="small">{item.icon}</Icon>
                </ListItemIcon>
              )}
              <ListItemText
                primary={item.label}
                slotProps={{ primary: { variant: 'body2', sx: { fontWeight: isActive ? 600 : 400 } } }}
              />
            </ListItemButton>
          )
        })}
      </List>

      {/* User profile */}
      {user && (
        <>
          <Divider />
          <Box sx={{ px: 2, py: 1.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar
              src={user.avatarUrl}
              sx={{ width: 36, height: 36, bgcolor: 'secondary.main', fontSize: 14 }}
            >
              {!user.avatarUrl && user.name.charAt(0).toUpperCase()}
            </Avatar>
            <Box sx={{ overflow: 'hidden' }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }} noWrap>
                {user.name}
              </Typography>
              {user.role && (
                <Typography variant="caption" color="text.secondary" noWrap>
                  {user.role}
                </Typography>
              )}
            </Box>
          </Box>
        </>
      )}
    </Drawer>
  )
}
