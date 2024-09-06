import { ButtonBase, useTheme } from "@mui/material";

function ButtonLink() {
  const theme = useTheme()

  let style = {
    color: theme.palette.q3.pink.main,
    '&:hover': {
      color: theme.palette.q3.pink.hover,
    }
  }

  return (
    <ButtonBase sx={style}>
      Get Started
    </ButtonBase>
  )
}

export default ButtonLink;
