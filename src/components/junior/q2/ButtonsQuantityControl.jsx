import PropTypes from 'prop-types'
import { Box } from '@mui/material';
import { useQ2Context } from '@/contexts/junior/q2/Q2Context';
import ButtonIcon from '@/components/junior/q2/ButtonIcon';

const propTypes = {
  selectedDessert: PropTypes.object
}

function ButtonsQuantityControl({ selectedDessert }) {
  const { decrementQuantity, incrementQuantity } = useQ2Context()

  return (
    <Box p={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
      <ButtonIcon
        onClick={() => decrementQuantity(selectedDessert.id)}
        imageName='icon-decrement-quantity.svg'
      />
      <span>{selectedDessert.quantity}</span>
      <ButtonIcon
        onClick={() => incrementQuantity(selectedDessert.id)}
        imageName='icon-increment-quantity.svg'
      />
    </Box>
  )
}

ButtonsQuantityControl.propTypes = propTypes

export default ButtonsQuantityControl
