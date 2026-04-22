import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

const meta: Meta<typeof RadioGroup> = {
  title: 'Inputs/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('option1')
    return (
      <FormControl>
        <FormLabel>Options</FormLabel>
        <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
          <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
        </RadioGroup>
      </FormControl>
    )
  },
}

export const Row: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Layout</FormLabel>
      <RadioGroup defaultValue="a" row>
        <FormControlLabel value="a" control={<Radio />} label="Option A" />
        <FormControlLabel value="b" control={<Radio />} label="Option B" />
        <FormControlLabel value="c" control={<Radio />} label="Option C" />
      </RadioGroup>
    </FormControl>
  ),
}

export const WithDisabled: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Availability</FormLabel>
      <RadioGroup defaultValue="standard">
        <FormControlLabel value="standard" control={<Radio />} label="Standard" />
        <FormControlLabel value="premium" control={<Radio />} label="Premium" />
        <FormControlLabel value="enterprise" control={<Radio />} label="Enterprise" disabled />
      </RadioGroup>
    </FormControl>
  ),
}

export const Colors: Story = {
  render: () => (
    <RadioGroup defaultValue="primary" row>
      <FormControlLabel value="primary" control={<Radio color="primary" />} label="Primary" />
      <FormControlLabel value="secondary" control={<Radio color="secondary" />} label="Secondary" />
      <FormControlLabel value="success" control={<Radio color="success" />} label="Success" />
      <FormControlLabel value="error" control={<Radio color="error" />} label="Error" />
    </RadioGroup>
  ),
}
