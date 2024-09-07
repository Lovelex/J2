import { Box, useTheme } from "@mui/material";
import Button from "@/components/easy/q3/Button";

import logoDark from '@/assets/easy/q3/images/logo-dark.svg'

function Nav() {
  const theme = useTheme()

  const style = {
    mt: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }

  return (
    <Box className="nav " sx={style}>
      <img src={logoDark} />

      <Button bgColor={theme.palette.q3.primary.main}>
        Get Started
      </Button>
    </Box>
  )
}

export default Nav;
