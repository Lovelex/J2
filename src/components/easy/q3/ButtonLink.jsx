import { ButtonBase, useTheme } from "@mui/material";

function ButtonLink() {
  const theme = useTheme()

  let styles = {
    color: theme.palette.q3.pink.main,
    '&:hover': {
      color: theme.palette.q3.pink.hover,
    }
  }

  return (
    <ButtonBase sx={styles}>
      Get Started
    </ButtonBase>
  )
}

export default ButtonLink;
