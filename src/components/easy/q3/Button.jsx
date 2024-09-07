import PropTypes from "prop-types";
import { useTheme } from "@mui/material";
import BaseButton from "@/components/easy/q3/BaseButton";

const propTypes = {
  bgColor: PropTypes.string,
  link: PropTypes.bool
}

const defaultProps = {
  bgColor: 'primary',
}

const HEIGHT = 60
const MOBILE_HEIGHT = HEIGHT - (HEIGHT * 0.2)

function Button({ bgColor }) {
  const theme = useTheme()

  let style = {
    color: theme.palette.q3.white.main,
    background: bgColor,
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
    <BaseButton sx={style}>
      Get Started
    </BaseButton>
  )
}


Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button;
