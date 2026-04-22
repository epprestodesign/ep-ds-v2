import type { Meta, StoryObj } from '@storybook/react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import HomeIcon from '@mui/icons-material/Home'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Breadcrumbs>
      <Link underline="hover" color="inherit" href="#">Home</Link>
      <Link underline="hover" color="inherit" href="#">Events</Link>
      <Typography color="text.primary">Summer Festival 2025</Typography>
    </Breadcrumbs>
  ),
}

export const CustomSeparator: Story = {
  render: () => (
    <Stack spacing={2}>
      <Breadcrumbs separator="›">
        <Link underline="hover" color="inherit" href="#">Home</Link>
        <Link underline="hover" color="inherit" href="#">Events</Link>
        <Typography color="text.primary">Details</Typography>
      </Breadcrumbs>
      <Breadcrumbs separator="-">
        <Link underline="hover" color="inherit" href="#">Home</Link>
        <Link underline="hover" color="inherit" href="#">Events</Link>
        <Typography color="text.primary">Details</Typography>
      </Breadcrumbs>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
        <Link underline="hover" color="inherit" href="#">Home</Link>
        <Link underline="hover" color="inherit" href="#">Events</Link>
        <Typography color="text.primary">Details</Typography>
      </Breadcrumbs>
    </Stack>
  ),
}

export const Collapsed: Story = {
  render: () => (
    <Breadcrumbs maxItems={2} aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="#">Home</Link>
      <Link underline="hover" color="inherit" href="#">Events</Link>
      <Link underline="hover" color="inherit" href="#">2025</Link>
      <Link underline="hover" color="inherit" href="#">Summer</Link>
      <Typography color="text.primary">Festival</Typography>
    </Breadcrumbs>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Breadcrumbs>
      <Link underline="hover" color="inherit" href="#" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <HomeIcon fontSize="small" />Home
      </Link>
      <Link underline="hover" color="inherit" href="#">Events</Link>
      <Typography color="text.primary">Summer Festival 2025</Typography>
    </Breadcrumbs>
  ),
}
