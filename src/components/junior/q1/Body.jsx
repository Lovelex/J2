import BaseTypography from "@/components/junior/q1/BaseTypography"
import { useTheme } from "@emotion/react"
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
  color: PropTypes.string
}

function Body({ children, sx, color }) {
  const theme = useTheme()

  return (
    <BaseTypography
      color={color || theme.palette.junior.q1.base.primary.main}
      variant="body1"
      sx={{ ...sx, fontSize: '1rem' }}
    >
      {children}
    </BaseTypography>
  )
}

Body.propTypes = propTypes

export default Body
