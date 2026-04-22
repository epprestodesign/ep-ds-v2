import type { Meta, StoryObj } from '@storybook/react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Tooltip from '@mui/material/Tooltip'

import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import FavoriteIcon from '@mui/icons-material/Favorite'
import StarIcon from '@mui/icons-material/Star'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import CloseIcon from '@mui/icons-material/Close'
import CheckIcon from '@mui/icons-material/Check'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'
import ChatIcon from '@mui/icons-material/Chat'
import ShareIcon from '@mui/icons-material/Share'
import DownloadIcon from '@mui/icons-material/Download'
import UploadIcon from '@mui/icons-material/Upload'
import SaveIcon from '@mui/icons-material/Save'
import PrintIcon from '@mui/icons-material/Print'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import ContentCutIcon from '@mui/icons-material/ContentCut'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import LockIcon from '@mui/icons-material/Lock'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import InfoIcon from '@mui/icons-material/Info'
import WarningIcon from '@mui/icons-material/Warning'
import ErrorIcon from '@mui/icons-material/Error'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import FilterListIcon from '@mui/icons-material/FilterList'
import SortIcon from '@mui/icons-material/Sort'
import DashboardIcon from '@mui/icons-material/Dashboard'
import BarChartIcon from '@mui/icons-material/BarChart'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const icons = [
  { Icon: HomeIcon, name: 'Home' },
  { Icon: SearchIcon, name: 'Search' },
  { Icon: SettingsIcon, name: 'Settings' },
  { Icon: PersonIcon, name: 'Person' },
  { Icon: FavoriteIcon, name: 'Favorite' },
  { Icon: StarIcon, name: 'Star' },
  { Icon: AddIcon, name: 'Add' },
  { Icon: EditIcon, name: 'Edit' },
  { Icon: DeleteIcon, name: 'Delete' },
  { Icon: CloseIcon, name: 'Close' },
  { Icon: CheckIcon, name: 'Check' },
  { Icon: MenuIcon, name: 'Menu' },
  { Icon: NotificationsIcon, name: 'Notifications' },
  { Icon: MailIcon, name: 'Mail' },
  { Icon: PhoneIcon, name: 'Phone' },
  { Icon: ChatIcon, name: 'Chat' },
  { Icon: ShareIcon, name: 'Share' },
  { Icon: DownloadIcon, name: 'Download' },
  { Icon: UploadIcon, name: 'Upload' },
  { Icon: SaveIcon, name: 'Save' },
  { Icon: PrintIcon, name: 'Print' },
  { Icon: ContentCopyIcon, name: 'ContentCopy' },
  { Icon: ContentPasteIcon, name: 'ContentPaste' },
  { Icon: ContentCutIcon, name: 'ContentCut' },
  { Icon: VisibilityIcon, name: 'Visibility' },
  { Icon: VisibilityOffIcon, name: 'VisibilityOff' },
  { Icon: LockIcon, name: 'Lock' },
  { Icon: LockOpenIcon, name: 'LockOpen' },
  { Icon: InfoIcon, name: 'Info' },
  { Icon: WarningIcon, name: 'Warning' },
  { Icon: ErrorIcon, name: 'Error' },
  { Icon: CheckCircleIcon, name: 'CheckCircle' },
  { Icon: ArrowBackIcon, name: 'ArrowBack' },
  { Icon: ArrowForwardIcon, name: 'ArrowForward' },
  { Icon: ExpandMoreIcon, name: 'ExpandMore' },
  { Icon: ChevronRightIcon, name: 'ChevronRight' },
  { Icon: FilterListIcon, name: 'FilterList' },
  { Icon: SortIcon, name: 'Sort' },
  { Icon: DashboardIcon, name: 'Dashboard' },
  { Icon: BarChartIcon, name: 'BarChart' },
  { Icon: CalendarTodayIcon, name: 'CalendarToday' },
  { Icon: LocationOnIcon, name: 'LocationOn' },
]

const meta: Meta = {
  title: 'Data Display/Icons',
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Gallery: Story = {
  render: () => (
    <Grid container spacing={2}>
      {icons.map(({ Icon, name }) => (
        <Grid key={name}>
          <Tooltip title={name} placement="top">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 0.5,
                p: 1.5,
                borderRadius: 1,
                cursor: 'default',
                '&:hover': { bgcolor: 'action.hover' },
                minWidth: 72,
              }}
            >
              <Icon />
              <Typography variant="caption" sx={{ fontSize: '0.65rem', textAlign: 'center' }}>
                {name}
              </Typography>
            </Box>
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
      <Stack sx={{ alignItems: 'center' }} spacing={0.5}>
        <StarIcon fontSize="small" />
        <Typography variant="caption">small</Typography>
      </Stack>
      <Stack sx={{ alignItems: 'center' }} spacing={0.5}>
        <StarIcon fontSize="medium" />
        <Typography variant="caption">medium</Typography>
      </Stack>
      <Stack sx={{ alignItems: 'center' }} spacing={0.5}>
        <StarIcon fontSize="large" />
        <Typography variant="caption">large</Typography>
      </Stack>
      <Stack sx={{ alignItems: 'center' }} spacing={0.5}>
        <StarIcon sx={{ fontSize: 48 }} />
        <Typography variant="caption">48px</Typography>
      </Stack>
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <FavoriteIcon color="primary" />
      <FavoriteIcon color="secondary" />
      <FavoriteIcon color="error" />
      <FavoriteIcon color="warning" />
      <FavoriteIcon color="info" />
      <FavoriteIcon color="success" />
      <FavoriteIcon color="disabled" />
    </Stack>
  ),
}
