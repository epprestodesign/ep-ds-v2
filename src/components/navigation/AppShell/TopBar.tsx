import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Icon from '@mui/material/Icon'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

// Figma design tokens for the top bar
const TOPBAR_BORDER = '#D5D7DF'
const TITLE_COLOR = '#2A2D33'
const USER_COLOR = '#8B919F'

interface TopBarProps {
  pageTitle?: string
  userName?: string
  drawerWidth: number
}

export default function TopBar({
  pageTitle = 'Dashboard',
  userName,
  drawerWidth,
}: TopBarProps) {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        bgcolor: '#FFFFFF',
        borderBottom: `1px solid ${TOPBAR_BORDER}`,
        color: TITLE_COLOR,
      }}
    >
      <Toolbar sx={{ pl: 0, pr: 3, minHeight: '64px !important', gap: 2 }}>
        {/* Vertical divider separating logo panel from top bar content */}
        <Divider orientation="vertical" flexItem sx={{ borderColor: TOPBAR_BORDER, mr: 1 }} />

        {/* Page title + dropdown */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flex: 1 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, fontSize: 18, color: TITLE_COLOR, lineHeight: 1 }}
          >
            {pageTitle}
          </Typography>
          <Icon sx={{ color: TITLE_COLOR, fontSize: 20, mt: '1px' }}>keyboard_arrow_down</Icon>
        </Box>

        {/* Search bar */}
        <OutlinedInput
          placeholder="Search"
          size="small"
          sx={{
            width: 200,
            height: 36,
            fontSize: 13,
            bgcolor: '#FFFFFF',
            borderRadius: '19px',
            '& .MuiOutlinedInput-notchedOutline': { borderColor: TOPBAR_BORDER },
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#B5BAC7' },
          }}
          startAdornment={
            <InputAdornment position="start">
              <Icon sx={{ fontSize: 16, color: USER_COLOR }}>search</Icon>
            </InputAdornment>
          }
        />

        {/* User name + dropdown */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            cursor: 'pointer',
            '&:hover': { opacity: 0.8 },
          }}
        >
          <Typography variant="body2" sx={{ color: USER_COLOR, fontSize: 15, fontWeight: 400 }}>
            {userName ?? 'Mike Addesa'}
          </Typography>
          <IconButton size="small" sx={{ p: 0.25 }}>
            <Icon sx={{ fontSize: 18, color: USER_COLOR }}>keyboard_arrow_down</Icon>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
