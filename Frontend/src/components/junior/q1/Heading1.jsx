import BaseTypography from "@/components/junior/q1/BaseTypography"
import { useTheme } from "@emotion/react"
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object
}

function Heading1({ children, sx }) {
  const theme = useTheme()

  return (
    <BaseTypography
      variant="h1"
      fontWeight="bold"
      color={theme.palette.junior.q1.base.tertiary.main}
      sx={{ ...sx, fontSize: '1.625rem' }}
    >
      {children}
    </BaseTypography>
  )
}

Heading1.propTypes = propTypes

export default Heading1
