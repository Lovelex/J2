import { Typography } from "@mui/material"
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
  variant: PropTypes.string,
  fontWeight: PropTypes.string,
  color: PropTypes.string
}

function BaseTypography({ children, sx, variant, fontWeight, color }) {
  return (
    <Typography
      variant={variant}
      fontWeight={fontWeight}
      color={color}
      sx={{ ...sx }}
    >
      {children}
    </Typography>
  )
}

BaseTypography.propTypes = propTypes

export default BaseTypography
