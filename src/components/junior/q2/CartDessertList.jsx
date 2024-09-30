import PropTypes from 'prop-types'
import CartDessertItem from "@/components/junior/q2/CartDessertItem";
import Image from "@/components/Image";
import CartConfirmButton from './CartConfirmButton';
import Heading4 from '@/components/junior/q2/Heading4';
import Heading2 from '@/components/junior/q2/Heading2';

const propTypes = {
  selectedDessertsList: PropTypes.object
}

function CartDessertList({ selectedDessertsList }) {
  return (
    <>
      {
        selectedDessertsList.data.map(dessert => (
          <CartDessertItem key={dessert.id} selectedDessert={dessert} />
        ))
      }
      <div>
        <Heading4>Order Total</Heading4>
        <Heading2>${selectedDessertsList.totalPrice}</Heading2>
      </div>

      <div>
        <Image
          imageName='icon-carbon-neutral.svg'
          path='juniorQ2'
        />

        <div>
          This is a <span>carbon-neutral</span> delivery
        </div>

        <CartConfirmButton />
      </div>
    </>
  )
}

CartDessertList.propTypes = propTypes

export default CartDessertList
