import { Box, Container, useTheme } from "@mui/material";
import Button from "@/components/easy/q3/Button";

import logoLight from '@/assets/easy/q3/images/logo-light.svg'


function Footer() {
  const theme = useTheme()

  const boxStyle = {
    backgroundColor: theme.palette.q3.primary.main,
    mt: 6,
    p: 4
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  return (
    <Box sx={boxStyle}>
      <Container style={containerStyle}>
        <img src={logoLight} />
        <Button bgColor='gradientFooter'>Get Started</Button>
      </Container>
    </Box>
  )
}

export default Footer;
