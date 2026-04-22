import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const meta: Meta<typeof Rating> = {
  title: 'Inputs/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    precision: { control: 'select', options: [0.5, 1] },
    readOnly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    max: { control: 'number' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(3)
    return (
      <Stack spacing={1}>
        <Typography variant="body2">Your rating: {value ?? 'none'}</Typography>
        <Rating value={value} onChange={(_, v) => setValue(v)} />
      </Stack>
    )
  },
}

export const ReadOnly: Story = {
  render: () => (
    <Stack spacing={1}>
      <Rating value={3.5} readOnly />
      <Rating value={4} readOnly />
    </Stack>
  ),
}

export const HalfPrecision: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(2.5)
    return <Rating value={value} precision={0.5} onChange={(_, v) => setValue(v)} />
  },
}

export const Sizes: Story = {
  render: () => (
    <Stack spacing={1}>
      <Rating defaultValue={3} size="small" />
      <Rating defaultValue={3} size="medium" />
      <Rating defaultValue={3} size="large" />
    </Stack>
  ),
}

export const CustomMax: Story = {
  render: () => <Rating defaultValue={6} max={10} />,
}

export const Disabled: Story = {
  args: { value: 3, disabled: true },
}
