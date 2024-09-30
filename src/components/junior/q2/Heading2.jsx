import PropTypes from 'prop-types'
import BaseTypography from "@/components/junior/q2/BaseTypography"

const propTypes = {
  children: PropTypes.node
}

function Heading2({ children, ...props }) {
  return (
    <BaseTypography
      variant="h2"
      fontWeight="bold"
      sx={{ fontSize: '1.5rem' }}
      {...props}
    >
      {children}
    </BaseTypography>
  )
}

Heading2.propTypes = propTypes

export default Heading2
