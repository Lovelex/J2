import { ButtonBase, useTheme } from "@mui/material";
import PropTypes from "prop-types";

const propTypes = {
  bgColor: PropTypes.oneOf(['main', 'btnGradient', 'btnGradientFooter']),
  link: PropTypes.bool
}

const defaultProps = {
  bgColor: 'primary',
}

const HEIGHT = 60
const MOBILE_HEIGHT = HEIGHT - (HEIGHT * 0.2)

function Button({ bgColor }) {
  const theme = useTheme()

  let styles = {
    color: theme.palette.q3.white.main,
    background: theme.palette.q3[bgColor].main,
    height: { lg: `${HEIGHT}px`, xs: `${MOBILE_HEIGHT}px` },
    borderRadius: `${HEIGHT}px`,
    py: 4,
    px: 8,
    '&:hover::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      borderRadius: `${HEIGHT}px`,
      height: { lg: `${HEIGHT}px`, xs: `${MOBILE_HEIGHT}px` },
      backgroundColor: theme.palette.q3.white.hover,
    }
  }

  return (
    <ButtonBase sx={styles}>
      Get Started
    </ButtonBase>
  )
}


Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button;
