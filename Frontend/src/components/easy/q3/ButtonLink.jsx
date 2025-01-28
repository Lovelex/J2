import { useTheme } from "@mui/material";
import PropTypes from 'prop-types'
import BaseButton from "@/components/easy/q3/BaseButton";

const propTypes = {
  sx: PropTypes.object
}

function ButtonLink({ sx }) {
  const theme = useTheme()

  let style = {
    ...sx,
    color: theme.palette.easy.q3.pink.main,
    '&:hover': {
      color: theme.palette.easy.q3.pink.hover,
    }
  }

  return (
    <BaseButton sx={style}>
      Get Started
    </BaseButton>
  )
}

ButtonLink.propTypes = propTypes

export default ButtonLink;
