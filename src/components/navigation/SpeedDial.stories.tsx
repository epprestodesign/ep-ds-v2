import type { Meta, StoryObj } from '@storybook/react'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import SaveIcon from '@mui/icons-material/Save'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const meta: Meta<typeof SpeedDial> = {
  title: 'Navigation/SpeedDial',
  component: SpeedDial,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

const actions = [
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <DeleteIcon />, name: 'Delete' },
]

export const Default: Story = {
  render: () => (
    <Box sx={{ height: 280, position: 'relative', border: '1px dashed', borderColor: 'divider', borderRadius: 2 }}>
      <SpeedDial ariaLabel="Actions" icon={<SpeedDialIcon />} sx={{ position: 'absolute', bottom: 16, right: 16 }}>
        {actions.map((a) => <SpeedDialAction key={a.name} icon={a.icon} title={a.name} />)}
      </SpeedDial>
    </Box>
  ),
}

export const Directions: Story = {
  render: () => (
    <Stack direction="row" spacing={4} sx={{ justifyContent: 'center', pt: 4 }}>
      {(['up', 'right', 'down', 'left'] as const).map((dir) => (
        <Box key={dir} sx={{ height: 200, width: 160, position: 'relative', border: '1px dashed', borderColor: 'divider', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SpeedDial ariaLabel={dir} icon={<SpeedDialIcon />} direction={dir} sx={{ position: 'absolute', bottom: dir === 'up' ? 16 : 'auto', top: dir === 'down' ? 16 : 'auto', right: dir === 'left' ? 16 : 'auto', left: dir === 'right' ? 16 : 'auto' }}>
            {actions.slice(0, 3).map((a) => <SpeedDialAction key={a.name} icon={a.icon} title={a.name} />)}
          </SpeedDial>
        </Box>
      ))}
    </Stack>
  ),
}

export const WithEditIcon: Story = {
  render: () => (
    <Box sx={{ height: 240, position: 'relative', border: '1px dashed', borderColor: 'divider', borderRadius: 2 }}>
      <SpeedDial ariaLabel="Edit actions" icon={<SpeedDialIcon openIcon={<EditIcon />} />} sx={{ position: 'absolute', bottom: 16, right: 16 }}>
        <SpeedDialAction icon={<SaveIcon />} title="Save" />
        <SpeedDialAction icon={<ShareIcon />} title="Share" />
      </SpeedDial>
    </Box>
  ),
}
