import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    count: { control: { type: 'number', min: 1, max: 20 } },
    color: { control: 'select', options: ['standard', 'primary', 'secondary'] },
    shape: { control: 'select', options: ['circular', 'rounded'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    variant: { control: 'select', options: ['text', 'outlined'] },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { count: 10 },
}

export const Colors: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} color="standard" />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
    </Stack>
  ),
}

export const Variants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} variant="text" color="primary" />
      <Pagination count={10} variant="outlined" color="primary" />
      <Pagination count={10} variant="outlined" shape="rounded" color="primary" />
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} size="small" />
      <Pagination count={10} size="medium" />
      <Pagination count={10} size="large" />
    </Stack>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    return (
      <Stack spacing={2}>
        <Typography variant="body2">Current page: <strong>{page}</strong></Typography>
        <Pagination count={10} page={page} color="primary" onChange={(_, p) => setPage(p)} />
      </Stack>
    )
  },
}
