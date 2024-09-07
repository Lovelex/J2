import PropTypes from 'prop-types';
import { useTheme } from "@mui/material";
import BaseTypography from '@/components/easy/q3/BaseTypography';

const propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object
}

function SubHeading2({ children, sx }) {
  const theme = useTheme();

  return (
    <BaseTypography
      color={theme.palette.q3.primary.main}
      fontWeight='bold'
      variant='h3'
      sx={{ ...sx, fontSize: '1.5rem' }}
    >
      { children }
    </BaseTypography>
  )
}

SubHeading2.propTypes = propTypes

export default SubHeading2;
