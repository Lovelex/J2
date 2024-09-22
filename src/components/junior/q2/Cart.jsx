import { Box } from "@mui/material";
import PropTypes from 'prop-types'

const propTypes = {
  data: PropTypes.object,
  sx: PropTypes.object
}

function Cart({ sx }) {
  return (
    <Box sx={{ ...sx }}>
      Cart
    </Box>
  )
}

Cart.propTypes = propTypes

export default Cart
