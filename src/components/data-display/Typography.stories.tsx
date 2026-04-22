import type { Meta, StoryObj } from '@storybook/react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'

const meta: Meta<typeof Typography> = {
  title: 'Data Display/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'button', 'caption', 'overline'],
    },
    color: { control: 'select', options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'text.primary', 'text.secondary', 'text.disabled'] },
    align: { control: 'select', options: ['left', 'center', 'right', 'justify'] },
  },
  args: { children: 'The quick brown fox jumps over the lazy dog.' },
}
export default meta
type Story = StoryObj<typeof meta>

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={1}>
      {([
        { variant: 'h1', label: 'h1 — Display' },
        { variant: 'h2', label: 'h2 — Title' },
        { variant: 'h3', label: 'h3 — Heading' },
        { variant: 'h4', label: 'h4 — Subheading' },
        { variant: 'h5', label: 'h5 — Section' },
        { variant: 'h6', label: 'h6 — Subsection' },
      ] as const).map(({ variant, label }) => (
        <Box key={variant}>
          <Typography variant="caption" color="text.disabled">{label}</Typography>
          <Typography variant={variant}>The Quick Brown Fox</Typography>
          <Divider sx={{ mt: 1 }} />
        </Box>
      ))}
      {([
        { variant: 'subtitle1', label: 'subtitle1' },
        { variant: 'subtitle2', label: 'subtitle2' },
        { variant: 'body1', label: 'body1' },
        { variant: 'body2', label: 'body2' },
        { variant: 'button', label: 'button' },
        { variant: 'caption', label: 'caption' },
        { variant: 'overline', label: 'overline' },
      ] as const).map(({ variant, label }) => (
        <Box key={variant}>
          <Typography variant="caption" color="text.disabled">{label}</Typography>
          <Typography variant={variant} sx={{ display: 'block' }}>
            The quick brown fox jumps over the lazy dog.
          </Typography>

        </Box>
      ))}
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack spacing={1}>
      <Typography color="text.primary">text.primary — Main content</Typography>
      <Typography color="text.secondary">text.secondary — Supporting content</Typography>
      <Typography color="text.disabled">text.disabled — Disabled state</Typography>
      <Typography color="primary">primary — Brand color</Typography>
      <Typography color="secondary">secondary — Secondary brand</Typography>
      <Typography color="error">error — Destructive or invalid</Typography>
      <Typography color="warning.main">warning — Caution</Typography>
      <Typography color="success.main">success — Confirmed</Typography>
      <Typography color="info.main">info — Informational</Typography>
    </Stack>
  ),
}

export const Alignment: Story = {
  render: () => (
    <Box sx={{ width: 400 }}>
      <Typography align="left" variant="body1" gutterBottom>Left aligned text. This is the default alignment for most content.</Typography>
      <Typography align="center" variant="body1" gutterBottom>Center aligned. Good for headings and short callouts.</Typography>
      <Typography align="right" variant="body1" gutterBottom>Right aligned. Useful for numbers in tables or RTL content.</Typography>
      <Typography align="justify" variant="body1">Justified text distributes words evenly across the full width of the container for a clean edge on both sides.</Typography>
    </Box>
  ),
}

export const Interactive: Story = {
  args: { variant: 'body1' },
}
