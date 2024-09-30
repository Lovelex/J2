import PropTypes from 'prop-types'
import { useTheme } from "@emotion/react";
import { useQ2Context } from '@/contexts/junior/q2/Q2Context';
import BaseButton from '@/components/junior/q2/BaseButton';
import ButtonAddToCart from './ButtonAddToCart';
import ButtonsQuantityControl from './ButtonsQuantityControl';

const propTypes = {
  sx: PropTypes.object,
  dessert: PropTypes.object
}
function ButtonsWrapper({ sx, dessert }) {

  const {
    selectedDesserts
  } = useQ2Context()

  const selectedDessert = selectedDesserts[dessert.id]

  const theme = useTheme()

  let style = {
    ...sx,
    width: '60%'
  }

  if (!selectedDessert) {
    const selectedStyle = {
      backgroundColor: theme.palette.junior.q2.base.primary.main,
      color: theme.palette.junior.q2.base.secondary.main,
      border: `1px solid ${theme.palette.junior.q2.brand.secondary.main}`
    }

    style = {
      ...style,
      ...selectedStyle,
    }
  }

  return (
    <BaseButton sx={style}>
      {
        !selectedDessert
          ? <ButtonAddToCart dessert={dessert} />
          : <ButtonsQuantityControl selectedDessert={selectedDessert} />
      }
    </BaseButton >
  )
}

ButtonsWrapper.propTypes = propTypes

export default ButtonsWrapper
