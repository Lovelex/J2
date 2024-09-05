import { Box } from "@mui/material";
import Button from "@/components/easy/q3/Button";
import logoDark from '@/assets/easy/q3/images/logo-dark.svg'

function Nav() {
  return (
    <Box className="nav d-flex align-items-center justify-content-between" sx={{ my: 6 }}>
      <img src={logoDark} />

      <Button bgColor='primary'>
        Get Started
      </Button>
    </Box>
  )
}

export default Nav;
