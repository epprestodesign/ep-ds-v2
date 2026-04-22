import type { Components, Theme } from '@mui/material/styles'

const components: Components<Theme> = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: 4,
        paddingInline: 24,
        paddingBlock: 10,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 4,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: 'outlined',
      size: 'small',
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 6,
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 12,
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        borderRight: 'none',
        boxShadow: '2px 0 8px rgba(0,0,0,0.08)',
      },
    },
  },
}

export default components
