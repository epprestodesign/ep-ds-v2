import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const meta: Meta<typeof Accordion> = {
  title: 'Surfaces/Accordion',
  component: Accordion,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

const items = [
  { id: 'p1', title: 'What is a design system?', body: 'A design system is a collection of reusable components and guidelines that help teams build consistent user interfaces efficiently.' },
  { id: 'p2', title: 'Why use MUI?', body: 'MUI provides a comprehensive set of pre-built React components that follow Material Design principles, saving development time and ensuring consistency.' },
  { id: 'p3', title: 'How do I customize the theme?', body: 'Use createTheme() to define your brand colors, typography, spacing, and component overrides. Wrap your app in ThemeProvider to apply it globally.' },
]

export const Default: Story = {
  render: () => (
    <>
      {items.map(({ id, title, body }) => (
        <Accordion key={id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle2">{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">{body}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string | false>(false)
    return (
      <>
        {items.map(({ id, title, body }) => (
          <Accordion
            key={id}
            expanded={expanded === id}
            onChange={(_, isExpanded) => setExpanded(isExpanded ? id : false)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle2">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">{body}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </>
    )
  },
}

export const WithDisabled: Story = {
  render: () => (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle2">Enabled panel</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">This panel is open and interactive.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle2">Disabled panel</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle2">Another enabled panel</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">This panel is also interactive.</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  ),
}
