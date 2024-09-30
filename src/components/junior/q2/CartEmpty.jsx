import PropTypes from 'prop-types'
import Image from '@/components/Image'

const propTypes = {
  selectedDessert: PropTypes.object
}

function CartEmpty() {
  return (
    <>
      <Image path='juniorQ2' imageName='illustration-empty-cart.svg' />

      <h3>Your added items will appear here</h3>
    </>
  )
}

CartEmpty.propTypes = propTypes

export default CartEmpty
