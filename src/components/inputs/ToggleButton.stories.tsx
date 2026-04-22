import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Stack from '@mui/material/Stack'

const meta: Meta<typeof ToggleButtonGroup> = {
  title: 'Inputs/ToggleButton',
  component: ToggleButtonGroup,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Exclusive: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>('left')
    return (
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={(_, v) => { if (v !== null) setValue(v) }}
      >
        <ToggleButton value="left">Left</ToggleButton>
        <ToggleButton value="center">Center</ToggleButton>
        <ToggleButton value="right">Right</ToggleButton>
      </ToggleButtonGroup>
    )
  },
}

export const Multiple: Story = {
  render: () => {
    const [formats, setFormats] = useState<string[]>(['bold'])
    return (
      <ToggleButtonGroup
        value={formats}
        onChange={(_, v) => setFormats(v)}
      >
        <ToggleButton value="bold">Bold</ToggleButton>
        <ToggleButton value="italic">Italic</ToggleButton>
        <ToggleButton value="underline">Underline</ToggleButton>
        <ToggleButton value="strike">Strikethrough</ToggleButton>
      </ToggleButtonGroup>
    )
  },
}

export const Vertical: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>('top')
    return (
      <ToggleButtonGroup
        orientation="vertical"
        value={value}
        exclusive
        onChange={(_, v) => { if (v !== null) setValue(v) }}
      >
        <ToggleButton value="top">Top</ToggleButton>
        <ToggleButton value="middle">Middle</ToggleButton>
        <ToggleButton value="bottom">Bottom</ToggleButton>
      </ToggleButtonGroup>
    )
  },
}

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2}>
      <ToggleButtonGroup size="small" exclusive defaultValue="a">
        <ToggleButton value="a">Small</ToggleButton>
        <ToggleButton value="b">Option</ToggleButton>
        <ToggleButton value="c">Group</ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup size="medium" exclusive defaultValue="a">
        <ToggleButton value="a">Medium</ToggleButton>
        <ToggleButton value="b">Option</ToggleButton>
        <ToggleButton value="c">Group</ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup size="large" exclusive defaultValue="a">
        <ToggleButton value="a">Large</ToggleButton>
        <ToggleButton value="b">Option</ToggleButton>
        <ToggleButton value="c">Group</ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  ),
}

export const Disabled: Story = {
  render: () => (
    <ToggleButtonGroup value="b" exclusive disabled>
      <ToggleButton value="a">Option A</ToggleButton>
      <ToggleButton value="b">Option B</ToggleButton>
      <ToggleButton value="c">Option C</ToggleButton>
    </ToggleButtonGroup>
  ),
}
