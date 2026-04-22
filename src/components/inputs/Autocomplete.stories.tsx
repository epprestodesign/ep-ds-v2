import type { Meta, StoryObj } from '@storybook/react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

const films = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Dark Knight',
  'Pulp Fiction',
  'Forrest Gump',
  'Inception',
  'The Matrix',
]

const meta: Meta<typeof Autocomplete> = {
  title: 'Inputs/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Autocomplete
      options={films}
      sx={{ width: 320 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  ),
}

export const FreeSolo: Story = {
  render: () => (
    <Autocomplete
      freeSolo
      options={films}
      sx={{ width: 320 }}
      renderInput={(params) => <TextField {...params} label="Search or type anything" />}
    />
  ),
}

export const Multiple: Story = {
  render: () => (
    <Autocomplete
      multiple
      options={films}
      sx={{ width: 400 }}
      renderInput={(params) => <TextField {...params} label="Favorite films" />}
    />
  ),
}

export const Disabled: Story = {
  render: () => (
    <Autocomplete
      disabled
      options={films}
      sx={{ width: 320 }}
      renderInput={(params) => <TextField {...params} label="Disabled" />}
    />
  ),
}
