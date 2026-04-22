import type { Meta, StoryObj } from '@storybook/react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

const Cell = ({ label, color = 'primary.main' }: { label: string; color?: string }) => (
  <Box sx={{ bgcolor: color, color: 'white', borderRadius: 1, p: 2, textAlign: 'center' }}>
    <Typography variant="caption">{label}</Typography>
  </Box>
)

export const TwelveColumn: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid size={12}><Cell label="12" /></Grid>
      <Grid size={6}><Cell label="6" /></Grid>
      <Grid size={6}><Cell label="6" /></Grid>
      <Grid size={4}><Cell label="4" /></Grid>
      <Grid size={4}><Cell label="4" /></Grid>
      <Grid size={4}><Cell label="4" /></Grid>
      <Grid size={3}><Cell label="3" /></Grid>
      <Grid size={3}><Cell label="3" /></Grid>
      <Grid size={3}><Cell label="3" /></Grid>
      <Grid size={3}><Cell label="3" /></Grid>
    </Grid>
  ),
}

export const Responsive: Story = {
  render: () => (
    <Grid container spacing={2}>
      {['Card A', 'Card B', 'Card C', 'Card D', 'Card E', 'Card F'].map((label, i) => (
        <Grid key={label} size={{ xs: 12, sm: 6, md: 4 }}>
          <Cell label={`${label} (xs=12 sm=6 md=4)`} color={i % 2 === 0 ? 'primary.main' : 'secondary.main'} />
        </Grid>
      ))}
    </Grid>
  ),
}

export const Spacing: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {[1, 2, 4, 8].map((s) => (
        <Box key={s}>
          <Typography variant="caption" color="text.secondary">spacing={s}</Typography>
          <Grid container spacing={s} sx={{ mt: 0.5 }}>
            <Grid size={4}><Cell label="col" /></Grid>
            <Grid size={4}><Cell label="col" /></Grid>
            <Grid size={4}><Cell label="col" /></Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  ),
}

export const Nested: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid size={6}>
        <Cell label="Outer col 1" color="primary.dark" />
      </Grid>
      <Grid size={6}>
        <Grid container spacing={1}>
          <Grid size={12}><Cell label="Nested row 1" color="secondary.main" /></Grid>
          <Grid size={6}><Cell label="Nested 1/2" color="secondary.light" /></Grid>
          <Grid size={6}><Cell label="Nested 1/2" color="secondary.light" /></Grid>
        </Grid>
      </Grid>
    </Grid>
  ),
}
