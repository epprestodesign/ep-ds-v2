import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

function not(a: readonly string[], b: readonly string[]) {
  return a.filter((v) => !b.includes(v))
}
function intersection(a: readonly string[], b: readonly string[]) {
  return a.filter((v) => b.includes(v))
}

const DEFAULT_LEFT = ['React', 'TypeScript', 'MUI', 'Storybook']
const DEFAULT_RIGHT = ['Vite', 'Vitest', 'Styled Components', 'Git']

interface TransferListProps {
  leftLabel?: string
  rightLabel?: string
  leftItems?: string[]
  rightItems?: string[]
}

export default function TransferList({
  leftLabel = 'Available',
  rightLabel = 'Selected',
  leftItems = DEFAULT_LEFT,
  rightItems = DEFAULT_RIGHT,
}: TransferListProps) {
  const [checked, setChecked] = useState<string[]>([])
  const [left, setLeft] = useState(leftItems)
  const [right, setRight] = useState(rightItems)

  const leftChecked = intersection(checked, left)
  const rightChecked = intersection(checked, right)

  const handleToggle = (value: string) => () => {
    const idx = checked.indexOf(value)
    const next = [...checked]
    idx === -1 ? next.push(value) : next.splice(idx, 1)
    setChecked(next)
  }

  const ItemList = ({ items, label }: { items: readonly string[]; label: string }) => (
    <Paper variant="outlined" sx={{ width: 200, overflow: 'hidden' }}>
      <Typography variant="caption" sx={{ px: 2, pt: 1, display: 'block', color: 'text.secondary' }}>
        {label} ({items.length})
      </Typography>
      <List dense sx={{ height: 220, overflow: 'auto' }}>
        {items.map((value) => (
          <ListItem key={value} disablePadding>
            <ListItemButton onClick={handleToggle(value)} dense>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <Checkbox
                  size="small"
                  checked={checked.includes(value)}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={value} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  )

  return (
    <Grid container spacing={2} sx={{ alignItems: 'center' }}>
      <Grid><ItemList items={left} label={leftLabel} /></Grid>

      <Grid>
        <Stack direction="column" spacing={1} sx={{ alignItems: 'center' }}>
          <Button size="small" variant="outlined" onClick={() => { setRight(right.concat(left)); setLeft([]) }} disabled={left.length === 0}>
            ≫ all
          </Button>
          <Button size="small" variant="outlined" onClick={() => { setRight(right.concat(leftChecked)); setLeft(not(left, leftChecked)); setChecked(not(checked, leftChecked)) }} disabled={leftChecked.length === 0}>
            &gt;
          </Button>
          <Button size="small" variant="outlined" onClick={() => { setLeft(left.concat(rightChecked)); setRight(not(right, rightChecked)); setChecked(not(checked, rightChecked)) }} disabled={rightChecked.length === 0}>
            &lt;
          </Button>
          <Button size="small" variant="outlined" onClick={() => { setLeft(left.concat(right)); setRight([]) }} disabled={right.length === 0}>
            ≪ all
          </Button>
        </Stack>
      </Grid>

      <Grid><ItemList items={right} label={rightLabel} /></Grid>
    </Grid>
  )
}
