import { Box } from "@mui/material"
import PropTypes from 'prop-types'
import Heading4 from "./Heading4"

const propTypes = {
  selectedDessert: PropTypes.object
}

function CartDessertItem({ selectedDessert, ...props }) {
  return (
    <Box { ...props }>
      <Heading4>{selectedDessert.name}</Heading4>
      <Heading4>{selectedDessert.quantity}x</Heading4>
      <Heading4>@${selectedDessert.price}</Heading4>
      <Heading4>${selectedDessert.price * selectedDessert.quantity}</Heading4>
      <hr />
    </Box>
  )
}

CartDessertItem.propTypes = propTypes

export default CartDessertItem
