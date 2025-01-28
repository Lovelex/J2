import { Container } from '@mui/material'

import Footer from '@/components/easy/q3/Footer';
import Nav from '@/components/easy/q3/Nav';
import Hero from '@/components/easy/q3/Hero';
import Courses from '@/components/easy/q3/Courses';

function Q3() {
  return (
    <>
      <Container
        sx={{ position: 'relative' }}
        id='easy-q3'
      >
        <Nav />

        <Hero />
      </Container>

      <Courses />

      <Footer />
    </>
  )
}

export default Q3
