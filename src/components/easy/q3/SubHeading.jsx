import PropTypes from 'prop-types';
import { useTheme } from "@mui/material";
import BaseTypography from '@/components/easy/q3/BaseTypography';

const propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object
}

function SubHeading({ children, sx }) {
  const theme = useTheme();

  return (
    <BaseTypography
      color={theme.palette.q3.secondary.main}
      fontWeight={'bold'}
      variant='h2'
      sx={{ ...sx }}
    >
      { children }
    </BaseTypography>
  )
}

SubHeading.propTypes = propTypes

export default SubHeading;
