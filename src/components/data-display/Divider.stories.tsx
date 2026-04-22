import type { Meta, StoryObj } from '@storybook/react'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const meta: Meta<typeof Divider> = {
  title: 'Data Display/Divider',
  component: Divider,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

const Block = ({ label }: { label: string }) => (
  <Typography variant="body2" sx={{ py: 1, color: 'text.secondary' }}>{label}</Typography>
)

export const Default: Story = {
  render: () => (
    <Box sx={{ width: 400 }}>
      <Block label="Section above" />
      <Divider />
      <Block label="Section below" />
    </Box>
  ),
}

export const WithText: Story = {
  render: () => (
    <Box sx={{ width: 400 }}>
      <Block label="Continue with email" />
      <Divider>OR</Divider>
      <Block label="Continue with Google" />
    </Box>
  ),
}

export const Variants: Story = {
  render: () => (
    <Box sx={{ width: 400 }}>
      <Block label="Full width (default)" />
      <Divider />
      <Block label="Inset" />
      <Divider variant="inset" />
      <Block label="Middle" />
      <Divider variant="middle" />
      <Block label="End" />
    </Box>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center', height: 48 }}>
      <Typography>Left</Typography>
      <Divider orientation="vertical" flexItem />
      <Typography>Center</Typography>
      <Divider orientation="vertical" flexItem />
      <Typography>Right</Typography>
    </Stack>
  ),
}

export const TextAlign: Story = {
  render: () => (
    <Box sx={{ width: 400 }}>
      <Divider textAlign="left">Left label</Divider>
      <Box sx={{ py: 1 }} />
      <Divider textAlign="center">Center label</Divider>
      <Box sx={{ py: 1 }} />
      <Divider textAlign="right">Right label</Divider>
    </Box>
  ),
}
