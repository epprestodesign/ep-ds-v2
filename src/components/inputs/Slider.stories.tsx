import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const meta: Meta<typeof Slider> = {
  title: 'Inputs/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'] },
    size: { control: 'select', options: ['small', 'medium'] },
    disabled: { control: 'boolean' },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(30)
    return (
      <Box sx={{ width: 300 }}>
        <Typography variant="body2" gutterBottom>Value: {value}</Typography>
        <Slider value={value} onChange={(_, v) => setValue(v as number)} />
      </Box>
    )
  },
}

export const Range: Story = {
  render: () => {
    const [value, setValue] = useState<number[]>([20, 70])
    return (
      <Box sx={{ width: 300 }}>
        <Typography variant="body2" gutterBottom>Range: {value[0]} – {value[1]}</Typography>
        <Slider value={value} onChange={(_, v) => setValue(v as number[])} />
      </Box>
    )
  },
}

export const WithMarks: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <Slider
        defaultValue={30}
        step={10}
        marks
        min={0}
        max={100}
        valueLabelDisplay="auto"
      />
    </Box>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Slider defaultValue={50} color="primary" />
      <Slider defaultValue={50} color="secondary" />
      <Slider defaultValue={50} color="error" />
      <Slider defaultValue={50} color="success" />
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Slider defaultValue={50} size="small" />
      <Slider defaultValue={50} size="medium" />
    </Stack>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <Slider defaultValue={40} disabled />
    </Box>
  ),
}
