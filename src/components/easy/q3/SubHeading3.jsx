import PropTypes from 'prop-types';
import BaseTypography from '@/components/easy/q3/BaseTypography';

const propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
  color: PropTypes.string
}

function SubHeading3({ children, sx, color }) {
  return (
    <BaseTypography
      color={color}
      fontWeight='bold'
      variant='h4'
      sx={{ ...sx, fontSize: '1.125rem' }}
    >
      { children }
    </BaseTypography>
  )
}

SubHeading3.propTypes = propTypes

export default SubHeading3;
