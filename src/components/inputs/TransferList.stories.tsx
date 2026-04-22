import type { Meta, StoryObj } from '@storybook/react'
import TransferList from './TransferList'

const meta: Meta<typeof TransferList> = {
  title: 'Inputs/TransferList',
  component: TransferList,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomLabels: Story = {
  args: {
    leftLabel: 'Unassigned',
    rightLabel: 'Assigned',
    leftItems: ['Alice', 'Bob', 'Carol', 'Dave', 'Eve'],
    rightItems: ['Frank', 'Grace'],
  },
}

export const StartEmpty: Story = {
  args: {
    leftLabel: 'Available',
    rightLabel: 'Selected',
    leftItems: ['Option A', 'Option B', 'Option C', 'Option D', 'Option E', 'Option F'],
    rightItems: [],
  },
}
