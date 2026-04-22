import type { Meta, StoryObj } from '@storybook/react'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Severities: Story = {
  render: () => (
    <Stack spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Stack>
  ),
}

export const Variants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Alert variant="standard" severity="info">Standard variant</Alert>
      <Alert variant="filled" severity="info">Filled variant</Alert>
      <Alert variant="outlined" severity="info">Outlined variant</Alert>
    </Stack>
  ),
}

export const WithTitle: Story = {
  render: () => (
    <Stack spacing={2}>
      <Alert severity="error"><AlertTitle>Error</AlertTitle>Something went wrong — please try again.</Alert>
      <Alert severity="warning"><AlertTitle>Warning</AlertTitle>Your session will expire in 5 minutes.</Alert>
      <Alert severity="info"><AlertTitle>Info</AlertTitle>A new version is available. Refresh to update.</Alert>
      <Alert severity="success"><AlertTitle>Success</AlertTitle>Your changes have been saved.</Alert>
    </Stack>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Stack spacing={2}>
      <Alert severity="warning" action={<Button color="inherit" size="small">Undo</Button>}>
        File deleted successfully.
      </Alert>
      <Alert severity="info" onClose={() => {}}>
        Dismissible alert — click the × to close.
      </Alert>
    </Stack>
  ),
}

export const FilledSeverities: Story = {
  render: () => (
    <Stack spacing={2}>
      <Alert variant="filled" severity="error">Error</Alert>
      <Alert variant="filled" severity="warning">Warning</Alert>
      <Alert variant="filled" severity="info">Info</Alert>
      <Alert variant="filled" severity="success">Success</Alert>
    </Stack>
  ),
}
