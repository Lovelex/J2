import PropTypes from 'prop-types'
import BaseTypography from "@/components/junior/q2/BaseTypography"

const propTypes = {
  children: PropTypes.node
}

function Heading3({ children, ...props }) {
  return (
    <BaseTypography
      variant="h3"
      fontWeight="bold"
      sx={{ fontSize: '1rem' }}
      {...props}
    >
      {children}
    </BaseTypography>
  )
}

Heading3.propTypes = propTypes

export default Heading3
