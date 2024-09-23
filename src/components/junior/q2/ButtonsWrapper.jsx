import PropTypes from 'prop-types'
import { Box } from "@mui/material";
import Image from "@/components/Image";
import { useTheme } from "@emotion/react";
import ButtonIcon from '@/components/junior/q2/ButtonIcon';

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
      color: theme.palette.junior.q2.base.primary.main,
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
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
              <ButtonIcon imageName='icon-decrement-quantity.svg' />
              <span>{quantity}</span>
              <ButtonIcon imageName='icon-increment-quantity.svg' />
            </Box>
          )
      }
    </Box >
  )
}

ButtonsWrapper.propTypes = propTypes

export default ButtonsWrapper
