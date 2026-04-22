import type { Meta, StoryObj } from '@storybook/react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'

const meta: Meta<typeof Table> = {
  title: 'Data Display/Table',
  component: Table,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

const rows = [
  { id: 1, name: 'Alice Johnson', role: 'Designer', team: 'Product', status: 'Active' },
  { id: 2, name: 'Bob Smith', role: 'Engineer', team: 'Platform', status: 'Active' },
  { id: 3, name: 'Carol Williams', role: 'Product Manager', team: 'Product', status: 'Away' },
  { id: 4, name: 'Dave Brown', role: 'Marketing', team: 'Growth', status: 'Active' },
  { id: 5, name: 'Eve Davis', role: 'Sales', team: 'Revenue', status: 'Inactive' },
]

const statusColor = (s: string) =>
  s === 'Active' ? 'success' : s === 'Away' ? 'warning' : 'default'

export const Default: Story = {
  render: () => (
    <TableContainer component={Paper} variant="outlined">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Team</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} hover>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.team}</TableCell>
              <TableCell>
                <Chip label={row.status} size="small" color={statusColor(row.status) as 'success' | 'warning' | 'default'} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

export const Dense: Story = {
  render: () => (
    <TableContainer component={Paper} variant="outlined">
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} hover>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

export const WithSortLabels: Story = {
  render: () => (
    <TableContainer component={Paper} variant="outlined">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sortDirection="asc">
              <TableSortLabel active direction="asc">Name</TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel>Role</TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel>Team</TableSortLabel>
            </TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...rows].sort((a, b) => a.name.localeCompare(b.name)).map((row) => (
            <TableRow key={row.id} hover>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.team}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

export const Striped: Story = {
  render: () => (
    <TableContainer component={Paper} variant="outlined">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Team</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={row.id}
              sx={{ bgcolor: i % 2 === 0 ? 'action.hover' : 'transparent' }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.team}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}
