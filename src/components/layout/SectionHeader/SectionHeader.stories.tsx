import type { Meta, StoryObj } from '@storybook/react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import SectionHeader from './SectionHeader'

const meta: Meta<typeof SectionHeader> = {
  title: 'Layout/SectionHeader',
  component: SectionHeader,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'radio', options: ['primary', 'neutral'] },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Compliance',
    color: 'primary',
  },
}

export const Neutral: Story = {
  args: {
    title: 'Room Block Restrictions',
    color: 'neutral',
  },
}

export const WithSubtitle: Story = {
  args: {
    title: 'Registration Event(s)',
    subtitle: 'Link one or more registration system events to this event.',
    color: 'primary',
  },
}

export const InCard: Story = {
  render: () => (
    <Card sx={{ maxWidth: 640 }}>
      <CardContent sx={{ p: 3 }}>
        <SectionHeader title="Compliance" />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField select label="Registered Entity" size="small" defaultValue="tea" sx={{ maxWidth: 280 }}>
            <MenuItem value="tea">Tea,</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>
          <FormControlLabel
            control={<Checkbox defaultChecked size="small" />}
            label={<Typography variant="body2" sx={{ fontWeight: 600 }}>Yes</Typography>}
            sx={{ '& .MuiFormControlLabel-label': { color: 'text.primary' } }}
          />
        </Box>

        <Box sx={{ mt: 3 }}>
          <SectionHeader title="Registration Event(s)" />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField select label="Registration System Event ID" size="small" defaultValue="data" sx={{ flex: 1 }}>
              <MenuItem value="data">Data</MenuItem>
            </TextField>
            <TextField select label="Registration System Event Name (Optional)" size="small" defaultValue="data" sx={{ flex: 1 }}>
              <MenuItem value="data">Data</MenuItem>
            </TextField>
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
            Event IDs are case sensitive
          </Typography>
        </Box>
      </CardContent>
    </Card>
  ),
}
