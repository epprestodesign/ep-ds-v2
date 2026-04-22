import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import Icon from '@mui/material/Icon'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import epLogo from '../../../assets/ep-logo.svg'
import type { NavItem, UserProfile } from './AppShell'

// Figma design tokens for the sidebar shell
const SIDEBAR_BG = '#01123D'
const SIDEBAR_TEXT_INACTIVE = '#B5BAC7'
const SIDEBAR_BORDER = '#D5D7DF'
const SIDEBAR_FOOTER_BORDER = '#B5BAC7'
const ACTIVE_BG = '#00ADB3'

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
          bgcolor: SIDEBAR_BG,
          borderRight: 'none',
        },
      }}
    >
      {/* Logo area — white panel */}
      <Box
        sx={{
          bgcolor: '#FFFFFF',
          px: 2,
          display: 'flex',
          alignItems: 'center',
          minHeight: 64,
          flexShrink: 0,
        }}
      >
        <Box
          component="img"
          src={epLogo}
          alt="EventPipe"
          sx={{ height: 22, width: 'auto', display: 'block' }}
        />
      </Box>

      {/* Separator */}
      <Divider sx={{ borderColor: SIDEBAR_BORDER }} />

      {/* Nav items */}
      <List sx={{ flex: 1, px: 0, py: 1, overflowY: 'auto' }}>
        {navItems.map((item) => {
          const isActive = item.id === activeItemId
          return (
            <ListItemButton
              key={item.id}
              selected={isActive}
              onClick={() => onNavChange?.(item)}
              sx={{
                borderRadius: 1.5,
                mb: 0.25,
                px: 2,
                py: 1,
                color: isActive ? '#FFFFFF' : SIDEBAR_TEXT_INACTIVE,
                '&.Mui-selected': {
                  bgcolor: ACTIVE_BG,
                  '&:hover': { bgcolor: '#009AA0' },
                },
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.07)',
                },
              }}
            >
              {item.icon && (
                <ListItemIcon
                  sx={{
                    minWidth: 32,
                    color: isActive ? '#FFFFFF' : SIDEBAR_TEXT_INACTIVE,
                  }}
                >
                  <Icon fontSize="small">{item.icon}</Icon>
                </ListItemIcon>
              )}
              <ListItemText
                primary={item.label}
                slotProps={{
                  primary: {
                    sx: {
                      fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
                      fontSize: 16,
                      fontWeight: isActive ? 600 : 400,
                      color: 'inherit',
                    },
                  },
                }}
              />
            </ListItemButton>
          )
        })}
      </List>

      {/* Company Settings / User footer */}
      <Box
        sx={{
          bgcolor: 'rgba(255,255,255,0.06)',
          borderTop: `1px solid ${SIDEBAR_FOOTER_BORDER}`,
          px: 2,
          py: 1.5,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          flexShrink: 0,
          cursor: 'pointer',
          '&:hover': { bgcolor: 'rgba(255,255,255,0.10)' },
        }}
      >
        <Icon sx={{ color: SIDEBAR_TEXT_INACTIVE, fontSize: 20 }}>settings</Icon>
        <Box sx={{ flex: 1, overflow: 'hidden' }}>
          <Typography
            variant="body2"
            sx={{ color: SIDEBAR_TEXT_INACTIVE, fontSize: 15 }}
            noWrap
          >
            {user?.name ?? 'Company Settings'}
          </Typography>
          {user?.role && (
            <Typography variant="caption" sx={{ color: SIDEBAR_TEXT_INACTIVE, opacity: 0.7 }} noWrap>
              {user.role}
            </Typography>
          )}
        </Box>
        <Icon sx={{ color: SIDEBAR_TEXT_INACTIVE, fontSize: 16 }}>keyboard_arrow_down</Icon>
      </Box>
    </Drawer>
  )
}
