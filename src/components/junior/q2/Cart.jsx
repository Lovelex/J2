import { Box } from "@mui/material";
import PropTypes from 'prop-types'
import { useQ2Context } from "@/contexts/junior/q2/Q2Context";
import CartEmpty from "@/components/junior/q2/CartEmpty";
import CartDessertList from "@/components/junior/q2/CartDessertList";
import Heading2 from "./Heading2";

const propTypes = {
  data: PropTypes.object,
  sx: PropTypes.object
}

function Cart() {
  const { selectedDessertsList } = useQ2Context()

  return (

    <Box sx={{ padding: 6, borderRadius: 3, backgroundColor: 'white' }}>
      {
        <>
          <Heading2>
            Your Cart ({selectedDessertsList.length})
          </Heading2>
          <>
            {
              selectedDessertsList.length === 0
                ? <CartEmpty />
                : <CartDessertList selectedDessertsList={selectedDessertsList} />
            }
          </>

        </>
      }
    </Box>
  )
}

Cart.propTypes = propTypes

export default Cart
