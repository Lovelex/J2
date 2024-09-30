import { Box, Dialog } from '@mui/material'
import { useState } from 'react'
import Image from '@/components/Image'
import { useQ2Context } from '@/contexts/junior/q2/Q2Context'
import CartDessertItem from '@/components/junior/q2/CartDessertItem'
import BaseButton from '@/components/junior/q2/BaseButton'
import Heading1 from '@/components/junior/q2/Heading1'
import Heading4 from '@/components/junior/q2/Heading4'
import Heading2 from '@/components/junior/q2/Heading2'


const onConfirm = ({ resetSelectedDesserts, setOpen }) => {
  resetSelectedDesserts()
  setOpen(false)
}

function CartConfirmButton() {
  const [open, setOpen] = useState(false)
  const { selectedDessertsList, resetSelectedDesserts } = useQ2Context()

  return (
    <>
      <BaseButton
        onClick={() => setOpen(true)}
        display='flex'
        alignItems='center'
        justifyContent='center'
        py={4}
      >
        Confirm Order
      </BaseButton>


      <Dialog
        fullWidth
        maxWidth={false}
        PaperProps={{ sx: { maxWidth: '592px' } }}
        onClose={() => setOpen(false)} open={open}
      >
        <Box p={10}>
          <Image imageName='icon-order-confirmed.svg' path='juniorQ2' />

          <Heading1>Order Confirmed</Heading1>

          <span>We hope you enjoy your food!</span>

          <Box p={6}>
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
            </>
          </Box>

          <BaseButton
            onClick={() => onConfirm({ resetSelectedDesserts, setOpen })}
            display='flex'
            alignItems='center'
            justifyContent='center'
            py={4}
          >
            Start New Order
          </BaseButton>
        </Box>
      </Dialog>
    </>
  )
}

export default CartConfirmButton
