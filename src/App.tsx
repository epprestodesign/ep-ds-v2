import { Box, Typography, Button, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function App() {
  const theme = useTheme()

  return (
    <Box sx={{ p: 6, maxWidth: 800, mx: 'auto' }}>
      <Box
        sx={{
          p: 4,
          mb: 4,
          borderRadius: 3,
          background: theme.brand.gradient,
          color: 'white',
        }}
      >
        <Typography variant="h1" sx={{ color: 'inherit', mb: 1 }}>
          EP Design System v2
        </Typography>
        <Typography variant="body1" sx={{ color: 'inherit', opacity: 0.85 }}>
          Open Storybook (<code>npm run storybook</code>) to browse components.
        </Typography>
      </Box>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="outlined" color="primary">Outlined</Button>
        <Button variant="text" color="primary">Text</Button>
      </Stack>
    </Box>
  )
}
