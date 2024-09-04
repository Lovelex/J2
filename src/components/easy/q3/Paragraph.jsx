import PropTypes from 'prop-types';
import { Typography, useTheme } from "@mui/material";

const propTypes = {
  children: PropTypes.node
}

function Paragraph({ children }) {
  const theme = useTheme();

  return (
    <Typography variant='p' sx={{ color: theme.palette.q3.grey.main }}>
      { children }
    </Typography>
  )
}

Paragraph.propTypes = propTypes

export default Paragraph;
