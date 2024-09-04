import PropTypes from 'prop-types';
import { Typography, useTheme } from "@mui/material";

const propTypes = {
  children: PropTypes.node
}

function MainHeading({ children }) {
  const theme = useTheme();

  return (
    <Typography fontWeight={'bold'} variant='h1' sx={{ color: theme.palette.q3.primary.main }}>
      { children }
    </Typography>
  )
}

MainHeading.propTypes = propTypes

export default MainHeading;
