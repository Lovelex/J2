import { Box, Container, Grid2 } from '@mui/material'
import CourseCard from '@/components/easy/q3/CourseCard'
import { useTheme } from '@emotion/react'
import SubHeading from '@/components/easy/q3/SubHeading'

import animation from '@/assets/easy/q3/images/icon-animation.svg'
import design from '@/assets/easy/q3/images/icon-design.svg'
import photography from '@/assets/easy/q3/images/icon-photography.svg'
import crypto from '@/assets/easy/q3/images/icon-crypto.svg'
import business from '@/assets/easy/q3/images/icon-business.svg'

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

const size = {
  xs: 12,
  sm: 6,
  lg: 4,
}

function Courses() {
  const theme = useTheme()

  return (
    <Box sx={{ py: 16, background: theme.palette.easy.q3.background.main }}>
      <Container>
        <Grid2 container rowSpacing={19} columnSpacing={8}>
          <Grid2
            sx={{
              borderRadius: 4,
              px: 8,
              py: 16,
              background: theme.palette.easy.q3.gradient.main
            }}
            size={size}
          >
            <SubHeading>
              Check out our most popular courses!
            </SubHeading>
          </Grid2>
          {
            ITEMS.map(({ icon, title, paragraph }) => (
              <CourseCard
                key={title}
                icon={icon}
                title={title}
                paragraph={paragraph}
                size={size}
              />
            ))
          }
        </Grid2>
      </Container>
    </Box>
  )
}

export default Courses;
