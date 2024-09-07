import { Box, Grid2, useTheme } from "@mui/material";
import Button from "@/components/easy/q3/Button";
import MainHeading from '@/components/easy/q3/MainHeading'
import Paragraph from '@/components/easy/q3/Paragraph';

import heroDesktopLg from '@/assets/easy/q3/images/image-hero-desktop.webp'
import heroDesktopSm from '@/assets/easy/q3/images/image-hero-tablet.webp'
import heroMobile from '@/assets/easy/q3/images/image-hero-mobile.webp'

function Hero() {
  const theme = useTheme()

  const removeString = value => value.replace('@media ', '')
  const smMedia = removeString(theme.breakpoints.up('sm'))
  const mdMedia = removeString(theme.breakpoints.up('md'))

  return (
    // Altura foi fixada em 560px para que o tamanho da linha seja o da imagem da mulher
    // E não a imagem total
    <Grid2 className='hero' container sx={{ height: 560, my: 16 }}>
      <Grid2 size={{ xs: 12, sm: 6 }} sx={{ alignSelf: 'center' }}>
        <MainHeading sx={{ mb: 6 }}>
          Maximize skill, minimize budget
        </MainHeading>
        <Paragraph sx={{ mb: 10 }}>
          Our modern courses across a range of in-demand skills will give you the knowledge you
          need to live the life you want.
        </Paragraph>
        <Button bgColor={theme.palette.q3.gradient.main}>
          Get Started
        </Button>
      </Grid2>

      <Grid2 size={{ xs: 12, sm: 6 }}>
        <picture>
          <source media={mdMedia} srcSet={heroDesktopLg} />
          <source media={smMedia} srcSet={heroDesktopSm} />
          <Box
            component='img'
            sx={{
              zIndex: -1,
              position: { sm: "absolute" },
              width: { xs: "100%", sm: "auto"},
              top: { md: "-190px", sm: "-38px" },
              right: { md: "-378px", sm: "-298px" }
            }}
            src={heroMobile}
          />
        </picture>
      </Grid2>
    </Grid2>
  )
}

export default Hero;
