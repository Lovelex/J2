import PropTypes from 'prop-types'
import { Box } from "@mui/material";
import Image from "@/components/Image";
import { useTheme } from "@emotion/react";

const propTypes = {
  sx: PropTypes.object,
  quantity: PropTypes.number
}
function ButtonsWrapper({ sx, quantity }) {

  const theme = useTheme()
  console.log(theme)
  // mock
  quantity = 0


  return (
    <Box sx={{
      ...sx,
      width: '60%',
      borderRadius: 100,
      p: 2,
      backgroundColor: theme.palette.junior.q2.brand.primary.main,
    }}>
      {
        quantity === 1
          ? (
            <div>
              <Image sx={{ width: '20px' }} imageName='icon-add-to-cart.svg' path='juniorQ2' />
              <span>Add to Cart</span>
            </div>
          )
          : (
            <div>
              <Image sx={{ width: '20px' }} imageName='icon-decrement-quantity.svg' path='juniorQ2' />
              <span className='quantity'>{quantity}</span>
              <Image sx={{ width: '20px' }} imageName='icon-increment-quantity.svg' path='juniorQ2' />
            </div>
          )
      }
    </Box >
  )
}

ButtonsWrapper.propTypes = propTypes

export default ButtonsWrapper
