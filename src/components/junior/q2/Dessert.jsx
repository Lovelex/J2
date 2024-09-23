import { Box } from "@mui/material";
import PropTypes from 'prop-types'
import Image from "@/components/Image";
import ButtonsWrapper from "@/components/junior/q2/ButtonsWrapper";

const propTypes = {
  data: PropTypes.object,
  sx: PropTypes.object
}
function Dessert({ data, sx }) {

  return (
    <>
      <Box sx={{ position: 'relative', maxWidth: '250px', maxHeight: '240px' }}>
        <Image
          sx={{ width: '100%', borderRadius: 2, maxWidth: '250px', maxHeight: '240px' }}
          imageName={data.image.desktop}
          path='juniorQ2'
        />

        <Box sx={{ ...sx, display: 'flex', justifyContent: 'center' }}>
          <ButtonsWrapper sx={{ position: 'absolute', bottom: '-20px' }} />
        </Box>
      </Box>

      <Box>
        <div>{data.name}</div>
        <div>{data.category}</div>
        <div>{data.price}</div>
      </Box>
    </>
  )
}

Dessert.propTypes = propTypes

export default Dessert
