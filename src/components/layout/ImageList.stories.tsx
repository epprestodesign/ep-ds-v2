import type { Meta, StoryObj } from '@storybook/react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'

const images = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/ep${i + 1}/248/248`,
  title: `Photo ${i + 1}`,
  author: `Photographer ${i + 1}`,
  cols: i === 0 ? 2 : 1,
  rows: i === 0 || i === 3 ? 2 : 1,
}))

const meta: Meta<typeof ImageList> = {
  title: 'Layout/ImageList',
  component: ImageList,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {
  render: () => (
    <ImageList cols={3} rowHeight={160} sx={{ width: 500 }}>
      {images.slice(0, 9).map(({ id, src, title }) => (
        <ImageListItem key={id}>
          <img src={src} alt={title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </ImageListItem>
      ))}
    </ImageList>
  ),
}

export const WithTitleBar: Story = {
  render: () => (
    <ImageList cols={3} rowHeight={180} sx={{ width: 540 }}>
      {images.slice(0, 6).map(({ id, src, title, author }) => (
        <ImageListItem key={id}>
          <img src={src} alt={title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <ImageListItemBar
            title={title}
            subtitle={author}
            actionIcon={
              <IconButton sx={{ color: 'rgba(255,255,255,0.7)' }} aria-label={`info about ${title}`}>
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  ),
}

export const Masonry: Story = {
  render: () => (
    <ImageList variant="masonry" cols={3} gap={8} sx={{ width: 500 }}>
      {images.slice(0, 9).map(({ id, src, title }) => (
        <ImageListItem key={id}>
          <img src={src} alt={title} loading="lazy" style={{ width: '100%', display: 'block', borderRadius: 4 }} />
        </ImageListItem>
      ))}
    </ImageList>
  ),
}

export const Quilted: Story = {
  render: () => (
    <ImageList variant="quilted" cols={4} rowHeight={120} sx={{ width: 500 }}>
      {images.slice(0, 8).map(({ id, src, title, cols, rows }) => (
        <ImageListItem key={id} cols={cols} rows={rows}>
          <img src={src} alt={title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </ImageListItem>
      ))}
    </ImageList>
  ),
}
