import type { Meta, StoryObj } from '@storybook/react'
import Icon from '@mui/material/Icon'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import Divider from '@mui/material/Divider'

const meta: Meta<typeof Icon> = {
  title: 'Data Display/Icons',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    fontSize: { control: 'select', options: ['small', 'medium', 'large', 'inherit'] },
    color: { control: 'select', options: ['inherit', 'primary', 'secondary', 'error', 'warning', 'info', 'success', 'disabled'] },
  },
}
export default meta
type Story = StoryObj<typeof meta>

const categories: { label: string; icons: string[] }[] = [
  {
    label: 'Navigation',
    icons: ['home', 'menu', 'arrow_back', 'arrow_forward', 'arrow_upward', 'arrow_downward', 'chevron_left', 'chevron_right', 'expand_more', 'expand_less', 'close', 'search', 'more_vert', 'more_horiz'],
  },
  {
    label: 'Action',
    icons: ['add', 'edit', 'delete', 'settings', 'favorite', 'favorite_border', 'star', 'star_border', 'share', 'bookmark', 'bookmark_border', 'filter_list', 'sort', 'refresh', 'download', 'upload'],
  },
  {
    label: 'Content',
    icons: ['save', 'print', 'content_copy', 'content_paste', 'content_cut', 'create', 'drafts', 'inbox', 'send', 'archive', 'flag', 'link', 'attach_file', 'image', 'photo_camera', 'videocam'],
  },
  {
    label: 'Communication',
    icons: ['email', 'phone', 'chat', 'chat_bubble', 'notifications', 'notifications_none', 'notifications_off', 'message', 'forum', 'call', 'voicemail', 'contact_mail', 'contacts', 'group', 'person', 'person_add'],
  },
  {
    label: 'Status & Feedback',
    icons: ['check', 'check_circle', 'check_circle_outline', 'error', 'error_outline', 'warning', 'info', 'info_outlined', 'help', 'help_outline', 'report', 'cancel', 'block', 'lock', 'lock_open'],
  },
  {
    label: 'Media',
    icons: ['play_arrow', 'pause', 'stop', 'skip_next', 'skip_previous', 'volume_up', 'volume_off', 'fullscreen', 'picture_in_picture', 'mic', 'mic_off', 'headphones', 'music_note', 'movie', 'live_tv', 'radio'],
  },
  {
    label: 'Data & Charts',
    icons: ['bar_chart', 'pie_chart', 'show_chart', 'timeline', 'dashboard', 'assessment', 'table_chart', 'grid_on', 'format_list_bulleted', 'format_list_numbered', 'view_module', 'view_list', 'view_agenda', 'view_column', 'calendar_today', 'date_range'],
  },
  {
    label: 'Places & Travel',
    icons: ['location_on', 'location_off', 'map', 'directions', 'near_me', 'place', 'navigation', 'explore', 'flight', 'hotel', 'restaurant', 'local_cafe', 'shopping_cart', 'store', 'business', 'home_work'],
  },
]

const IconTile = ({ name }: { name: string }) => (
  <Tooltip title={name} placement="top">
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0.75,
        p: 1.5,
        borderRadius: 2,
        cursor: 'default',
        minWidth: 72,
        '&:hover': { bgcolor: 'action.hover' },
      }}
    >
      <Icon>{name}</Icon>
      <Typography variant="caption" sx={{ fontSize: '0.6rem', textAlign: 'center', color: 'text.secondary', lineHeight: 1.2 }}>
        {name}
      </Typography>
    </Box>
  </Tooltip>
)

export const Gallery: Story = {
  render: () => (
    <Stack spacing={3}>
      {categories.map(({ label, icons }) => (
        <Box key={label}>
          <Typography variant="overline" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            {label}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {icons.map((name) => <IconTile key={name} name={name} />)}
          </Box>
          <Divider sx={{ mt: 2 }} />
        </Box>
      ))}
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={4} sx={{ alignItems: 'center' }}>
      {(['small', 'medium', 'large'] as const).map((size) => (
        <Stack key={size} sx={{ alignItems: 'center' }} spacing={1}>
          <Icon fontSize={size}>star</Icon>
          <Typography variant="caption" color="text.secondary">{size}</Typography>
        </Stack>
      ))}
      <Stack sx={{ alignItems: 'center' }} spacing={1}>
        <Icon sx={{ fontSize: 48 }}>star</Icon>
        <Typography variant="caption" color="text.secondary">48px</Typography>
      </Stack>
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'disabled'] as const).map((color) => (
        <Stack key={color} sx={{ alignItems: 'center' }} spacing={0.5}>
          <Icon color={color}>favorite</Icon>
          <Typography variant="caption" color="text.secondary">{color}</Typography>
        </Stack>
      ))}
    </Stack>
  ),
}

export const Interactive: Story = {
  args: { children: 'home', fontSize: 'medium', color: 'primary' },
}
