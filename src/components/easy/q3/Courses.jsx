import { Box, Card, Grid2 } from '@mui/material'
import CourseCard from '@/components/easy/q3/CourseCard'

import animation from '@/assets/easy/q3/images/icon-animation.svg'
import design from '@/assets/easy/q3/images/icon-design.svg'
import photography from '@/assets/easy/q3/images/icon-photography.svg'
import crypto from '@/assets/easy/q3/images/icon-crypto.svg'
import business from '@/assets/easy/q3/images/icon-business.svg'
import { useTheme } from '@emotion/react'

const ITEMS = [
  {
    icon: animation,
    title: 'Animation',
    paragraph: `Learn the latest animation techniques to create stunning motion design and
      captivate your audience.`
  },
  {
    icon: design,
    title: 'Design',
    paragraph: `Create beautiful, usable interfaces to help shape the future of how the web looks.`
  },
  {
    icon: photography,
    title: 'Photography',
    paragraph: `Explore critical fundamentals like lighting, composition, and focus to capture
      exceptional photos.`
  },
  {
    icon: crypto,
    title: 'Crypto',
    paragraph: `All you need to know to get started investing in crypto. Go from beginner to
      advanced with this 54 hour course.`
  },
  {
    icon: business,
    title: 'Business',
    paragraph: `A step-by-step playbook to help you start, scale, and sustain your business
      without outside investment.`
  },
]

function Courses() {
  const theme = useTheme()

  return (
    <Box sx={{ mb: 20, py: 16 }}>
      <Grid2 container spacing={2}>
        <Grid2
          color={theme.palette.q3.white.main}
          sx={{ borderRadius: 4, px: 8, pt: 16, background: theme.palette.q3.gradient.main }}
          size={4}
        >
          Check out our most popular courses!
        </Grid2>
        {
          ITEMS.map(({ icon, title, paragraph }) => (
            <Grid2
              sx={{ position: 'relative', p: 4, my: 2 , overflow: 'visible', borderRadius: 4 }}
              component={Card}
              key={title}
              size={4}
            >
              <CourseCard
                key={title}
                icon={icon}
                title={title}
                paragraph={paragraph}
              />
            </Grid2>
          ))
        }
      </Grid2>
    </Box>
  )
}

export default Courses;
