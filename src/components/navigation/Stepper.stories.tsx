import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

const meta: Meta<typeof Stepper> = {
  title: 'Navigation/Stepper',
  component: Stepper,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

const steps = ['Event details', 'Tickets & pricing', 'Review & publish']

export const Horizontal: Story = {
  render: () => {
    const [active, setActive] = useState(1)
    return (
      <Box sx={{ width: 560 }}>
        <Stepper activeStep={active}>
          {steps.map((label, i) => (
            <Step key={label} completed={i < active}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ display: 'flex', gap: 1, mt: 3 }}>
          <Button variant="outlined" disabled={active === 0} onClick={() => setActive((s) => s - 1)}>Back</Button>
          <Button variant="contained" disabled={active === steps.length} onClick={() => setActive((s) => s + 1)}>
            {active === steps.length - 1 ? 'Publish' : 'Next'}
          </Button>
          {active === steps.length && (
            <Button variant="text" onClick={() => setActive(0)}>Reset</Button>
          )}
        </Box>
      </Box>
    )
  },
}

export const AlternativeLabel: Story = {
  render: () => (
    <Box sx={{ width: 560 }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}><StepLabel>{label}</StepLabel></Step>
        ))}
      </Stepper>
    </Box>
  ),
}

export const Vertical: Story = {
  render: () => {
    const [active, setActive] = useState(0)
    const content = [
      'Enter the event name, date, location, and a short description.',
      'Set ticket types, quantities, and pricing. You can add multiple tiers.',
      'Review all details before publishing to your audience.',
    ]
    return (
      <Box sx={{ maxWidth: 420 }}>
        <Stepper activeStep={active} orientation="vertical">
          {steps.map((label, i) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography variant="body2" color="text.secondary">{content[i]}</Typography>
                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                  <Button variant="contained" size="small" onClick={() => setActive((s) => s + 1)}>
                    {i === steps.length - 1 ? 'Publish' : 'Continue'}
                  </Button>
                  {i > 0 && <Button size="small" onClick={() => setActive((s) => s - 1)}>Back</Button>}
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {active === steps.length && (
          <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
            <Typography variant="body2">Event published! 🎉</Typography>
            <Button size="small" sx={{ mt: 1 }} onClick={() => setActive(0)}>Create another</Button>
          </Paper>
        )}
      </Box>
    )
  },
}

export const WithError: Story = {
  render: () => (
    <Box sx={{ width: 560 }}>
      <Stepper activeStep={1}>
        <Step completed><StepLabel>Event details</StepLabel></Step>
        <Step><StepLabel error optional={<Typography variant="caption" color="error">Invalid pricing</Typography>}>Tickets & pricing</StepLabel></Step>
        <Step><StepLabel>Review & publish</StepLabel></Step>
      </Stepper>
    </Box>
  ),
}
