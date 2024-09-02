import { Avatar, Button, Container, Grid2 } from '@mui/material'
import logoDark from '@/assets/easy/q3/images/logo-dark.svg'
import logoLight from '@/assets/easy/q3/images/logo-light.svg'
import heroDesktop from '@/assets/easy/q3/images/image-hero-desktop.png'

import animation from '@/assets/easy/q3/images/icon-animation.svg'
import design from '@/assets/easy/q3/images/icon-design.svg'
import photography from '@/assets/easy/q3/images/icon-photography.svg'
import crypto from '@/assets/easy/q3/images/icon-crypto.svg'
import business from '@/assets/easy/q3/images/icon-business.svg'

import './q3.scss'
import './_colors.scss'
import './_typography.scss'

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

function Q3() {
  return (
    <Container id='easy-q3'>
      <nav>
        <img src={logoDark} />

        <Button>
          Get Started
        </Button>

      </nav>

      <header>
        <div>
          <span>
            Maximize skill,minimize budget
          </span>
          <span>
            Our modern courses across a range of in-demand skills will give you the knowledge you
            need to live the life you want.
          </span>
          <Button>
            Get Started
          </Button>
        </div>
        <div>
          <img src={heroDesktop} />
        </div>
      </header>

      <main>
        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            Check out our most popular courses!
          </Grid2>
          {
            ITEMS.map(({ icon, title, paragraph }) => (
              <Grid2 key={title} size={4}>
                <Avatar src={icon} />
                <h3>{title}</h3>
                <p>{paragraph}</p>
                <Button>
                  Get Started
                </Button>
              </Grid2>
            ))
          }
        </Grid2>
      </main>

      <footer>
        <img src={logoLight} />
        <Button>Get Started</Button>
      </footer>
    </Container>
  )
}

export default Q3
