import type { Meta, StoryObj } from '@storybook/react'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const meta: Meta<typeof Link> = {
  title: 'Navigation/Link',
  component: Link,
  tags: ['autodocs'],
  args: { href: '#', children: 'Link text' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Underline: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <Link href="#" underline="always">Always underlined</Link>
      <Link href="#" underline="hover">Hover underline</Link>
      <Link href="#" underline="none">No underline</Link>
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack spacing={1}>
      <Link href="#" color="primary">primary color</Link>
      <Link href="#" color="secondary">secondary color</Link>
      <Link href="#" color="error">error color</Link>
      <Link href="#" color="inherit">inherit color</Link>
      <Link href="#" color="text.primary">text.primary</Link>
      <Link href="#" color="text.secondary">text.secondary</Link>
    </Stack>
  ),
}

export const Variants: Story = {
  render: () => (
    <Stack spacing={1}>
      <Link href="#" variant="h5">Heading link (h5)</Link>
      <Link href="#" variant="subtitle1">Subtitle link</Link>
      <Link href="#" variant="body1">Body1 link — default for inline text</Link>
      <Link href="#" variant="body2">Body2 link — smaller inline text</Link>
      <Link href="#" variant="caption">Caption link</Link>
    </Stack>
  ),
}

export const InParagraph: Story = {
  render: () => (
    <Typography variant="body1" sx={{ maxWidth: 480 }}>
      Design systems help teams build products faster. Learn more about{' '}
      <Link href="#">Material UI theming</Link> and how to set up a{' '}
      <Link href="#" color="secondary">custom component library</Link> for your team.
    </Typography>
  ),
}
