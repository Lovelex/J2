import { Box, useTheme } from "@mui/material";
import Button from "@/components/easy/q3/Button";
import logoLight from '@/assets/easy/q3/images/logo-light.svg'


function Footer() {
  const theme = useTheme()

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mt: 6,
      p: 4,
      backgroundColor: theme.palette.q3.primary.main
    }}>
      <img src={logoLight} />
      <Button bgColor='btnGradientFooter'>Get Started</Button>
    </Box>
  )
}

export default Footer;
