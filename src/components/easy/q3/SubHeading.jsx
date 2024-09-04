import PropTypes from 'prop-types';
import { Typography, useTheme } from "@mui/material";

const propTypes = {
  children: PropTypes.node
}

function SubHeading({ children }) {
  const theme = useTheme();

  return (
    <Typography fontWeight={'bold'} variant='h2' sx={{ color: theme.palette.q3.secondary .main }}>
      { children }
    </Typography>
  )
}

SubHeading.propTypes = propTypes

export default SubHeading;
