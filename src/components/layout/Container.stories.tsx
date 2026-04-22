import type { Meta, StoryObj } from '@storybook/react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj<typeof meta>

const ContentBlock = ({ label }: { label: string }) => (
  <Box sx={{ bgcolor: 'action.hover', borderRadius: 2, p: 3, textAlign: 'center' }}>
    <Typography variant="body2" color="text.secondary">{label}</Typography>
  </Box>
)

export const MaxWidths: Story = {
  render: () => (
    <Stack spacing={2} sx={{ py: 2, bgcolor: 'background.default' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((mw) => (
        <Container key={mw} maxWidth={mw}>
          <ContentBlock label={`maxWidth="${mw}"`} />
        </Container>
      ))}
    </Stack>
  ),
}

export const Fixed: Story = {
  render: () => (
    <Box sx={{ bgcolor: 'background.default', py: 2 }}>
      <Container fixed>
        <ContentBlock label='fixed — snaps to breakpoints instead of fluid scaling' />
      </Container>
    </Box>
  ),
}

export const Centered: Story = {
  render: () => (
    <Box sx={{ bgcolor: 'background.default', py: 4 }}>
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>Centered content</Typography>
          <Typography variant="body1" color="text.secondary">
            Container centers its children horizontally and applies consistent horizontal padding on both sides.
          </Typography>
        </Box>
      </Container>
    </Box>
  ),
}
