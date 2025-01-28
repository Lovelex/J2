import BaseTypography from "@/components/junior/q1/BaseTypography"
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object
}

function Heading2({ children, sx }) {
  return (
    <BaseTypography fontWeight="bold" variant="h2" sx={{ ...sx, fontSize: '1.375rem' }}>
      {children}
    </BaseTypography>
  )
}

Heading2.propTypes = propTypes

export default Heading2
