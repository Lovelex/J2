import { ButtonBase, useTheme } from "@mui/material";

function Button() {
  const theme = useTheme()

  const height =  60

  return (
    <ButtonBase sx={
      {
        color: theme.palette.q3.white.main,
        background: theme.palette.q3.btnGradient.main,
        height: {lg: `${height}px`, xs: `${height - (height * 0.2)}px`},
        borderRadius: '1000px',
        py: 4,
        px: 8,
        '&:hover': {
          background: theme.palette.q3.btnGradient.hover,
        }
      }
    }>
      Get Started
    </ButtonBase>
  )
}

export default Button;
