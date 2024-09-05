import { Grid2 } from "@mui/material";
import Button from "@/components/easy/q3/Button";
import MainHeading from '@/components/easy/q3/MainHeading'
import heroDesktop from '@/assets/easy/q3/images/image-hero-desktop.png'
import Paragraph from '@/components/easy/q3/Paragraph';


function Hero() {

  return (
    <Grid2 className='hero' container>
      <Grid2 size={6}>
        <MainHeading>
          Maximize skill,minimize budget
        </MainHeading>
        <Paragraph>
          Our modern courses across a range of in-demand skills will give you the knowledge you
          need to live the life you want.
        </Paragraph>
        <Button bgColor='btnGradient'>
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
