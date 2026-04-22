import { createTheme } from '@mui/material/styles'
import palette from './palette'
import typography from './typography'
import { spacingUnit } from './spacing'
import components from './components'

// Augment MUI Theme with custom brand tokens
declare module '@mui/material/styles' {
  interface Theme {
    brand: {
      gradient: string
      radius: { sm: number; md: number; lg: number }
    }
  }
  interface ThemeOptions {
    brand?: {
      gradient?: string
      radius?: { sm?: number; md?: number; lg?: number }
    }
  }
}

// Step 1: base theme — resolves palette, typography, spacing
let theme = createTheme({
  palette,
  typography,
  spacing: spacingUnit,
  shape: { borderRadius: 8 },
  components,
})

// Step 2: inject brand tokens that reference resolved palette values
theme = createTheme(theme, {
  brand: {
    gradient: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    radius: { sm: 4, md: 8, lg: 16 },
  },
})

export default theme
