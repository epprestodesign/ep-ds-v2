import type { Meta, StoryObj } from '@storybook/react'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Inputs/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['contained', 'outlined', 'text'] },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

const Buttons = () => (
  <>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </>
)

export const Contained: Story = {
  render: () => (
    <ButtonGroup variant="contained">
      <Buttons />
    </ButtonGroup>
  ),
}

export const Outlined: Story = {
  render: () => (
    <ButtonGroup variant="outlined">
      <Buttons />
    </ButtonGroup>
  ),
}

export const Text: Story = {
  render: () => (
    <ButtonGroup variant="text">
      <Buttons />
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Stack direction="row" spacing={4}>
      <ButtonGroup variant="contained" orientation="vertical">
        <Buttons />
      </ButtonGroup>
      <ButtonGroup variant="outlined" orientation="vertical">
        <Buttons />
      </ButtonGroup>
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2}>
      <ButtonGroup variant="outlined" size="small"><Buttons /></ButtonGroup>
      <ButtonGroup variant="outlined" size="medium"><Buttons /></ButtonGroup>
      <ButtonGroup variant="outlined" size="large"><Buttons /></ButtonGroup>
    </Stack>
  ),
}
