import PropTypes from 'prop-types';
import { useTheme } from "@mui/material";
import BaseTypography from '@/components/easy/q3/BaseTypography';

const propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object
}

function Paragraph({ children, sx }) {
  const theme = useTheme();

  return (
    <BaseTypography
      color={theme.palette.easy.q3.grey.main}
      variant='body1'
      sx={{ ...sx, fontSize: '1.125rem' }}
    >
      { children }
    </BaseTypography>
  )
}

Paragraph.propTypes = propTypes

export default Paragraph;
