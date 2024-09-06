import PropTypes from 'prop-types';
import { Typography, useTheme } from "@mui/material";

const propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object
}

function MainHeading({ children, sx }) {
  const theme = useTheme();

  const style = { ...sx, color: theme.palette.q3.primary.main }

  return (
    <Typography fontWeight={'bold'} variant='h1' sx={style}>
      { children }
    </Typography>
  )
}

MainHeading.propTypes = propTypes

export default MainHeading;
