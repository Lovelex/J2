import PropTypes from 'prop-types';
import BaseTypography from '@/components/easy/q3/BaseTypography';
import { useTheme } from '@emotion/react';

const propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object
}

function MainHeading({ children, sx }) {
  const theme = useTheme();

  return (
    <BaseTypography
      color={theme.palette.easy.q3.primary.main}
      fontWeight='bold'
      variant='h1'
      sx={{ ...sx, fontSize: '3.5rem' }}
    >
      { children }
    </BaseTypography>
  )
}

MainHeading.propTypes = propTypes

export default MainHeading;
