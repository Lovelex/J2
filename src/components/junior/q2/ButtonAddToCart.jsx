import PropTypes from 'prop-types'
import Image from "@/components/Image";
import { useQ2Context } from '@/contexts/junior/q2/Q2Context';
import { Box } from '@mui/material';
import Heading4 from '@/components/junior/q2/Heading4';

const propTypes = {
  dessert: PropTypes.object,
}
function ButtonAddToCart({ dessert }) {
  const { addDessert } = useQ2Context()

  return (
    <Box
      sx={{ cursor: 'pointer' }}
      display='flex'
      alignItems='center'
      p={2}
      onClick={() => addDessert({ id: dessert.id, data: dessert })}
    >
      <Image sx={{ width: '20px' }} imageName='icon-add-to-cart.svg' path='juniorQ2' />
      <Heading4>Add to Cart</Heading4>
    </Box>
  )
}

ButtonAddToCart.propTypes = propTypes

export default ButtonAddToCart
