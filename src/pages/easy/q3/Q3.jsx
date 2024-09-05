import { Container } from '@mui/material'

import Footer from '@/components/easy/q3/Footer';
import Nav from '@/components/easy/q3/Nav';
import Hero from '@/components/easy/q3/Hero';

import './q3.scss'
import './_typography.scss'
import Courses from '@/components/easy/q3/Courses';



function Q3() {
  return (
    <>
      <Container id='easy-q3'>
        <Nav />

        <Hero />

        <Courses />
      </Container>
      <Footer />
    </>
  )
}

export default Q3
