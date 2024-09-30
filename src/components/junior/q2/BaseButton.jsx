import PropTypes from 'prop-types'
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

const propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node
}
function BaseButton({ children, sx, ...props }) {
  const theme = useTheme()

  let style = {
    backgroundColor: theme.palette.junior.q2.brand.primary.main,
    color: theme.palette.junior.q2.base.primary.main,
    borderRadius: 100,
    ...sx,
  }

  return (
    <Box sx={style} {...props}>
      {children}
    </Box >
  )
}

BaseButton.propTypes = propTypes

export default BaseButton
