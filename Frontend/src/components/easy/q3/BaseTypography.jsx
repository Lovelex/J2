import PropTypes from 'prop-types';
import { Typography } from "@mui/material";

const propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
  fontWeight: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string
}

function BaseTypography({ children, sx, fontWeight, variant, color }) {
  return (
    <Typography
      color={color}
      fontWeight={fontWeight}
      variant={variant}
      sx={{ ...sx }}
    >
      { children }
    </Typography>
  )
}

BaseTypography.propTypes = propTypes

export default BaseTypography;
