import BaseTypography from "@/components/junior/q1/BaseTypography"
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object
}

function Heading3({ children, sx }) {
  return (
    <BaseTypography variant="h3" sx={{ ...sx, fontSize: '0.75rem' }}>
      {children}
    </BaseTypography>
  )
}

Heading3.propTypes = propTypes

export default Heading3
