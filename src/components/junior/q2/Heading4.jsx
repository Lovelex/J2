import PropTypes from 'prop-types'
import BaseTypography from "@/components/junior/q2/BaseTypography"

const propTypes = {
  children: PropTypes.node
}

function Heading4({ children, ...props }) {
  return (
    <BaseTypography
      variant="h4"
      fontWeight="bold"
      sx={{ fontSize: '0.875rem' }}
      {...props}
    >
      {children}
    </BaseTypography>
  )
}

Heading4.propTypes = propTypes

export default Heading4
