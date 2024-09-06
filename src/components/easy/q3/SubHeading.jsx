import PropTypes from 'prop-types';
import { Typography, useTheme } from "@mui/material";

const propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object
}

function SubHeading({ children, sx }) {
  const theme = useTheme();

  const style = { ...sx, color: theme.palette.q3.secondary .main }

  return (
    <Typography fontWeight={'bold'} variant='h2' sx={style}>
      { children }
    </Typography>
  )
}

SubHeading.propTypes = propTypes

export default SubHeading;
