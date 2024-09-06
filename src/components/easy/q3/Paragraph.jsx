import PropTypes from 'prop-types';
import { Typography, useTheme } from "@mui/material";

const propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object
}

function Paragraph({ children, sx }) {
  const theme = useTheme();

  const style = { ...sx, color: theme.palette.q3.grey.main }

  return (
    <Typography variant='body1' sx={style}>
      { children }
    </Typography>
  )
}

Paragraph.propTypes = propTypes

export default Paragraph;
