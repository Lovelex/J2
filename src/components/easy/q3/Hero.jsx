import { Grid2 } from "@mui/material";
import Button from "@/components/easy/q3/Button";
import MainHeading from '@/components/easy/q3/MainHeading'
import Paragraph from '@/components/easy/q3/Paragraph';

import heroDesktop from '@/assets/easy/q3/images/image-hero-desktop.png'

function Hero() {

  return (
    // Altura foi fixada em 560px para que o tamanho da linha seja o da imagem da mulher
    // E não a imagem total
    <Grid2 className='hero' container sx={{ height: 560, my: 16 }}>
      <Grid2 size={5} sx={{ alignSelf: 'center' }}>
        <MainHeading sx={{ mb: 6 }}>
          Maximize skill, minimize budget
        </MainHeading>
        <Paragraph sx={{ mb: 10 }}>
          Our modern courses across a range of in-demand skills will give you the knowledge you
          need to live the life you want.
        </Paragraph>
        <Button bgColor='gradient'>
          Get Started
        </Button>
      </Grid2>
      <Grid2 size={6}>
        <img className='hero--img' src={heroDesktop} />
      </Grid2>
    </Grid2>
  )
}

export default Hero;
