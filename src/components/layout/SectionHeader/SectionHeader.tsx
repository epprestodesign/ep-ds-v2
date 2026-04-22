import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

export interface SectionHeaderProps {
  title: string
  subtitle?: string
  color?: 'primary' | 'neutral'
}

export default function SectionHeader({
  title,
  subtitle,
  color = 'primary',
}: SectionHeaderProps) {
  const titleColor = color === 'primary' ? 'primary.main' : 'text.secondary'

  return (
    <Box sx={{ mb: 2.5 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Typography
          variant="h6"
          sx={{
            color: titleColor,
            fontWeight: 700,
            whiteSpace: 'nowrap',
            lineHeight: 1,
          }}
        >
          {title}
        </Typography>
        <Divider sx={{ flex: 1, borderColor: 'divider' }} />
      </Box>
      {subtitle && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 0.5 }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  )
}
