import type { Meta, StoryObj } from '@storybook/react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const meta: Meta<typeof Card> = {
  title: 'Surfaces/Card',
  component: Card,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card sx={{ maxWidth: 360 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Card title</Typography>
        <Typography variant="body2" color="text.secondary">
          Cards contain content and actions about a single subject. They're a convenient way to display information in a contained unit.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn more</Button>
      </CardActions>
    </Card>
  ),
}

export const WithMedia: Story = {
  render: () => (
    <Card sx={{ maxWidth: 360 }}>
      <CardMedia component="img" height="160" image="https://picsum.photos/seed/card1/360/160" alt="Card image" />
      <CardContent>
        <Typography variant="h6" gutterBottom>Media card</Typography>
        <Typography variant="body2" color="text.secondary">
          Cards with media are great for showcasing visual content alongside supporting text.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">Read more</Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  ),
}

export const WithHeader: Story = {
  render: () => (
    <Card sx={{ maxWidth: 360 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>}
        action={<IconButton><MoreVertIcon /></IconButton>}
        title="Alice Johnson"
        subheader="Posted 2 hours ago"
      />
      <CardMedia component="img" height="140" image="https://picsum.photos/seed/card2/360/140" alt="Post image" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Sharing this beautiful moment from our last team event. Great times!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton color="error"><FavoriteIcon /></IconButton>
        <IconButton><ShareIcon /></IconButton>
      </CardActions>
    </Card>
  ),
}

export const Outlined: Story = {
  render: () => (
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Outlined card</Typography>
        <Typography variant="body2" color="text.secondary">
          Outlined cards have no shadow — useful for dense UIs or when elevation would be visually noisy.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Action</Button>
      </CardActions>
    </Card>
  ),
}

export const Grid: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
      {['Design', 'Engineering', 'Product', 'Marketing'].map((team) => (
        <Card key={team} sx={{ width: 200 }}>
          <CardContent>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{team}</Typography>
            <Typography variant="body2" color="text.secondary">12 members</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">View team</Button>
          </CardActions>
        </Card>
      ))}
    </Stack>
  ),
}
