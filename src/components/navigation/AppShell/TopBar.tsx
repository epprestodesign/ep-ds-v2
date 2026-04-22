import AppBar from '@mui/material/AppBar'
import Icon from '@mui/material/Icon'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

interface TopBarProps {
  pageTitle?: string
  drawerWidth: number
}

export default function TopBar({ pageTitle = 'Dashboard', drawerWidth }: TopBarProps) {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        borderBottom: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        color: 'text.primary',
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flex: 1, fontWeight: 600 }}>
          {pageTitle}
        </Typography>
        <Tooltip title="Notifications">
          <IconButton size="small" color="inherit">
            <Icon fontSize="small">notifications_none</Icon>
          </IconButton>
        </Tooltip>
        <Tooltip title="Settings">
          <IconButton size="small" color="inherit" sx={{ ml: 0.5 }}>
            <Icon fontSize="small">settings</Icon>
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  )
}
