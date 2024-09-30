import PropTypes from 'prop-types'
import BaseTypography from "@/components/junior/q2/BaseTypography"

const propTypes = {
  children: PropTypes.node
}

function Heading1({ children, ...props }) {
  return (
    <BaseTypography
      variant="h1"
      fontWeight="bold"
      sx={{ fontSize: '2.5rem' }}
      {...props}
    >
      {children}
    </BaseTypography>
  )
}

Heading1.propTypes = propTypes

export default Heading1
